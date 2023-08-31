const path = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/public/'),
        },
        compress: true,
        port: 3000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader", // "babel-loader
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        },
            {
                test: /(\.css|\.scss|\.sass|\.min.css)$/,
                include: path.resolve(__dirname, 'src'),
                use: ["style-loader", "css-loader", "postcss-loader"],

            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],

    }
}







