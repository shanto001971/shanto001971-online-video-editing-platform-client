import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
	FaCut,
	FaFilter,
	FaHandScissors,
	FaImage,
	FaImages,
	FaMusic,
	FaReact,
	FaTerminal,
	FaTruckMoving,
	FaTruckPickup,
	FaUpload,
	FaViadeoSquare,
	FaVideo,
} from 'react-icons/fa';
import './Timeline.css';

const Timeline = () => {
	return (
		<div>
			<h1 className="text-6xl font-bold text-center capitalize text-black mx-40 my-16">
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
		</div>
	);
};

export default Timeline;
