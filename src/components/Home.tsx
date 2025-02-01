import React from 'react';
import { styled } from '@mui/material/styles';

import Header from './Header';
import Content from './Content';

const Container = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const Home = () => {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
};

export default Home;
