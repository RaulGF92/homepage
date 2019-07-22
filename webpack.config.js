let path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

/**
 * Configuración webpack
 */
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/App.js'), // Archivo JS inicial
    output: {
        path: path.resolve(__dirname, 'dist/src/'), //Ubicación de los codigo compilados
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080 // Puerto donde se desplegará el servidor
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','minify']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: path.resolve(__dirname, 'dist'),
                            name: '[path][name].[ext]'
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'assets/**/**',
            to: path.resolve(__dirname, 'dist/')
        }]),
        new MinifyPlugin()
    ],
    devServer: {
        // Escribe automaticamente todos los datos compilados
        writeToDisk: true
    }
}
