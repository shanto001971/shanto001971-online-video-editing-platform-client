import React, { useState, useEffect } from "react";
import "./CreateDemoVideo.css";
import Button from "../Button";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";

function CreateDemoVideo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme, changesThemeTextColor, changesThemeBgColor } = useTheme(); // using for dark and light themes

  const [images] = useState([
    "https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/b346b11771754c859dfecc31a2d2f346~tplv-6rr7idwo9f-image.webp",
    "https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/ecbea583ec1145a592a51d1c3fa78b50~tplv-6rr7idwo9f-image.webp",
    "https://p16-capcut-va.ibyteimg.com/tos-maliva-i-6rr7idwo9f-us/7708a25b386f477da011b793c7230e11~tplv-6rr7idwo9f-image.webp",
  ]);

  const [content] = useState([
    {
      title: "Step 1: Upload video",
      text: "Upload media files from the computer, Myspace, Google Drive, Dropbox, or by QR code.",
    },
    {
      title: "Step 2: Create a video",
      text: "Drag and drop your media files to the timeline. Trim, crop, reverse, or mirror clips, and apply audio, text, stickers, effects, transitions, and filters to the video. You can also resize the video, remove the background, or generate captions as required.",
    },
    {
      title: "Step 3: Export & share",
      text: 'Customize file name and resolution. Click "Advanced Settings" to set its quality, frame rate, and format. Hit the "Export" button to download the video or share it on your social platforms.',
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [content.length]);

  return (
    <div
      className={`py-20 px-5 md:px-20  ${
        theme.mode === "dark" ? "text-gray-100" : "bg-[#F5F8FC]"
      }`}
    >
      <div className="text-center text-[30px] md:text-[40px] lg:text-[58px] py-10 font-bold">
        <h2>How to create a video online?</h2>
      </div>
      <div className="create-demo-video grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="left-side p-5">
          {content.map((item, index) => (
            <div
              key={index}
              className={`left-div ${index === activeIndex ? "active" : ""}`}
            >
              <div className="py-3">
                <h3
                  className={
                    index === activeIndex
                      ? "bold text-2xl font-semibold border-left"
                      : "ps-2 text-2xl font-semibold "
                  }
                >
                  {item.title}
                </h3>
                <p
                  className={
                    index === activeIndex ? "bold  border-left" : "ps-2"
                  }
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="right-side">
          <img src={images[activeIndex]} alt={`Image ${activeIndex + 1}`} />
        </div>
      </div>
      <div className="text-center py-5">
        <Button buttonText="Try for free" />
      </div>
    </div>
  );
}

export default CreateDemoVideo;
