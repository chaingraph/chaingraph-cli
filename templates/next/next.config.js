const withMDX = require('@next/mdx')()
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = withMDX({
  pageExtensions: ['js', 'mdx', 'tsx', 'ts'],
  webpack: config => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin())
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()]
    }

    return config
  },
  target: 'serverless',
})
