module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs'],
  viteFinal: (config) => {
    config.resolve = config.resolve ?? {};
    // Replace `react-native` imports with `react-native-web`. The pattern is
    // anchored: a bare prefix alias would also rewrite `react-native-web`
    // itself, since Vite replaces the matched prefix.
    config.resolve.alias = [
      ...(Array.isArray(config.resolve.alias) ? config.resolve.alias : []),
      {find: /^react-native$/, replacement: 'react-native-web'},
    ];
    config.resolve.extensions = [
      '.web.js',
      '.web.tsx',
      '.ts',
      '.tsx',
      ...(config.resolve.extensions ?? ['.mjs', '.js', '.jsx', '.json']),
    ];
    return config;
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
