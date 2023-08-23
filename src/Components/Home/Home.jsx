import Banner from '../BannerSection/Banner';
import EndBanner from '../EndBanner/EndBanner';
import Timeline from '../Pages/Timeline/Timeline';
import VideoLayout from '../Pages/VideoLayout/VideoLayout';
import SideIcon from '../SideIcon/SideIcon';
import TemplateVideo from '../TemplateVideoSection/TemplateVideo';
import VoiceSection from '../VoiceSection/VoiceSection';
import AutoScroll from './AutoScroll.jsx/AutoScroll';
import ScrollSection from './ScrollSection/ScrollSection';

const Home = () => {
	return (
		<div>
			<Banner />
			<TemplateVideo />
			<VoiceSection />
			<AutoScroll />
			<Timeline />
			<VideoLayout></VideoLayout>
			<ScrollSection></ScrollSection>
			<SideIcon />
			<EndBanner/>
		</div>
	);
};

export default Home;
