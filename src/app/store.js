import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "../features/demoImages/demoImagesSlice.jsx";
import videosReducer from "../features/demoVideos/demoVideosSlice.jsx";

const store = configureStore({
    reducer: {
        images: imagesReducer,
        videos: videosReducer,
    }
});

export default store;