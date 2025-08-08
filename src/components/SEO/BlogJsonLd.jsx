import siteData from '@/data/siteData';

export function BlogJsonLd({ post }) {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		datePublished: post.date,
		author: {
			'@type': 'Person',
			name: siteData.main.name,
			url: 'https://zakariaslimane.dev',
		},
		description: post.excerpt,
		keywords: post.tags.join(', '),
		publisher: {
			'@type': 'Organization',
			name: siteData.main.name,
			url: 'https://zakariaslimane.dev',
		},
	};

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
