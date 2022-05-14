import React from 'react';
import { LineWave } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <LineWave
        color="#264d5f"
        height={250}
        width={250}
        ariaLabel="three-circles-rotating"
      />
    </Container>
  );
};

export default Loader;
