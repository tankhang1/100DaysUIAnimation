module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/*': './src/*',
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/hooks': './src/hooks',
          '@/navigations': './src/navigations',
          '@/screens': './src/screens',
          '@/utils': './src/utils',
          '@/styles': './src/styles',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
