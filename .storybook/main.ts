import type {StorybookConfig} from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: '@storybook/react-vite',
  docs: {
    autodocs: true,
  },
};

export default config;
