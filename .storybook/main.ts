import type { StorybookConfig } from "@storybook/angular";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-docs",
  ],

  framework: {
    name: "@storybook/angular",
    options: {}
  },
  docs: {
    autodocs: true,
  },
  features: {
    legacyMdx1: true, // 👈 Enables MDX v1 support
  },
};
export default config;
