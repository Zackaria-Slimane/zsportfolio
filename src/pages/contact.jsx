import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { TextRotation } from '@/components/ui/TextRotation';
import SEO from '@/data/seo';
import siteData from '@/data/siteData';

export default function Contact() {
	const nameRef = useRef(null);
	const mailRef = useRef(null);
	const messageRef = useRef(null);
	const notify = () => {
		toast.success('Message sent! Thank you 🙏🏻', {
			duration: 3000,
			position: 'top-right',
			ariaProps: {
				role: 'status',
				'aria-live': 'polite',
			},
		});
	};

	const resetForm = () => {
		nameRef.current.value = '';
		mailRef.current.value = '';
		messageRef.current.value = '';
		notify();
	};

	const formSubmit = (e) => {
		e.preventDefault();
		if (nameRef.current.value === '' || mailRef.current.value === '') {
			toast.error('Please fill out the form fields.', {
				duration: 3000,
				position: 'top-right',
				ariaProps: {
					role: 'status',
					'aria-live': 'polite',
				},
			});
			return;
		}

		const formData = new FormData(e.target);
		fetch('https://getform.io/f/6b7547f9-bd94-4d3a-9d96-edbd80e61c89', {
			method: 'POST',
			body: formData,
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => console.log('Form submit response', response))
			.catch((error) => console.log('Form submit error', error))
			.finally(() => resetForm());
	};

	const currentSEO = SEO.find((item) => item.page === 'contact');

	return (
		<HelmetProvider>
			<Helmet>
				<title>{`Contact | ${siteData.main.offTitle}`}</title>
				<link rel='canonical' href='https://zakariaslimane.dev/contact' />
				<meta name='description' content={currentSEO.description} />
				<meta name='keywords' content={currentSEO.keywords.join(', ')} />
				<meta property='og:title' content={`Contact | ${siteData.main.title}`} />
				<meta property='og:description' content={currentSEO.description} />
				<meta name='robots' content='index, follow' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
			</Helmet>
			<Toaster />

			<section id='contact' className='mt-14 dark:text-white text-dark font-jetBrain'>
				<h1 className='text-xl sm:text-3xl'>
					Get in Touch and let&apos;s turn Ideas{' '}
					<span className='text-limes inline-flex'>
						<TextRotation type='contact' />
					</span>
					.
				</h1>
				<p className='mt-6 font-jetBrain text-pretty text-lg'>{siteData.contactPage.description}</p>
				<p className='mt-6 font-jetBrain text-balance text-lg'>{siteData.contactPage.cta}</p>
				<form
					className='mt-5 pr-10 sm:pr-16 max-w-4/5 mx-auto w-full border-none sm:border-solid border-slate-400 rounded-md'
					content='formdata'
					onSubmit={(e) => formSubmit(e)}
					acceptCharset='UTF-8'
					id='contanct-form'
					method='POST'>
					<div className='w-full'>
						<div className='flex flex-col my-2'>
							<label className='py-2 text-sm font-light capitalize text-dark dark:text-white'>
								name
							</label>
							<input
								type='text'
								name='name'
								ref={nameRef}
								required
								className='flex p-3 rounded-sm focus:outline-lightblue dark:bg-white text-dark'
							/>
						</div>
						<div className='flex flex-col my-2'>
							<label className='py-2 text-sm font-light capitalize text-dark dark:text-white'>
								email
							</label>
							<input
								type='text'
								name='email'
								required
								ref={mailRef}
								className='flex p-3 rounded-sm focus:outline-lightblue dark:bg-white text-dark'
							/>
						</div>
						<div className='flex flex-col my-2'>
							<label className='py-2 text-sm font-light capitalize text-dark dark:text-white'>
								message
							</label>
							<textarea
								name='message'
								rows='6'
								ref={messageRef}
								required
								className='flex p-3 rounded-sm resize-y focus:outline-lightblue dark:bg-white text-dark'></textarea>
						</div>
					</div>
					<button type='submit' className='mt-5 relative px-6 py-3 text-black rounded-lg group'>
						<span className='absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-sky-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0'></span>
						<span className='absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-limes ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-colro'></span>
						<span className='relative font-sans text-sm font-medium'>Submit</span>
					</button>
				</form>
			</section>
		</HelmetProvider>
	);
}
