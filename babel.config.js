module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: ['react-native-reanimated/plugin'],
    // sourceMaps: "inline",
    // plugins: [
    //   '@babel/transform-react-jsx-source',
    //   [
    //     "@babel/plugin-transform-runtime",
    //     {
    //       "helpers": true,
    //       "regenerator": false
    //     }
    //   ],
    //   "@babel/proposal-object-rest-spread"
    // ],
  };
};
