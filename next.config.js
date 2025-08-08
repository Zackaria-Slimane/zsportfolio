// next.config.js

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	output: 'standalone',
	devIndicators: {
		buildActivity: true,
		position: 'bottom-right',
	},
	pageExtensions: ['js', 'jsx', 'mdx'],
};

module.exports = withMDX(nextConfig);
