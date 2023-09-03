import Banner from '../BannerSection/Banner';
import EndBanner from '../EndBanner/EndBanner';
import VideoLayout from '../Pages/VideoLayout/VideoLayout';
import SideIcon from '../SideIcon/SideIcon';
import TemplateVideo from '../TemplateVideoSection/TemplateVideo';
import VoiceSection from '../VoiceSection/VoiceSection';
import Feedback from './Feedback/Feedback';
import ScrollSection from './ScrollSection/ScrollSection';


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
			<Feedback/>
		</div>
	);
};

export default Home;
