import React from 'react';
import { styled } from '@mui/material/styles';

import TimeAndDate from './TimeAndDate';
import colors from '../consts/colors';
import HeaderMenu from './HeaderMenu';
import HeaderActions from './HeaderActions';

export const headerHeight = 65;
const Container = styled('div')({
  position: 'fixed',
  top: 0,
  height: headerHeight,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: colors.grayLight,
  padding: '0 10px',
  zIndex: 3,
  boxShadow: `0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)`,
});

const LeftWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Header = () => {
  return (
    <Container>
      <HeaderMenu />
      <LeftWrapper>
        <HeaderActions />
        <TimeAndDate />
      </LeftWrapper>
    </Container>
  );
};

export default Header;
