/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	swcMinify: true,
	devIndicators: {
		buildActivity: true,
		buildActivityPosition: 'bottom-right',
	},
};

export default nextConfig;
