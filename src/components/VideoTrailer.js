// Fix react-native-webview bug
import 'react-native-get-random-values';
import React from 'react';
import { WebView } from 'react-native-webview';
import propTypes from 'prop-types';

const makeHTML = (id) => (`
  <style>
    .video {
      position: relative;
      padding-bottom: 56.25%;
    }

    iframe {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  
  </style>
  <div class="video">
    <iframe 
      width="100%" 
      height="100%" 
      src="https://www.youtube.com/embed/${id}" 
      frameborder="0" 
      allow="accelerometer; 
      autoplay; 
      encrypted-media; 
      gyroscope; 
      picture-in-picture" 
      allowfullscreen
    ></iframe>
  </div>
`);

const VideoTrailer = ({ id }) => (
  <WebView
    source={{
      html: makeHTML(id),
    }}
  />
);

VideoTrailer.propTypes = {
  id: propTypes.string.isRequired,
};

export default VideoTrailer;
