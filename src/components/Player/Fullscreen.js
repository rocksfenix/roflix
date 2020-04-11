import React from 'react';
import propTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import ButtonBase from './ButtonBase';

const FullScreen = ({ onPress }) => (
  <ButtonBase
    onPress={onPress}
  >
    {
      Platform.select({
        ios: <Icon name="ios-expand" size={20} color="yellow" />,
        android: <Icon name="md-expand" size={20} color="yellow" />,
      })
    }
  </ButtonBase>
);

FullScreen.propTypes = {
  onPress: propTypes.func,
};

FullScreen.defaultProps = {
  onPress: () => {},
};

export default FullScreen;
