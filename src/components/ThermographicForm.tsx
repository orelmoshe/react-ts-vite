import React from 'react';
import { styled } from '@mui/material/styles';

import colors from '../consts/colors';
import { TitleText } from '../styledComponents/AppTexts';
import { AppContext, AppProps } from '../providers/AppProvider';
import TextFieldList from './TextFieldList';
import UploadImages from './UploadImages';

const Container = styled('div')({
  width: '100%',
  maxWidth: 800,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const TitleWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 15,
  background: colors.grayLight,
});

const TableTitle = styled('div')({
  flex: 1,
  textAlign: 'start',
  color: colors.black,
  fontSize: 22,
  fontWeight: 600,
});

const ThermographicForm = () => {
  const { thermographicData, setThermographicData } = React.useContext<AppProps>(AppContext);

  console.log('thermographicData', thermographicData);
  return (
    <Container>
      <TitleText>בדיקה טרמוגראפית</TitleText>
      <TextFieldList data={thermographicData.testDetails} setState={setThermographicData} section="testDetails" />
      <TitleWrapper>
        <TableTitle>פרטי הלוחות שנבדקו</TableTitle>
        <TableTitle>ממצאים</TableTitle>
      </TitleWrapper>
      <TextFieldList data={thermographicData.boardsDetails} setState={setThermographicData} section="boardsDetails" />
      <UploadImages data={thermographicData.images} setState={setThermographicData}/>
    </Container>
  );
};

export default ThermographicForm;
