import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import { HotModuleReplacementPlugin, NamedModulesPlugin, optimize } from "webpack"

const CommonsChunkPlugin = optimize.CommonsChunkPlugin,
  UglifyJsPlugin = optimize.UglifyJsPlugin

const PATHS = {
  src: path.join(__dirname, "/client/"),
}

const extractCSS = new ExtractTextPlugin({
  filename: "[name].bundle.css"
})

export default () => ({
  entry: {
    src: [
      "babel-polyfill",
      // Needed to preserve state on re-render
      "react-hot-loader/patch",
      // WDS host and port
      "webpack-dev-server/client?http://localhost:8080",
      // entry file ./index.js
      path.join(PATHS.src, "index.js")
    ],
    vendor: [
      "clipboard", "core-decorators", "group-css-media-queries",
      "highlight.js", "immutable", "lodash", "material-ui",
      "react", "react-addons-transition-group",
      "react-dom", "react-parallax", "react-redux", "react-router", "react-router-redux",
      "react-scroll", "react-tap-event-plugin", "redux-thunk", "redux-ui", "wpapi"
    ]
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].bundle.js"
  },
  devtool: "source-map",
  plugins: [
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "template.ejs"),
    }),
    new HotModuleReplacementPlugin(),
    extractCSS,
    new CommonsChunkPlugin("vendor"),
    new NamedModulesPlugin(),

  ],
  resolve: {
    alias: {
      src: PATHS.src,
      images: path.join(PATHS.src, "/assets/images"),
      shared_components: path.join(PATHS.src, "/common/components"),
      styles: path.join(PATHS.src, "/common/stylesheets"),
    },
    extensions: ["*", ".js", ".jsx", ".json", ".css", ".scss", ".png", ".jpg",
      ".svg"
    ],
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: "json-loader"
      }, {
        test: /\.css$/,
        loader: extractCSS.extract(["css-loader"])
      }, {
        test: /\.scss$/,
        loader: extractCSS.extract(["css-loader", "sass-loader"])
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: "file-loader"
      }, {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: PATHS.src,
        options: {
          // the babelrc in root is used to traspile only this config
          babelrc: false,
          // project settings are defined here
          presets: [
            [
              "es2015", {
                loose: true,
                modules: false
              }], "react"
          ],
          plugins: ["react-hot-loader/babel", "transform-flow-strip-types"]
        }
      }, {
        test: /\.html$/,
        use: "file-loader"
      }, {
        test: /\.md$/,
        use: ["html-loader", "highlight-loader", "markdown-loader"],
        exclude: /node_modules/
      }
    ],
  },
  devServer: {
    hot: true,
    stats: {
      colors: true
    }
  },
  node: {
    fs: "empty"
  }
})
