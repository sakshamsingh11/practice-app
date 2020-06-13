const presets = [
  [
    '@babel/preset-env',
    {
      targets: "> 0.25%, not dead",
      corejs: 3,
      useBuiltIns: 'usage'
    }
  ],
  '@babel/preset-react'
]

// const plugins = [
//   '@loadable/babel-plugin',
//   ['@housing/minify-graphql/index.js', { filePath: paths.gqlNames }],
//   '@babel/plugin-syntax-dynamic-import'
// ]

module.exports = {
  presets,
  plugins: []
}