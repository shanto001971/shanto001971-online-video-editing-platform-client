import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../../ThemeProvider/ThemeProvider';

const Pricing = () => {
	const { theme, changesThemeBgColor } = useTheme(); // for using light and dark themes

	const price = {
		pro: 7,
		business: 15,
	};
	const btnClicked = (price) => {
		fetch(
			'https://online-video-editing-platform-server.vercel.app/payments',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ price }),
			}
		)
			.then((response) => response.json())
			.then((result) => {
				window.location.replace(result.url);
				console.log(result);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<>
			<Helmet>
				<title>MingleMotion Express | Pricing</title>
			</Helmet>
			<div
				className={`text-center my-10 font-bg-blue-800 ${
					theme.mode === 'dark' ? 'text-gray-100' : 'text-black'
				}`}
			>
				<h1 className="text-3xl rubik font-semibold">
					<span className="text-[#009bff]">10x faster</span> than any
					other video tool
				</h1>
				<h1 className="text-3xl rubik font-semibold">
					<span className="text-[#de2898]">100x cheaper</span> than
					buying a dedicated video editing computer
				</h1>
			</div>

			<div
				className={`md:flex items-center justify-center gap-5 my-10 md:mx-10 ${
					theme.mode === 'dark' ? 'text-gray-100' : 'text-black'
				}`}
			>
				<div className="card w-96 shadow-lg border hover:border-[#ff365b] duration-300">
					<div className="card-body text-center">
						<h2 className="card-title text-[#ff365b] text-2xl rubik">
							Free
						</h2>
						<h2 className="relative poppins">
							<span className="absolute left-[89px] top-[3px] font-semibold text-xl">
								$
							</span>{' '}
							<span className="text-6xl">0</span>{' '}
							<span> / month</span>
						</h2>
						<div className="text-left leading-relaxed">
							<p>
								<span className="text-[#ff365b]">&#10003;</span>{' '}
								Export 10 minutes of videos/month
							</p>
							<p>
								<span className="text-[#ff365b]">&#10003;</span>{' '}
								Export 720p videos at super speed
							</p>
							<p>
								<span className="text-[#ff365b]">&#10003;</span>{' '}
								2 GB of Cloud Storage
							</p>
							<p>
								<span className="text-[#ff365b]">&#10003;</span>{' '}
								Unlimited Collaborators
							</p>
							<p>
								<span className="text-[#ff365b]">&#10003;</span>{' '}
								Limited Transitions, Motions and Graphics
								library
							</p>
							<p>
								<span className="text-[#ff365b]">&#10003;</span>{' '}
								3 day Project and Media back-up
							</p>
						</div>

						<div className="card-actions justify-center">
							<button className="rounded-[4px] p-3 font-semibold text-white w-full bg-gradient-to-r from-[#ff365b] to-[#ff9436]">
								<Link to="/dashboard">Go Free</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="card w-96 shadow-lg border hover:border-[#00d4ff] duration-300">
					<div className="card-body text-center">
						<h2 className="card-title text-[#00d4ff] text-2xl">
							Pro
						</h2>
						<h2 className="relative">
							<span className="absolute left-[89px] top-[3px] font-semibold text-xl">
								$
							</span>{' '}
							<span className="text-6xl">7</span>{' '}
							<span> / month</span>
						</h2>
						<div className="text-left leading-relaxed">
							<p>
								<span className="text-[#00d4ff]">&#10003;</span>{' '}
								Export 10 minutes of videos/month
							</p>
							<p>
								<span className="text-[#00d4ff]">&#10003;</span>{' '}
								Export 720p videos at super speed
							</p>
							<p>
								<span className="text-[#00d4ff]">&#10003;</span>{' '}
								2 GB of Cloud Storage
							</p>
							<p>
								<span className="text-[#00d4ff]">&#10003;</span>{' '}
								Unlimited Collaborators
							</p>
							<p>
								<span className="text-[#00d4ff]">&#10003;</span>{' '}
								Limited Transitions, Motions and Graphics
								library
							</p>
							<p>
								<span className="text-[#00d4ff]">&#10003;</span>{' '}
								3 day Project and Media back-up
							</p>
						</div>

						<div className="card-actions justify-center">
							<button
								onClick={() => btnClicked(price.pro)}
								className="rounded-[4px] p-3 font-semibold text-white w-full bg-gradient-to-r from-[#00d4ff] to-[#0062ff]"
							>
								Go Pro
							</button>
						</div>
					</div>
				</div>
				<div className="card w-96 shadow-lg border hover:border-[#de2898] duration-300">
					<div className="card-body text-center">
						<h2 className="card-title text-[#de2898] text-2xl">
							Business
						</h2>
						<h2 className="relative">
							<span className="absolute left-[76px] top-[3px] font-semibold text-xl">
								$
							</span>{' '}
							<span className="text-6xl">15</span>{' '}
							<span> / month</span>
						</h2>
						<div className="text-left leading-relaxed">
							<p>
								<span className="text-[#de2898]">&#10003;</span>{' '}
								Export 10 minutes of videos/month
							</p>
							<p>
								<span className="text-[#de2898]">&#10003;</span>{' '}
								Export 720p videos at super speed
							</p>
							<p>
								<span className="text-[#de2898]">&#10003;</span>{' '}
								2 GB of Cloud Storage
							</p>
							<p>
								<span className="text-[#de2898]">&#10003;</span>{' '}
								Unlimited Collaborators
							</p>
							<p>
								<span className="text-[#de2898]">&#10003;</span>{' '}
								Limited Transitions, Motions and Graphics
								library
							</p>
							<p>
								<span className="text-[#de2898]">&#10003;</span>{' '}
								3 day Project and Media back-up
							</p>
						</div>

						<div className="card-actions justify-center">
							<button
								onClick={() => btnClicked(price.business)}
								className="rounded-[4px] p-3 font-semibold text-white w-full bg-gradient-to-r from-[#de2898] to-[#9166ff]"
							>
								Go Business
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`md:flex justify-between items-center py-10 md:py-5 mx-10 mb-10 border  px-8 md:px-16 rounded-lg ${
					theme.mode === 'dark' ? 'text-gray-100' : 'text-black'
				}`}
			>
				<div className="">
					<h3 className="text-2xl font-semibold text-[#009bff] pb-3">
						Enterprise
					</h3>
					<p>
						For powerful integrations and advanced security, the{' '}
						<br /> Enterprise plan helps you integrate the video
						editor with <br /> the tools you already use.
					</p>
				</div>
				<div>
					<h2 className="relative mt-5 md:mt-0 text-left">
						<span className="absolute left-[80px] top-[3px] font-semibold text-xl">
							$
						</span>{' '}
						<span className="text-6xl">55</span>{' '}
						<span> / month</span>
					</h2>
					<p>Annual Billing Only</p>
					<button className="rounded-[4px] text-white font-bold my-3 bg-gradient-to-r from-[#00ced1] to-[#00d56e] py-[.8125rem] px-[2rem]">
						Contact Us
					</button>
				</div>
			</div>

			<div
				className={`text-center py-32 bg-blue-50 mb-20 mt-3 ${
					theme.mode === 'dark'
						? 'text-gray-100 bg-gray-800'
						: 'text-black'
				}`}
			>
				<h1 className="text-4xl mb-10 font">
					Dramatically speed up your video editing
				</h1>
				<button className="border text-blue-900 hover:text-blue-600 font-bold border-blue-500 py-2 px-10 hover:bg-blue-200 rounded-full bg-blue-100 duration-500">
					Sign Up for Free
				</button>
			</div>
		</>
	);
};

export default Pricing;
