import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ProjectsList } from '@/components/data/ProjectsList';
import { TextRotation } from '@/components/ui/TextRotation';
import SEO from '@/data/seo';
import siteData from '@/data/siteData';

export default function Projects() {
	const currentSEO = SEO.find((item) => item.page === 'projects');

	return (
		<HelmetProvider>
			<Helmet>
				<title>{`Projects | ${siteData.main.offTitle}`}</title>
				<link rel='canonical' href='https://zakariaslimane.dev/projects' />
				<meta name='description' content={currentSEO.description} />
				<meta name='keywords' content={currentSEO.keywords.join(', ')} />
				<meta property='og:title' content={`Projects | ${siteData.main.title}`} />
				<meta property='og:description' content={currentSEO.description} />
				<meta name='robots' content='index, follow' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
			</Helmet>

			<section className='mt-14 dark:text-white text-dark font-jetBrain'>
				<div className='mb-5'>
					<h1 className='text-xl sm:text-3xl'>
						Problem solving, one{' '}
						<span className='text-limes inline-flex'>
							<TextRotation type='projects' />
						</span>{' '}
						at a time.
					</h1>
					<br></br>
					<h2 className='text-lg text-pretty'>
						Whether you need a{' '}
						<span className='font-jetBrain font-semibold underline underline-offset-4 decoration-dashed decoration-sky-600'>
							React
						</span>{' '}
						application, a polished{' '}
						<span className='font-jetBrain font-semibold underline underline-offset-4 decoration-dashed decoration-purple-600'>
							Wordpress
						</span>{' '}
						site, or help with any{' '}
						<span className='font-jetBrain font-semibold underline underline-offset-4 decoration-dashed decoration-amber-600'>
							web developement
						</span>{' '}
						project, I&apos;m here to work with you to turn your ideas into{' '}
						<span className='font-jetBrain font-semibold underline underline-offset-4 decoration-dashed decoration-emerald-600'>
							practical solutions.
						</span>{' '}
					</h2>
				</div>
				<ProjectsList />
			</section>
		</HelmetProvider>
	);
}
