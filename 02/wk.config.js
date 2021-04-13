const path = require("path")

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build")
    },
    module: {
        rules: [
            // 存放一个个rule对象，每个rule对象可以有多个属性
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader",
                    "less=loader"
                ]
            },
            {
                test: /\.js$/i,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            plugins: [
                                "@babel/plugin-transform-arrow-functions",
                                "@babel/plugin-transform-block-scoping"
                            ]
                    }
                    }
                ]
            }
        ]
    }
}