var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var CopyWebpackPlugin = require('copy-webpack-plugin');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    htmlPl = require("html-webpack-plugin");
var HtmlPlugin =new htmlPl({
    filename: '../../html/index.html',
    template: 'webApp/src/html/index.html',
    inject: true,
    hash: false
});

module.exports = {
    entry: "./webApp/src/index.tsx",
    output: {
        filename: "app.js",
        publicPath: "public/js",
        path: "application/public/js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        modulesDirectories: ["node_modules"],
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {test: /\.tsx?$/, loader: 'ts-loader?configFileName=webApp/tsconfigWebApp.json'},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000&name=../assecs/[name].[ext]'
            }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {test: /\.js$/, loader: "source-map-loader"}
        ]
    },
    lessLoader: {
        lessPlugins: [
            new LessPluginCleanCSS({advanced: true}),
            new LessPluginAutoPrefix({browsers: ["last 5 versions"]})
        ]
    },
    htmlWebpackPlugin: HtmlPlugin,
    plugins: [
        HtmlPlugin,
        new ExtractTextPlugin("./application/public/css/[name].css")
    ]
};