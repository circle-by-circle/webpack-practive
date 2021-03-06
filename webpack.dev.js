const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        host: "192.168.1.77"
    }
})