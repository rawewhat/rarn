module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {},
      },
    ],
  ],
}
