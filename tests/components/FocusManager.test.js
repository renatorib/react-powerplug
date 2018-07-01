/**
 * @jest-environment jest-environment-puppeteer
 */

const bootstrap = async () => {
  const page = await global.browser.newPage()

  const scripts = [
    './node_modules/react/umd/react.development.js',
    './node_modules/react-dom/umd/react-dom.development.js',
    './dist/react-powerplug.umd.js',
  ]

  await page.setViewport({ width: 1000, height: 1000 })

  for (const path of scripts) {
    await page.addScriptTag({ path })
  }

  await page.evaluate(() => {
    const container = document.createElement('div')
    if (document.body) {
      const body = document.body
      body.appendChild(container)
      body.style.margin = '0px'
    }

    window.render = component => {
      window.ReactDOM.render(component, container)
    }
  })

  page.on('console', msg =>
    msg.args().forEach(arg => console.log(arg.toString()))
  )

  return page
}

const delay = async timeout =>
  new Promise(resolve => setTimeout(resolve, timeout))

test('keep focus when click on menu', async () => {
  const page = await bootstrap()
  const renderFn = jest.fn()
  await page.exposeFunction('renderFn', renderFn)

  await page.evaluate(() => {
    const React = window.React
    const FocusManager = window.ReactPowerPlug.FocusManager

    const style = { width: 100, height: 100 }
    const App = () => (
      <FocusManager>
        {({ focused, bind }) => {
          window.renderFn({ focused })
          return (
            <>
              <div id="rect-1" style={style} {...bind} />
              {focused && <div id="rect-2" style={style} {...bind} />}
            </>
          )
        }}
      </FocusManager>
    )

    window.render(<App />)
  })

  expect(renderFn).lastCalledWith({ focused: false })
  await page.click('#rect-1')
  expect(renderFn).lastCalledWith({ focused: true })
  await page.click('#rect-2')
  expect(renderFn).lastCalledWith({ focused: true })
  // click outside
  await page.mouse.click(200, 50)
  await delay(100)
  expect(renderFn).lastCalledWith({ focused: false })
})

test('remove focus and state after calling blur', async () => {
  const page = await bootstrap()

  await page.evaluate(() => {
    const React = window.React
    const { FocusManager } = window.ReactPowerPlug

    const App = () => (
      <FocusManager>
        {({ focused, blur, bind }) => {
          window.blurFocusManager = blur
          const style = { width: 100, height: 100 }
          return (
            <>
              <div id="result">{focused ? 'focused' : 'blured'}</div>
              <div id="item1" style={style} {...bind} />
              <div id="item2" style={style} {...bind} onClick={blur} />
              <div id="item3" style={style} tabIndex={-1} />
            </>
          )
        }}
      </FocusManager>
    )

    window.render(<App />)
  })

  const getTextContent = node => node.textContent
  const isActiveElement = node => node === document.activeElement

  expect(await page.$eval('#result', getTextContent)).toEqual('blured')

  // focused on click
  await page.click('#item1')
  expect(await page.$eval('#result', getTextContent)).toEqual('focused')
  expect(await page.$eval('#item1', isActiveElement)).toEqual(true)
  expect(await page.$eval('#item2', isActiveElement)).toEqual(false)

  // blured on blur()
  await page.evaluate(() => window.blurFocusManager())
  expect(await page.$eval('#result', getTextContent)).toEqual('blured')
  expect(await page.$eval('#item1', isActiveElement)).toEqual(false)
  expect(await page.$eval('#item2', isActiveElement)).toEqual(false)

  // focused and immediately blured on click with blur() in it
  await page.click('#item2')
  expect(await page.$eval('#result', getTextContent)).toEqual('blured')
  expect(await page.$eval('#item1', isActiveElement)).toEqual(false)
  expect(await page.$eval('#item2', isActiveElement)).toEqual(false)

  // keep focus not registered in manager after blur()
  await page.click('#item3')
  expect(await page.$eval('#item3', isActiveElement)).toEqual(true)
  await page.evaluate(() => window.blurFocusManager())
  expect(await page.$eval('#item3', isActiveElement)).toEqual(true)
})
