import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Socials } from '@/components/ui/Socials';
import { TextRotation } from '@/components/ui/TextRotation';
import { ProjectsList } from '@/components/data/ProjectsList';
import { Work } from '@/components/data/Work';
import { Stack } from '@/components/data/Stack';
import { ArticlesList } from '@/components/data/ArticlesList';
import siteData from '../data/siteData';
import SEO from '../data/seo';

export default function Home() {
	const currentSEO = SEO.find((item) => item.page === 'home');

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{siteData.main.title}</title>
					<link rel='canonical' href='https://zakariaslimane.dev' />
					<meta name='description' content={currentSEO.description} />
					<meta name='keywords' content={currentSEO.keywords.join(', ')} />
					<meta property='og:title' content={siteData.main.title} />
					<meta property='og:description' content={currentSEO.description} />
					<meta name='robots' content='index, follow' />
					<meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
				</Helmet>

				<div className='container dark:text-white text-slate-900 font-jetBrain mt-14 text-pretty'>
					<h1 className='text-xl sm:text-3xl'>
						Self-driven developer with a focus on devOps practices and building{' '}
						<span className='text-limes inline-flex'>
							<TextRotation type='home' />
						</span>
						s.
					</h1>
					<br></br>
					<h2 className='sm:text-2xl text-xl font-jetBrain my-5'>About me </h2>
					<h3 className='mb-2 text-dark dark:text-white text-lg'>
						I leverage{' '}
						<span className='font-jetBrain font-semibold underline underline-offset-4 decoration-dashed decoration-yellow-500'>
							JavaScript
						</span>{' '}
						and{' '}
						<span className='font-jetBrain font-semibold underline underline-offset-4 decoration-dashed decoration-sky-500'>
							React
						</span>{' '}
						for the front end and{' '}
						<span className='font-jetBrain font-semibold underline underline-offset-4 decoration-dashed decoration-blue-500'>
							Golang
						</span>{' '}
						for back-end systems. I&apos;m always learning, enjoy collaborating, and passionate
						about technology and its use to solve problems.
					</h3>
					<h3 className='text-dark dark:text-white text-lg'>
						Enthusiastic about{' '}
						<span className='font-jetBrain font-semibold underline underline-offset-4 decoration-dashed decoration-cyan-500'>
							devOps & Cloud Engineering
						</span>{' '}
						, CI/CD automation, and{' '}
						<span className='font-jetBrain font-semibold underline underline-offset-4 decoration-dashed decoration-orange-500'>
							AWS technologies
						</span>{' '}
						, I thrive in perpetual learning.
					</h3>
				</div>
				<Socials />
				<Stack />
				<ArticlesList />
				<ProjectsList />
				<Work />
			</HelmetProvider>
		</>
	);
}
