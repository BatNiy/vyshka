var config = require("./webpack.config.js");
var path = require("path");
config.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    config.entry
];

config.module = {
    loaders: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        {test: /\.tsx?$/, loader: "ts-loader"},
        // {
        //     loader: 'react-hot',
        //     include: [
        //         path.resolve(__dirname, 'webApp/src/')
        //     ]
        // },
        {loaders: ['react-hot'], include: path.join(__dirname, 'webApp/src/dist/bundle.js') }
    ],

    preLoaders: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {test: /\.js$/, loader: "source-map-loader"}
    ]
};

config.devServer = {
    host: '0.0.0.0',
    port: 3000,
    contentBase: 'webApp'
};

module.exports = config;