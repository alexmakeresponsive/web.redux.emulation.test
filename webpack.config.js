var NODE_ENV = process.env.NODE_ENV || 'development';

module.exports ={
    mode:    NODE_ENV,
    devtool: NODE_ENV == 'development' ? 'source-map' : false,
    context: __dirname + '/components/',

    entry: {
        'index.bundle.js': './App/index.jsx'
    },

    output: {
        path: __dirname + '/bundles',
        filename: '[name]',
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['latest', 'react'],
                            plugins: ["babel-plugin-transform-class-properties"]
                        }
                    }
                ]
            }
        ]
    },

    devServer: {
        host: 'localhost',
        port: 9000,
        contentBase: __dirname + '/',
        publicPath: '/bundles/',
        watchContentBase: true,
    },

    plugins: [],

    optimization: {
        splitChunks: {
            automaticNameDelimiter: '-',
            cacheGroups: {
                commons: {
                    name: true,
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    }

};