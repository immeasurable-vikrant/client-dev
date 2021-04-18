const HtmlWebpackPlugin =  require('html-webpack-plugin')

module.exports = {
    module: {
        reules:[
            {
                test: /\.(js|ksx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}