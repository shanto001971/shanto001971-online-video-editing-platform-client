import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact } from 'react-icons/fa';
// import './Timeline.css';

const Timeline = () => {
	return (
		<div>
			<VerticalTimeline lineColor="gray">
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
					date="2011 - present"
					iconStyle={{
						background: 'rgb(33, 150, 243)',
						color: '#fff',
					}}
					icon={<FaReact />}
				>
					<h3 className="vertical-timeline-element-title">
						Creative Director
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Miami, FL
					</h4>
					<p>
						Creative Direction, User Experience, Visual Design,
						Project Management, Team Leading
					</p>
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
					date="2010 - 2011"
					iconStyle={{
						background: 'rgb(33, 150, 243)',
						color: '#fff',
					}}
					icon={<FaReact />}
				>
					<h3 className="vertical-timeline-element-title">
						Art Director
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						San Francisco, CA
					</h4>
					<p>
						Creative Direction, User Experience, Visual Design, SEO,
						Online Marketing.
					</p>
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
					date="2008 - 2010"
					iconStyle={{
						background: 'rgb(33, 150, 243)',
						color: '#fff',
						lineColor: 'gray',
					}}
					icon={<FaReact />}
				>
					<h3 className="vertical-timeline-element-title">
						Web Designer
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Los Angeles, CA
					</h4>
					<p>User Experience, Visual Design</p>
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
					date="2006 - 2008"
					iconStyle={{
						background: 'rgb(33, 150, 243)',
						color: '#fff',
					}}
					icon={<FaReact />}
				>
					<h3 className="vertical-timeline-element-title">
						Web Designer
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						San Francisco, CA
					</h4>
					<p>User Experience, Visual Design</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{
						background: '#E0E8FA',
						color: 'black',
						boxShadow: 'none',
					}}
					contentArrowStyle={{
						borderRight: '10px solid #E0E8FA',
					}}
					date="April 2013"
					iconStyle={{
						background: 'rgb(233, 30, 99)',
						color: '#fff',
					}}
					icon={<FaReact />}
				>
					<h3 className="vertical-timeline-element-title">
						Content Marketing for Web, Mobile and Social Media
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Online Course
					</h4>
					<p>Strategy, Social Media</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{
						background: '#E0E8FA',
						color: 'black',
						boxShadow: 'none',
					}}
					contentArrowStyle={{
						borderRight: '10px solid #E0E8FA',
					}}
					date="November 2012"
					iconStyle={{
						background: 'rgb(233, 30, 99)',
						color: '#fff',
					}}
					icon={<FaReact />}
				>
					<h3 className="vertical-timeline-element-title">
						Agile Development Scrum Master
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Certification
					</h4>
					<p>Creative Direction, User Experience, Visual Design</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{
						background: '#E0E8FA',
						color: 'black',
						boxShadow: 'none',
					}}
					contentArrowStyle={{
						borderRight: '10px solid #E0E8FA',
					}}
					date="2002 - 2006"
					iconStyle={{
						background: 'rgb(233, 30, 99)',
						color: '#fff',
					}}
					icon={<FaReact />}
				>
					<h3 className="vertical-timeline-element-title">
						Bachelor of Science in Interactive Digital Media Visual
						Imaging
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Bachelor Degree
					</h4>
					<p>Creative Direction, Visual Design</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default Timeline;
