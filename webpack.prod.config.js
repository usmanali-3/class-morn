// var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [`${__dirname}/src/index.jsx`, "./src/css/styles.scss"],
  output: {
    path: `${__dirname}/dist/js`,
    filename: "bundle.js"
  },
   watch:true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: [
              "transform-object-rest-spread",
              "transform-class-properties"
            ]
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "env"],
            plugins: [
              "transform-object-rest-spread",
              "transform-class-properties"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                url: false
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: "css-loader",
              options: {
                url: false
              }
            },
            {
              loader:"sass-loader",
            }
          ]
        })
      }
    ]
  },
  devtool: "source-map",
  resolve: { extensions: [".js", ".jsx"] },

  plugins: [
    new ExtractTextPlugin({
      filename: "../css/style.css"
    })
  ]
};