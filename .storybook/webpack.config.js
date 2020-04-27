const path = require("path");

const externalLibs = [
  path.resolve(__dirname,'../node_modules/react-native')
];

module.exports = ({ config }) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-expo"]
          }
        }
      ]
    });
    config.module.rules.push({
      test: /\.jsx?$/,
      include: externalLibs,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-expo"]
          }
        }
      ]
    });
  

  config.resolve.alias = {
    // replace `react-native` imports with `react-native-web`
    "react-native$": require.resolve("react-native-web"),
  };

  
  config.resolve.extensions.push(".ts", ".tsx",".web.js",".web.tsx");

  return config;
};
