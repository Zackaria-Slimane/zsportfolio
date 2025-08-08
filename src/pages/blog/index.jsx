import { Helmet, HelmetProvider } from 'react-helmet-async';
import { TextRotation } from '@/components/ui/TextRotation';
import { BlogList } from '@/components/data/BlogList';
import SEO from '@/data/seo';
import siteData from '@/data/siteData';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { calculateReadingTime } from '@/utils/readingTime';

export default function Blog({ posts }) {
	const currentSEO = SEO.find((item) => item.page === 'blog');

	return (
		<HelmetProvider>
			<Helmet>
				<title>{`Blog | ${siteData.main.offTitle}`}</title>
				<link rel='canonical' href='https://zakariaslimane.dev/blog' />
				<meta name='description' content={currentSEO.description} />
				<meta name='keywords' content={currentSEO.keywords.join(', ')} />
				<meta property='og:title' content={`Blog | ${siteData.main.title}`} />
				<meta property='og:description' content={currentSEO.description} />
				<meta name='robots' content='index, follow' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
			</Helmet>

			<section className='mt-14 dark:text-white text-dark font-jetBrain'>
				<div className='mb-5'>
					<h1 className='text-xl sm:text-3xl'>
						Thoughts on{' '}
						<span className='text-limes inline-flex'>
							<TextRotation type='blog' />
						</span>
						<br />
						and software development
					</h1>
					<br />
					<h2 className='text-lg text-pretty'>
						Deep dives into{' '}
						<span className='font-jetBrain font-semibold underline underline-offset-4 decoration-dashed decoration-orange-600'>
							technical concepts
						</span>
						, tutorials, and{' '}
						<span className='font-jetBrain font-semibold underline underline-offset-4 decoration-dashed decoration-sky-600'>
							development experiences
						</span>
					</h2>
				</div>
				<BlogList posts={posts} />
			</section>
		</HelmetProvider>
	);
}

export async function getStaticProps() {
	const files = fs.readdirSync(path.join('src', 'content', 'blog'));

	const posts = files.map((filename) => {
		const markdownWithMeta = fs.readFileSync(
			path.join('src', 'content', 'blog', filename),
			'utf-8'
		);

		const { data: frontMatter, content } = matter(markdownWithMeta);
		return {
			...frontMatter,
			readingTime: calculateReadingTime(content),
			slug: filename.replace('.mdx', ''),
		};
	});

	return {
		props: {
			posts: posts.sort((a, b) => new Date(b.date) - new Date(a.date)),
		},
	};
}
