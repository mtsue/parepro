const path = require("path");
const HtmlWebpackConfig = require("html-webpack-plugin");

const babel = () => ({
  test: /\.ts(x?)$/,
  exclude: /node_module/,
  loader: "ts-loader"
});

const style = () => ({
  test: /\.css$/,
  loader: ["style-loader", "css-loader"]
});

const clientConfig = mode => {
  return {
    mode,
    entry: path.join(__dirname, "src/index.tsx"),
    output: {
      path: path.join(__dirname, "dist/"),
      filename: "[name].js"
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 8080
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"]
    },
    module: {
      rules: [babel(), style()]
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          }
        }
      }
    },
    plugins: [
      new HtmlWebpackConfig({
        template: path.join(__dirname, "public/index.html")
      })
    ]
  };
};

module.exports = (env, args) => clientConfig(args.mode);
