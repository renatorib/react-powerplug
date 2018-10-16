import pkg from './package.json'

export default {
  title: 'React PowerPlug',
  description: pkg.description,
  base: `/${pkg.name}/`,
  version: pkg.version,
  propsParser: false,
  hashRouter: true,
  themeConfig: {
    logo: {
      src:
        'https://raw.githubusercontent.com/renatorib/react-powerplug/master/logo.png',
      width: 231,
    },
    colors: {
      primary: '#3E9DE1',
    },
  },
}
