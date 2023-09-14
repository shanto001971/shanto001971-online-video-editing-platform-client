import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
	const price = {
		pro: 7,
		business: 15,
	};
	const btnClicked = (price) => {
		fetch('http://localhost:5000/payments', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ price }),
		})
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
		<div className="md:flex items-center justify-center gap-5 my-10">
			<div className="card w-96 shadow-lg border">
				<div className="card-body text-center">
					<h2 className="card-title text-[#ff365b] text-2xl">Free</h2>
					<h2 className="relative">
						<span className="absolute left-24 top-[10px] font-semibold text-xl">
							$
						</span>{' '}
						<span className="text-7xl">0</span>{' '}
						<span> / month</span>
					</h2>
					<div className="text-left">
						<p>
							<span className="text-[#ff365b]">&#10003;</span>{' '}
							Export 10 minutes of videos/month
						</p>
						<p>
							<span className="text-[#ff365b]">&#10003;</span>{' '}
							Export 720p videos at super speed
						</p>
						<p>
							<span className="text-[#ff365b]">&#10003;</span> 2
							GB of Cloud Storage
						</p>
						<p>
							<span className="text-[#ff365b]">&#10003;</span>{' '}
							Unlimited Collaborators
						</p>
						<p>
							<span className="text-[#ff365b]">&#10003;</span>{' '}
							Limited Transitions, Motions and Graphics library
						</p>
						<p>
							<span className="text-[#ff365b]">&#10003;</span> 3
							day Project and Media back-up
						</p>
					</div>

					<div className="card-actions justify-center">
						<button className="rounded-[4px] p-3 font-semibold text-white w-full bg-gradient-to-r from-[#ff365b] to-[#ff9436]">
							<Link to="/dashboard">Go Free</Link>
						</button>
					</div>
				</div>
			</div>
			<div className="card w-96 shadow-lg border">
				<div className="card-body text-center">
					<h2 className="card-title text-[#00d4ff] text-2xl">Pro</h2>
					<h2 className="relative">
						<span className="absolute left-24 top-[10px] font-semibold text-xl">
							$
						</span>{' '}
						<span className="text-7xl">7</span>{' '}
						<span> / month</span>
					</h2>
					<div className="text-left">
						<p>
							<span>&#10003;</span> Export 10 minutes of
							videos/month
						</p>
						<p>
							<span>&#10003;</span> Export 720p videos at super
							speed
						</p>
						<p>
							<span>&#10003;</span> 2 GB of Cloud Storage
						</p>
						<p>
							<span>&#10003;</span> Unlimited Collaborators
						</p>
						<p>
							<span>&#10003;</span> Limited Transitions, Motions
							and Graphics library
						</p>
						<p>
							<span>&#10003;</span> 3 day Project and Media
							back-up
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
			<div className="card w-96 shadow-lg border gradient-border">
				<div className="card-body text-center">
					<h2 className="card-title text-[#de2898] text-2xl">
						Business
					</h2>
					<h2 className="relative">
						<span className="absolute left-20 font-semibold top-[10px] text-xl">
							$
						</span>{' '}
						<span className="text-7xl">15</span>{' '}
						<span> / month</span>
					</h2>
					<div className="text-left">
						<p>
							<span>&#10003;</span> Export 10 minutes of
							videos/month
						</p>
						<p>
							<span>&#10003;</span> Export 720p videos at super
							speed
						</p>
						<p>
							<span>&#10003;</span> 2 GB of Cloud Storage
						</p>
						<p>
							<span>&#10003;</span> Unlimited Collaborators
						</p>
						<p>
							<span>&#10003;</span> Limited Transitions, Motions
							and Graphics library
						</p>
						<p>
							<span>&#10003;</span> 3 day Project and Media
							back-up
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
	);
};

export default Pricing;
