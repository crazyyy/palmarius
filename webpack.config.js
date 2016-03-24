var webpack = require("webpack");

module.exports = {
    entry: "./html/js/main",
    resolve: {
        modulesDirectories: [
            "./html/js/"
        ]
    },
    output: {
        publicPath: "./html/js/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};


