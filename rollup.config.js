import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'

const pkg = require('./package.json')

const input = './src/index.js'

const isExternal = id => !id.startsWith('.') && !id.startsWith('/')

const getBabelOptions = ({ useESModules }) => ({
  exclude: '**/node_modules/**',
  runtimeHelpers: true,
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      { polyfill: false, useBuiltIns: true, useESModules },
    ],
  ],
})

export default [
  {
    input,
    output: {
      file: 'dist/react-powerplug.umd.js',
      format: 'umd',
      name: 'ReactPowerPlug',
      globals: {
        react: 'React',
      },
    },
    external: ['react'],
    plugins: [
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      sizeSnapshot(),
    ],
  },

  {
    input,
    output: {
      file: 'dist/react-powerplug.min.js',
      format: 'umd',
      name: 'ReactPowerPlug',
      globals: {
        react: 'React',
      },
    },
    external: ['react'],
    plugins: [
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      uglify({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
      }),
    ],
  },

  {
    input,
    output: { file: pkg.main, format: 'cjs' },
    external: isExternal,
    plugins: [babel(getBabelOptions({ useESModules: false })), sizeSnapshot()],
  },

  {
    input,
    output: { file: pkg.module, format: 'es' },
    external: isExternal,
    plugins: [
      babel(getBabelOptions({ useESModules: true })),
      sizeSnapshot({ treeshake: true }),
    ],
  },
]
