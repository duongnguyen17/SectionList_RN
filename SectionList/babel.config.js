const path = require('path');
module.exports = {
  // presets: ['module:metro-react-native-babel-preset'],
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js', '.d.ts'],
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
    ],
    'jest-hoist',
  ],
};
