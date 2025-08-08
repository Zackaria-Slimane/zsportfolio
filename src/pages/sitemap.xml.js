import siteData from '@/data/siteData';

function generateSiteMap() {
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://zakariaslimane.dev</loc>
     </url>
     <url>
       <loc>https://zakariaslimane.dev/blog</loc>
     </url>
     <url>
       <loc>https://zakariaslimane.dev/projects</loc>
     </url>
     <url>
       <loc>https://zakariaslimane.dev/articles</loc>
     </url>
     <url>
       <loc>https://zakariaslimane.dev/contact</loc>
     </url>
     ${siteData.blogPosts
				.map(({ slug }) => {
					return `
       <url>
           <loc>https://zakariaslimane.dev/blog/${slug}</loc>
       </url>
     `;
				})
				.join('')}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
	const sitemap = generateSiteMap();

	res.setHeader('Content-Type', 'text/xml');
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}

export default function Sitemap() {}
