import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import uglify from 'rollup-plugin-uglify'

const getUMDConfig = ({ env, file }) => {
  const config = {
    input: './src/index.js',
    output: {
      file,
      format: 'umd',
      name: 'ReactPowerPlug',
      globals: {
        react: 'React',
      },
    },
    external: ['react'],
    plugins: [
      nodeResolve(),
      babel({
        runtimeHelpers: true,
        exclude: '**/node_modules/**',
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
    ],
  }

  if (env === 'development') {
    config.plugins.push(sizeSnapshot())
  }

  if (env === 'production') {
    config.plugins.push(
      uglify({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
      })
    )
  }

  return config
}

export default [
  getUMDConfig({ env: 'development', file: 'dist/react-powerplug.umd.js' }),
  getUMDConfig({ env: 'production', file: 'dist/react-powerplug.min.js' }),
]
