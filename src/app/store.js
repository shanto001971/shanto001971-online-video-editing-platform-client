import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "../features/demoImages/demoImagesSlice.jsx";
import videosReducer from "../features/demoVideos/demoVideosSlice.jsx";
import templateReducer from "../features/template/templateSlice.jsx";

const store = configureStore({
    reducer: {
        images: imagesReducer,
        videos: videosReducer,
        template: templateReducer,
    }
});

export default store;