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

test('restore focus after calling blur on inner component', async () => {
  const page = await bootstrap()
  const renderFn = jest.fn()
  const onChangeFn = jest.fn()
  await page.exposeFunction('renderFn', renderFn)
  await page.exposeFunction('onChangeFn', onChangeFn)

  await page.evaluate(() => {
    const React = window.React
    const FocusManager = window.ReactPowerPlug.FocusManager

    const App = () => (
      <FocusManager onChange={window.onChangeFn}>
        {({ focused, blur, bind }) => {
          window.renderFn({ focused })
          const stopPropagation = e => e.stopPropagation()
          return (
            <>
              <div id="outer" style={{ width: 100, height: 100 }} {...bind}>
                <div
                  id="inner"
                  style={{ width: 50, height: 50 }}
                  onClick={blur}
                  tabIndex={-1}
                  onFocus={stopPropagation}
                />
              </div>
            </>
          )
        }}
      </FocusManager>
    )

    window.render(<App />)
  })

  expect(renderFn).lastCalledWith({ focused: false })
  await page.click('#outer')
  expect(renderFn).lastCalledWith({ focused: true })
  expect(onChangeFn).lastCalledWith(true)
  await page.click('#inner')
  expect(renderFn).lastCalledWith({ focused: false })
  expect(onChangeFn).lastCalledWith(false)
  await page.click('#outer')
  expect(renderFn).lastCalledWith({ focused: true })
  expect(onChangeFn).lastCalledWith(true)
})
