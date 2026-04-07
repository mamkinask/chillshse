const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPage(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPage('./src/pages/index.html', './index.html', ['shared', 'home']),
  createPage('./src/pages/diagnostics.html', './pages/diagnostics.html', ['shared', 'diagnostics']),
  createPage('./src/pages/diagnostics-test.html', './pages/diagnostics-test.html', ['shared', 'diagnostics-test']),
  createPage('./src/pages/timeline.html', './pages/timeline.html', ['shared', 'timeline']),
  createPage('./src/pages/articles.html', './pages/articles.html', ['shared', 'articles']),
  createPage('./src/pages/guide_horror_robot.html', './pages/guide_horror_robot.html', ['shared', 'guide-robot']),
  createPage('./src/pages/found_footage.html', './pages/found_footage.html', ['shared', 'guide-found-footage']),
  createPage('./src/pages/pagan_cults.html', './pages/pagan_cults.html', ['shared', 'guide-pagan-cults']),
  createPage('./src/pages/survival_horror.html', './pages/survival_horror.html', ['shared', 'guide-survival-horror']),
  createPage('./src/pages/object.html', './pages/object.html', ['shared', 'object'])
]

module.exports = htmlPages
