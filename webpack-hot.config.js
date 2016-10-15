var config = require("./webpack.config.js");
var path = require("path");
config.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    config.entry
];

var loaders = [{loaders: ['react-hot-loader/webpack'], include: path.join(__dirname, 'webApp/src') }];
config.module.loaders =loaders.concat(config.module.loaders) ;

config.devServer = {
    host: '0.0.0.0',
    port: 3000,
    contentBase: 'application/dev_server',
    proxy: {
        '/**': {
            target: 'http://localhost:8080/'
        }
    }
};

config.plugins = config.plugins.slice(1);

module.exports = config;