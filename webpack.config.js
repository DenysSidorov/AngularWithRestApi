// use webpack --watch
// use webpack -p to minimaze
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // all css files in one css

module.exports = {
    context: __dirname + '/application', // where our application
    entry: './app.js', // begin file application
    output: {
        // path: __dirname + '/application',  // path to out file
        path: __dirname + '/asserts',  // path to out file
        filename: './bundle.js' // filename out file
    },
    resolve: {
        modulesDirectories: ['node_modules'], // where we can take files, like lodash
        alias: {
            // jquery: "bower_components/jquery/dist/jquery.js" //ссылка на jquery lib
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,  // regExp for files
                loader: 'babel',  // name loader
                exclude: /node_modules|bower_components/, //without node_module
                query: {
                    presets: ['es2015']
                }

            },
            {
                test: /\.html$/,
                loader: 'raw' //for template
            },
            {
                test: /\.css$/,
                // loader: 'style-loader|css-loader' // import css in main app.js:(
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader') // for one big css file
            },
            //webpack автоматически устранит зависимость bootstrap.js от jquery
            // { test: /bower_components\/dist\/bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

        ]
    },
    plugins: [
        //чтобы в любом месте сразу писать через $
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery"
        // }),
        new ExtractTextPlugin('bundle.css') // name one big css file, import css in main app.js
    ]
}