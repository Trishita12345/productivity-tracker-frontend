module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../app/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
};
