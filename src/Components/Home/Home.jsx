import Banner from '../BannerSection/Banner';
import VideoCropper from '../LayOut/Dashboard/VideoCropper/VideoCropper';
import EndBanner from '../EndBanner/EndBanner';
import VideoLayout from '../Pages/VideoLayout/VideoLayout';
import SideIcon from '../SideIcon/SideIcon';
import TemplateVideo from '../TemplateVideoSection/TemplateVideo';
import VoiceSection from '../VoiceSection/VoiceSection';
import ScrollSection from './ScrollSection/ScrollSection';
import Timeline from '../Pages/Timeline/Timeline';

const Home = () => {
	return (
		<div>
			<Banner />
			<TemplateVideo />
			<VoiceSection />
			<VideoLayout></VideoLayout>
			<ScrollSection></ScrollSection>
			<SideIcon />
			<EndBanner />
		</div>
	);
};

export default Home;
