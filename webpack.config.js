var path = require("path");
var webpack = require("webpack");
 
module.exports = {
  entry: {
    app: ["./app/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.min.js"
  },
  module: {             
    loaders:[ 
        {
          test:/\.vue$/,
          loaders:"vue-loader",
          exclude:["/node_modules/"]
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          query: {presets: ['es2015','es2016']},
          exclude: /node_modules/
        }
          
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins : [
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false,  
        },
        compress: {
            warnings: false
        }
    })
  ],
  watch : true
};