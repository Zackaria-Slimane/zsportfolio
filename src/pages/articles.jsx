import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ArticlesList } from '@/components/data/ArticlesList';
import { TextRotation } from '@/components/ui/TextRotation';
import SEO from '@/data/seo';
import siteData from '@/data/siteData';

export default function Articles() {
	const currentSEO = SEO.find((item) => item.page === 'articles');
	return (
		<HelmetProvider>
			<Helmet>
				<title>{`Articles | ${siteData.main.offTitle}`}</title>
				<link rel='canonical' href='https://zakariaslimane.dev/articles' />
				<meta name='description' content={currentSEO.description} />
				<meta name='keywords' content={currentSEO.keywords.join(', ')} />
				<meta property='og:title' content={`Articles | ${siteData.main.title}`} />
				<meta property='og:description' content={currentSEO.description} />
				<meta name='robots' content='index, follow' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
			</Helmet>

			<section className='mt-14 dark:text-white text-dark font-jetBrain'>
				<div className='mb-5'>
					<h1 className='text-xl sm:text-3xl'>
						I write about{' '}
						<span className='text-limes inline-flex'>
							<TextRotation type='articles' />
						</span>
						<br />
						devOps and Cloud Engineering
					</h1>
					<br></br>
					<h2 className='text-lg text-pretty'>
						Follow along as I document my experiences and knowledge on web technologies,
						<span className='font-jetBrain font-semibold underline underline-offset-4 decoration-dashed decoration-orange-600'>
							devOps
						</span>{' '}
						practices, and{' '}
						<span className='font-jetBrain font-semibold underline underline-offset-4 decoration-dashed decoration-sky-600'>
							cloud
						</span>{' '}
						solutions.
					</h2>
				</div>

				<ArticlesList />
			</section>
		</HelmetProvider>
	);
}
