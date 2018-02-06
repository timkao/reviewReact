// Load our webpack config
const config = require('../../../webpack.config')

// Extract the publicPath config option from
// the output section. We need this for the dev
// middleware.
const {publicPath} = config.output

module.exports = require('webpack-dev-middleware')(
  require('webpack')(config),
  {publicPath}
)