module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ExpandableList',
      externals: {
        react: 'React'
      }
    }
  }
}
