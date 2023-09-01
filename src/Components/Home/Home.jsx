import Banner from '../BannerSection/Banner';
import VideoCropper from '../LayOut/Dashboard/VideoCropper/VideoCropper';
import EndBanner from '../EndBanner/EndBanner';
import VideoLayout from '../Pages/VideoLayout/VideoLayout';
import SideIcon from '../SideIcon/SideIcon';
import TemplateVideo from '../TemplateVideoSection/TemplateVideo';
import VoiceSection from '../VoiceSection/VoiceSection';
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
<<<<<<<<< Temporary merge branch 1
			<Timeline />
=========

			<VideoLayout></VideoLayout>
			<ScrollSection></ScrollSection>
			<SideIcon />
>>>>>>>>> Temporary merge branch 2
			<EndBanner />
		</div>
	);
};

export default Home;
