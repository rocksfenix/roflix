import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import VideoBase from 'react-native-video';
import Loader from './Loader';
import ControlLayout from './ControlLayout';
import PlayPause from './PlayPause';
import Fullscreen from './Fullscreen';
import Progressbar from './Progressbar';

const Player = () => {
  const [isLoading, setLoading] = useState(true);
  const [isPlaying, setPlaying] = useState(true);
  const [isFullscreen, setFullscreen] = useState(false);

  const [progress, setProgress] = useState(0);
  const playerRef = useRef();

  const onLoad = () => {
    setLoading(false);
  };

  const onBuffer = ({ isBuffering }) => {
    setLoading(isBuffering);
  };

  const togglePlay = () => {
    setPlaying(!isPlaying);
  };

  const onProgress = (event) => {
    const newProgress = (event.currentTime * 100) / event.playableDuration;
    setProgress(newProgress);
  };

  const onFullScreen = () => {
    setFullscreen(!isFullscreen);
    if (isFullscreen) {
      playerRef.current.presentFullscreenPlayer();
    } else {
      playerRef.current.dismissFullscreenPlayer();
    }
  };

  const videoSource = {
    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  };

  return (
    <Container>
      <Video
        ref={playerRef}
        resizeMode="cover"
        onBuffer={onBuffer}
        onLoad={onLoad}
        source={videoSource}
        paused={!isPlaying}
        useRef={useRef}
        progressUpdateInterval={200}
        onProgress={onProgress}
      />
      <Loader
        isLoading={isLoading}
      />
      <ControlLayout>
        <PlayPause
          isPlaying={isPlaying}
          onPress={togglePlay}
        />
        <Progressbar progress={progress} />
        <Fullscreen onPress={onFullScreen} />
      </ControlLayout>
    </Container>
  );
};

Player.propTypes = {};
Player.defaultProps = {};

const Container = styled.View`
  /* 16:9 - Aspect ratio */
  padding-top: 56.25%;
`;

const Video = styled(VideoBase)`
  background-color: black;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;


export default Player;
