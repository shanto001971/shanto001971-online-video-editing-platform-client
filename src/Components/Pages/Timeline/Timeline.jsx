import React, { useEffect } from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import img from '../../../../public/breadcrumb-img.svg';
import img2 from '../../../../public/customer-img.svg';
import img3 from '../../../../public/customers.png';
import {
	FaArrowRight,
	FaCut,
	FaFilter,
	FaHandScissors,
	FaImages,
	FaMusic,
	FaTerminal,
	FaUpload,
	FaVideo,
} from 'react-icons/fa';
import './Timeline.css';
import CountUp from 'react-countup';
import img4 from '../../../../public/world-map.png';
import { Link } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '../../ThemeProvider/ThemeProvider';

// https://i.ibb.co/Q8PJvTg/customers.png
// https://i.ibb.co/qgdD1L6/Team.png
// https://i.ibb.co/3d3znd7/world-map.png
// https://i.ibb.co/tMmXWMJ/customer-img.png
//

const Timeline = () => {
	const { theme, changesThemeBgColor } = useTheme(); // for using light and dark themes

	useEffect(() => {
		Aos.init();
		// AOS.refresh();
	}, []);
	return (
		<div
			className={`${
				theme.mode === 'dark' ? 'text-gray-100' : 'text-black'
			}`}
		>
			<div className="h-[500px] bg-[#65325D] flex items-center justify-center">
				<div className="md:flex items-center justify-between">
					<div data-aos="flip-right" className="md:px-20 m-5">
						<h1 className="md:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
							About Us
						</h1>
						<p className="text-white pt-5">
							Motion Mingle is a video editing platform for
							editing video. In this website, a user can upload
							his own video and edit the video by cutting,
							cropping, trimming, or scaling the video. The user
							can also create his own video by clicking on the
							video. The video will be automatically uploaded to
							your server and then automatically uploaded to the
							server. User can put layer and different types of
							animations into the video.
						</p>
					</div>
					<img
						className="px-20 w-full md:w-[600px] md:h-[300px]"
						src="https://i.ibb.co/gMBvYXm/breadcrumb-img.png"
						alt=""
					/>
				</div>
			</div>

			<div>
				<h1 className="md:text-7xl font-bold text-center my-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
					Our History
				</h1>
				<p className={`text-justify text-md px-2 md:mx-40`}>
					Motion Mingle stands as a premier destination for those
					passionate about the world of video editing, offering an
					expansive platform where both novice enthusiasts and
					seasoned professionals can seamlessly merge their creative
					ideas and technical expertise. At the heart of our website,
					Motion Mingle, lies a bustling hub dedicated to the art of
					video editing and the magic of collaborative storytelling.
					Our robust suite of video editing tools empowers users to
					bring their vision to life, transforming raw footage into
					visually stunning and emotionally compelling narratives.
					With a wealth of resources and a thriving community of
					like-minded creators, Motion Mingle fosters an environment
					where innovation and collaboration flourish. Whether you're
					an aspiring filmmaker keen on perfecting your craft or an
					experienced video editor in search of fresh inspiration,
					Motion Mingle provides the ideal platform to embark on a
					captivating video editing journey. Join us today, and
					together, let's explore the limitless possibilities of video
					editing while forging meaningful connections within our
					creative community.
				</p>
				<Link to="/dashboard">
					<button className="flex justify-center items-center mx-auto p-5 my-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xl font-semibold hover:rounded-3xl duration-500">
						Start Editing Now <FaArrowRight className="ml-3" />
					</button>
				</Link>
			</div>

			<div className="md:flex my-20">
				<div className="mr-10">
					<img
						className="w-full md:w-[477px] md:h-[477px] bg-[#D14DBE]"
						src="https://i.ibb.co/tMmXWMJ/customer-img.png"
						alt=""
					/>
				</div>
				<div className="mt-5 md:mt-0">
					<img src="https://i.ibb.co/Q8PJvTg/customers.png" alt="" />
					<h2 className="text-2xl md:text-5xl font-bold pt-4 text-left">
						People using{' '}
						<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
							Motion Mingle
						</span>
					</h2>
					<p className="text-2xl md:text-5xl font-bold">
						with full satisfaction
					</p>
					<div className="pt-10">
						<p className="leading-8 text-lg">
							We use as filler text for layouts, non-readability
							is of great importance but because <br /> those who
							do not know how to pursue pleasure.
						</p>
						<p className="pt-8 leading-8 text-lg">
							Consequences that are extremely painful. Nor again
							is there anyone who <br /> loves or pursues or
							desires to obtain. know how to pursue pleasure
							rationally encounter <br /> consequences that are
							extremely painful. Nor again is there anyone who
							loves.
						</p>

						<p className="flex items-center mt-[52px] text-blue-500">
							View Case Studies{' '}
							<FaArrowRight className="ml-3 mt-1" />
						</p>
					</div>
				</div>
			</div>

			<div
				style={{
					backgroundImage: `url('https://i.ibb.co/3d3znd7/world-map.png')`,
					backgroundPosition: 'center',
					backgroundSize: 'center',
				}}
				className="text-center md:flex justify-around items-center h-[300px] border"
			>
				<CountUp start={0} end={200} delay={0}>
					{({ countUpRef }) => (
						<div>
							<div className="text-5xl font-bold text-[#7B61F3]">
								<span ref={countUpRef} />
							</div>
							<p className="text-xl pt-5">Countries Worldwide</p>
						</div>
					)}
				</CountUp>
				<CountUp start={0} end={256} delay={0}>
					{({ countUpRef }) => (
						<div>
							<div className="text-5xl font-bold text-[#7B61F3]">
								<span ref={countUpRef} />K
							</div>
							<p className="text-xl pt-5">Registered User</p>
						</div>
					)}
				</CountUp>
				<CountUp start={0} end={23} delay={0}>
					{({ countUpRef }) => (
						<div>
							<div className="text-5xl font-bold text-[#7B61F3]">
								<span ref={countUpRef} />K
							</div>
							<p className="text-xl pt-5">
								Small & Big Companies
							</p>
						</div>
					)}
				</CountUp>
			</div>
			<h1 className="md:text-6xl font-bold text-center capitalize md:mx-40 my-16">
				The fastest, easiest way <br /> to create{' '}
				<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
					pro-quality <br /> videos
				</span>
			</h1>
			<VerticalTimeline lineColor="gray" className="timeline-container">
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						// background: '#E0E8FA',
						background: '#9190F5',
						color: 'black',
						boxShadow: 'none',
					}}
					contentArrowStyle={{
						borderRight: '10px solid #9190F5',
					}}
					iconStyle={{
						background: '#BA51DD',
						color: '#fff',
						lineColor: 'gray',
					}}
					icon={<FaCut />}
				>
					<h3 className="vertical-timeline-element-title text-2xl font-bold">
						Cut your video by just one click.
					</h3>
					<h4 className="vertical-timeline-element-subtitle pt-4">
						Enhance your website's visual appeal with seamless video
						cutting and editing. Our video editing services ensure
						your content flows smoothly, engaging your audience from
						start to finish.
					</h4>
					<p>Just Wow, isn't it?</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: '#E0E8FA',
						color: 'black',
						boxShadow: 'none',
					}}
					contentArrowStyle={{
						borderRight: '10px solid #E0E8FA',
					}}
					iconStyle={{
						background: '#BA51DD',
						color: '#fff',
						lineColor: 'gray',
					}}
					icon={<FaHandScissors />}
				>
					<h3 className="vertical-timeline-element-title text-2xl font-bold">
						Trim your video by just one click.
					</h3>
					<h4 className="vertical-timeline-element-subtitle pt-4">
						Enhance your website's visual appeal with seamless video
						cutting and editing. Our video editing services ensure
						your content flows smoothly, engaging your audience from
						start to finish.
					</h4>
					<p>Just Wow, isn't it?</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: '#E0E8FA',
						color: 'black',
						boxShadow: 'none',
					}}
					contentArrowStyle={{
						borderRight: '10px solid #E0E8FA',
					}}
					iconStyle={{
						background: '#BA51DD',
						color: '#fff',
						lineColor: 'gray',
					}}
					icon={<FaFilter />}
				>
					<h3 className="vertical-timeline-element-title text-2xl font-bold">
						Make your video filtered by just one click.
					</h3>
					<h4 className="vertical-timeline-element-subtitle pt-4">
						Enhance your website's visual appeal with seamless video
						cutting and editing. Our video editing services ensure
						your content flows smoothly, engaging your audience from
						start to finish.
					</h4>
					<p>Just Wow, isn't it?</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: '#E0E8FA',
						color: 'black',
						boxShadow: 'none',
					}}
					contentArrowStyle={{
						borderRight: '10px solid #E0E8FA',
					}}
					iconStyle={{
						background: '#BA51DD',
						color: '#fff',
						lineColor: 'gray',
					}}
					icon={<FaUpload />}
				>
					<h3 className="vertical-timeline-element-title text-2xl font-bold">
						You can upload a video of any size.
					</h3>
					<h4 className="vertical-timeline-element-subtitle pt-4">
						Enhance your website's visual appeal with seamless video
						cutting and editing. Our video editing services ensure
						your content flows smoothly, engaging your audience from
						start to finish.
					</h4>
					<p>Just Wow, isn't it?</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: '#E0E8FA',
						color: 'black',
						boxShadow: 'none',
					}}
					contentArrowStyle={{
						borderRight: '10px solid #E0E8FA',
					}}
					iconStyle={{
						background: '#BA51DD',
						color: '#fff',
						lineColor: 'gray',
					}}
					icon={<FaTerminal />}
				>
					<h3 className="vertical-timeline-element-title text-2xl font-bold">
						You can choose from our unlimited Templates.
					</h3>
					<h4 className="vertical-timeline-element-subtitle pt-4">
						Enhance your website's visual appeal with seamless video
						cutting and editing. Our video editing services ensure
						your content flows smoothly, engaging your audience from
						start to finish.
					</h4>
					<p>Just Wow, isn't it?</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: '#E0E8FA',
						color: 'black',
						boxShadow: 'none',
					}}
					contentArrowStyle={{
						borderRight: '10px solid #E0E8FA',
					}}
					iconStyle={{
						background: '#BA51DD',
						color: '#fff',
						lineColor: 'gray',
					}}
					icon={<FaVideo />}
				>
					<h3 className="vertical-timeline-element-title text-2xl font-bold">
						We have more than thousands demo videos for you
						completely Free.
					</h3>
					<h4 className="vertical-timeline-element-subtitle pt-4">
						Enhance your website's visual appeal with seamless video
						cutting and editing. Our video editing services ensure
						your content flows smoothly, engaging your audience from
						start to finish.
					</h4>
					<p>Just Wow, isn't it?</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: '#E0E8FA',
						color: 'black',
						boxShadow: 'none',
					}}
					contentArrowStyle={{
						borderRight: '10px solid #E0E8FA',
					}}
					iconStyle={{
						background: '#BA51DD',
						color: '#fff',
						lineColor: 'gray',
					}}
					icon={<FaMusic />}
				>
					<h3 className="vertical-timeline-element-title text-2xl font-bold">
						We have more than thousands demo Musics completely Free
						for you.
					</h3>
					<h4 className="vertical-timeline-element-subtitle pt-4">
						Enhance your website's visual appeal with seamless video
						cutting and editing. Our video editing services ensure
						your content flows smoothly, engaging your audience from
						start to finish.
					</h4>
					<p>Just Wow, isn't it?</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: '#E0E8FA',
						color: 'black',
						boxShadow: 'none',
					}}
					contentArrowStyle={{
						borderRight: '10px solid #E0E8FA',
					}}
					iconStyle={{
						background: '#BA51DD',
						color: '#fff',
						lineColor: 'gray',
					}}
					icon={<FaImages />}
				>
					<h3 className="vertical-timeline-element-title text-2xl font-bold">
						We have more than thousands demo Images completely Free
						for you.
					</h3>
					<h4 className="vertical-timeline-element-subtitle pt-4">
						Enhance your website's visual appeal with seamless video
						cutting and editing. Our video editing services ensure
						your content flows smoothly, engaging your audience from
						start to finish.
					</h4>
					<p>Just Wow, isn't it?</p>
				</VerticalTimelineElement>
			</VerticalTimeline>

			<Link to="/dashboard">
				<button className="flex justify-center items-center mx-auto p-5 my-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xl font-semibold hover:rounded-3xl duration-500">
					Start Editing Now <FaArrowRight className="ml-3" />
				</button>
			</Link>
		</div>
	);
};

export default Timeline;
