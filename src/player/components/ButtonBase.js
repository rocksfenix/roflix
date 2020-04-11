import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';

const ButtonBase = ({ onPress, children }) => (
  <Touchable
    onPress={onPress}
    hitSlop={{
      left: 5,
      top: 5,
      bottom: 5,
      right: 5,
    }}
    underlayColor="yellow"
  >
    <Button>
      { children }
    </Button>
  </Touchable>
);

ButtonBase.propTypes = {
  onPress: propTypes.func,
  children: propTypes.node.isRequired,
};

ButtonBase.defaultProps = {
  onPress: () => {},
};


const Touchable = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 25;
  width: 40;
  margin: 5px;
`;

const Button = styled.Text`
  color: #cdcecf;
  font-size: 12px;
  font-weight: bold;
`;

export default ButtonBase;
