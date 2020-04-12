import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';

const Close = ({ onPress }) => (
  <Touchable
    onPress={onPress}
  >
    <Title>X</Title>
  </Touchable>
);

Close.propTypes = {
  onPress: propTypes.func.isRequired,
};

Close.defaultProps = {};

const Touchable = styled.TouchableOpacity`
  width: 60px;
  height: 25px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-weight: bold;
  color: #FFF;
`;

export default Close;
