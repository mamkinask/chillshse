const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/pages/chillsv2.html', './index.html', ['index']),
  createPages('./src/pages/diagnostics.html', './pages/diagnostics.html', ['index']),
  createPages('./src/pages/diagnostics-test.html', './pages/diagnostics-test.html', ['index']),
  createPages('./src/pages/timeline.html', './pages/timeline.html', ['index']),
  createPages('./src/pages/articles.html', './pages/articles.html', ['index']),
  createPages('./src/pages/alien-object.html', './pages/alien-object.html', ['index']),
  createPages('./src/pages/guide-alien.html', './pages/guide-alien.html', ['index'])
]

module.exports = htmlPages
