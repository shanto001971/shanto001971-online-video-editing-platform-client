import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "../features/demoImages/demoImagesSlice.jsx";
import videosReducer from "../features/demoVideos/demoVideosSlice.jsx";
import templateImgReducer from "../features/template/templateImagesSlice.jsx";
import templateVideosReducer from "../features/template/templateVideosSlice.jsx";

const store = configureStore({
    reducer: {
        images: imagesReducer,
        videos: videosReducer,
        templateImg: templateImgReducer,
        templateVideos: templateVideosReducer,
    }
});

export default store;