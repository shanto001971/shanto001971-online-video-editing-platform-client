import React, { useState, useRef, useEffect } from 'react';
import { observer } from 'mobx-react';
import { fabric } from 'fabric';
import { getUid, isHtmlAudioElement, isHtmlImageElement, isHtmlVideoElement } from '@/utils';
import anime from 'animejs'; // Make sure to install the animejs package
import { MenuOption } from '../types';
import { FabricUtils } from '@/utils/fabric-utils';

const YourComponent = observer(() => {
  const [canvas, setCanvas] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#111111');
  const [selectedMenuOption, setSelectedMenuOption] = useState(MenuOption.Video);
  const [audios, setAudios] = useState([]);
  const [videos, setVideos] = useState([]);
  const [images, setImages] = useState([]);
  const [editorElements, setEditorElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [maxTime, setMaxTime] = useState(30 * 1000);
  const [playing, setPlaying] = useState(false);
  const [currentKeyFrame, setCurrentKeyFrame] = useState(0);
  const [fps, setFps] = useState(60);
  const [animations, setAnimations] = useState([]);
  const [animationTimeLine, setAnimationTimeLine] = useState(anime.timeline());

  const startedTime = useRef(0);
  const startedTimePlay = useRef(0);

  useEffect(() => {
    if (playing) {
      startedTime.current = Date.now();
      startedTimePlay.current = currentKeyFrame * 1000 / fps;
      requestAnimationFrame(playFrames);
    }
  }, [playing, currentKeyFrame, fps]);

  const playFrames = () => {
    if (!playing) {
      return;
    }
    const elapsedTime = Date.now() - startedTime.current;
    const newTime = startedTimePlay.current + elapsedTime;
    updateTimeTo(newTime);
    if (newTime > maxTime) {
      setCurrentKeyFrame(0);
      setPlaying(false);
    } else {
      requestAnimationFrame(playFrames);
    }
  };

  const updateTimeTo = (newTime) => {
    setCurrentKeyFrame(Math.floor(newTime / 1000 * fps));
    animationTimeLine.seek(newTime);
    if (canvas) {
      canvas.backgroundColor = backgroundColor;
    }
    editorElements.forEach((e) => {
      if (!e.fabricObject) return;
      const isInside = e.timeFrame.start <= newTime && newTime <= e.timeFrame.end;
      e.fabricObject.visible = isInside;
    });
  };

  const handleSeek = (seek) => {
    if (playing) {
      setPlaying(false);
    }
    updateTimeTo(seek);
    updateVideoElements();
    updateAudioElements();
  };

  const updateVideoElements = () => {
    editorElements
      .filter((element) => element.type === 'video')
      .forEach((element) => {
        const video = document.getElementById(element.properties.elementId);
        if (isHtmlVideoElement(video)) {
          const videoTime = (currentKeyFrame * 1000 - element.timeFrame.start) / 1000;
          video.currentTime = videoTime;
          if (playing) {
            video.play();
          } else {
            video.pause();
          }
        }
      });
  };

  const updateAudioElements = () => {
    editorElements
      .filter((element) => element.type === 'audio')
      .forEach((element) => {
        const audio = document.getElementById(element.properties.elementId);
        if (isHtmlAudioElement(audio)) {
          const audioTime = (currentKeyFrame * 1000 - element.timeFrame.start) / 1000;
          audio.currentTime = audioTime;
          if (playing) {
            audio.play();
          } else {
            audio.pause();
          }
        }
      });
  };

  const saveCanvasToVideoWithAudio = () => {
    const canvasElement = document.getElementById('canvas');
    const canvas = new fabric.Canvas(canvasElement);
    // Set up the canvas and elements
    // ...

    const stream = canvasElement.captureStream(30);
    const audioStreams = [];

    // Collect audio streams
    editorElements
      .filter((element) => element.type === 'audio')
      .forEach((audio) => {
        const audioElement = document.getElementById(audio.properties.elementId);
        if (isHtmlAudioElement(audioElement)) {
          const audioContext = new AudioContext();
          const sourceNode = audioContext.createMediaElementSource(audioElement);
          const destination = audioContext.createMediaStreamDestination();
          sourceNode.connect(destination);
          sourceNode.connect(audioContext.destination);
          audioStreams.push(destination.stream);
        }
      });

    // Add audio streams to the video stream
    audioStreams.forEach((audioStream) => {
      stream.addTrack(audioStream.getAudioTracks()[0]);
    });

    const video = document.createElement('video');
    video.srcObject = stream;
    video.height = 500;
    video.width = 800;
    video.play().then(() => {
      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorder.ondataavailable = function (e) {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = function () {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'video.webm';
        a.click();
      };

      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop();
        video.remove();
      }, maxTime);
    });
  };

  // ... Other methods and JSX rendering ...

  return (
    <div>
      {/* Render your component's JSX */}
    </div>
  );
});

export default YourComponent;
