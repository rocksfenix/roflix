import React from 'react';
import propTypes from 'prop-types';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonBase from './ButtonBase';

const PlayPause = ({ onPress, isPlaying }) => (
  <ButtonBase
    onPress={onPress}
  >
    {
      isPlaying
        ? Platform.select({
          ios: <Icon name="ios-pause" size={20} color="yellow" />,
          android: <Icon name="md-pause" size={20} color="yellow" />,
        })
        : Platform.select({
          ios: <Icon name="ios-play" size={20} color="yellow" />,
          android: <Icon name="md-play" size={20} color="yellow" />,
        })
    }
  </ButtonBase>
);

PlayPause.propTypes = {
  isPlaying: propTypes.bool,
  onPress: propTypes.func,
};

PlayPause.defaultProps = {
  isPlaying: true,
  onPress: () => {},
};

export default PlayPause;
