import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';

const Progressbar = ({ onPress, progress }) => (
  <Container
    onPress={onPress}
    hitSlop={{
      left: 5,
      top: 5,
      bottom: 5,
      right: 5,
    }}
    underlayColor="yellow"
  >
    <Box>
      <Bar style={{ width: `${progress}%` }} />
    </Box>
  </Container>
);

Progressbar.propTypes = {
  onPress: propTypes.func,
  progress: propTypes.number,
};

Progressbar.defaultProps = {
  onPress: () => {},
  progress: 0,
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const BaseBar = styled.View`
  height: 7px;
  width: 0%;
  border-radius: 3px;
`;

const Box = styled(BaseBar)`
  background-color: rgba(0,0,0,0.5);
  width: 100%;
`;

const Bar = styled(BaseBar)`
  background-color: yellow;
`;

export default Progressbar;
