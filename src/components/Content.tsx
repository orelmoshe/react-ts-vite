import React from 'react';
import { styled } from '@mui/material/styles';

import ElectricalInspectionForm from './ElectricalInspectionForm';
import { AppContext, AppProps, pages } from '../providers/AppProvider';
import ThermographicForm from './ThermographicForm';
import { headerHeight } from './Header';

const Container = styled('div')({
  marginTop: headerHeight,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const Content = () => {
  const { pageSelected } = React.useContext<AppProps>(AppContext);
  return (
    <Container>
      {pageSelected === pages.ThermographicInspection && <ThermographicForm />}
      {pageSelected === pages.ElctricalInspection && <ElectricalInspectionForm />}
    </Container>
  );
};

export default Content;
