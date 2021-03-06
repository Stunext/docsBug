module.exports = {
	stories: [
		"../src/**/*.stories.mdx", 
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		"@storybook/addon-links", 
		"@storybook/addon-essentials", 
		"@storybook/addon-a11y"
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-vite"
	},
	reactOptions: { legacyRootApi: false },
	features: {
		previewMdx2: true,
	},
};