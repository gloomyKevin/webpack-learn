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
                    // {
                    //     loader: "css-loader"
                    // }
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
}