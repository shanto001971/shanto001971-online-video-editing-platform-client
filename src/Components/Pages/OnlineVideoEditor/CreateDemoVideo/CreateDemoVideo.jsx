import React, { Component } from 'react';
import './CreateDemoVideo.css'
import Button from '../Button';

class CreateDemoVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      images: [
        'https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/b346b11771754c859dfecc31a2d2f346~tplv-6rr7idwo9f-image.webp',
        'https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/ecbea583ec1145a592a51d1c3fa78b50~tplv-6rr7idwo9f-image.webp',
        'https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/7708a25b386f477da011b793c7230e11~tplv-6rr7idwo9f-image.webp'
      ],
      content: [
        {
          title: 'Step 1: Upload video',
          text: 'Upload media files from the computer, Myspace, Google Drive, Dropbox, or by QR code.',
        },
        {
          title: 'Step 2: Create a video',
          text: 'Drag and drop your media files to the timeline. Trim, crop, reverse, or mirror clips, and apply audio, text, stickers, effects, transitions, and filters to the video. You can also resize the video, remove the background, or generate captions as required.',
        },
        {
          title: 'Step 3: Export & share',
          text: 'Customize file name and resolution. Click "Advanced Settings" to set its quality, frame rate, and format. Hit the "Export" button to download the video or share it on your social platforms.',
        },
      ],
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.nextContent, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextContent = () => {
    const { activeIndex, content } = this.state;
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex + 1) % content.length,
    }));
  }


  render() {
    const { activeIndex, content, images } = this.state;
    
    return (
        <div className='py-20 px-5 md:px-20 bg-[#F5F8FC]'>
        <div className='text-center text-[42px] py-10 text-black font-bold'>
            <h2>How to create a video online?</h2>
        </div>
       <div className="create-demo-video grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* left side start */}
        <div className="left-side p-5">
        {content.map((item, index) => (
            <div key={index} className={`left-div ${index === activeIndex ? 'active' : ''}`}>
              <div className='py-3'>
                <h3 className={index === activeIndex ? 'bold text-2xl font-semibold text-black border-left' : 'ps-2 text-2xl font-semibold '}>{item.title}</h3>
                <p className={index === activeIndex ? 'bold text-black  border-left' : 'ps-2'}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
         {/* left side end */}

         {/* right side start */}
        <div className="right-side">
          <img src={images[activeIndex]} alt={`Image ${activeIndex + 1}`} />
        </div>
         {/* right side end */}
      </div>
          <div className='text-center py-5'><Button buttonText="Try for free"></Button></div>
        </div>
    );
  }
}

export default CreateDemoVideo;
