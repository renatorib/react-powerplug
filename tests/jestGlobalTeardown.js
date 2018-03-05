const os = require('os')
const path = require('path')
const del = require('del')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = async function() {
  console.log('Teardown Puppeteer Environment.')
  await global.__BROWSER__.close()
  await del(DIR, { force: true })
}
