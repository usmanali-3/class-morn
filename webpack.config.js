// const ExtractTextPlugin = require ("extract-text-webpack-plugin");

// module.exports = {
//     entry:[`${__dirname}/src/index.js`,`${__dirname}/src/css/styles.css`],
//     output:{
//         path:`${__dirname}/dist/js`,
//         filename: "main.js"
//     },
//     module:{
//         rules:[
//             {
//                 test:/\.js$/,
//                 exclude:/node_modules/,
//                 use:{
//                     loader:"babel-loader",
//                     options:{
//                         presets:["env"]
//                     }
//                 }
//             },
//             {
//                 test:/\.css$/,
//                 use: ExtractTextPlugin.extract({
//                     use:[
//                         {
//                             loader:"css-loader",
//                             options:{
//                                 url:false
//                             }
//                         }
//                     ]
//                 })
//             }
//         ]
//     },
//     plugins:[
//         new ExtractTextPlugin({
//             filename:"../css/main.css"
//         })
//     ]
// }