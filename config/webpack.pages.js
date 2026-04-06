const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPage(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPage('./src/pages/chillsv2.html', './index.html', ['shared', 'home']),
  createPage('./src/pages/diagnostics.html', './pages/diagnostics.html', ['shared', 'diagnostics']),
  createPage('./src/pages/diagnostics-test.html', './pages/diagnostics-test.html', ['shared', 'diagnostics-test']),
  createPage('./src/pages/timeline.html', './pages/timeline.html', ['shared', 'timeline']),
  createPage('./src/pages/articles.html', './pages/articles.html', ['shared', 'articles']),
  createPage('./src/pages/alien-object.html', './pages/alien-object.html', ['shared', 'alien-object']),
  createPage('./src/pages/guide_horror_robot.html', './pages/guide_horror_robot.html', ['shared', 'guide-robot']),
  createPage('./src/pages/object.html', './pages/object.html', ['shared', 'object'])
]

module.exports = htmlPages
