import React from 'react';
import { styled } from '@mui/material/styles';
import MuiTypography from '@mui/material/Typography';
import dayjs from 'dayjs';

import colors from '../consts/colors';

const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

const Typography = styled(MuiTypography)(() => ({
  color: colors.black,
  fontWeight: 400,
  lineHeight: 1.2,
}));

let intervalId: any = 0;
const TimeAndDate = () => {
  const [date, setDate] = React.useState<string>();
  const [time, setTime] = React.useState<string>();

  React.useLayoutEffect(() => {
    setDate(dayjs().format('DD/MM/YYYY'));
    setTime(dayjs().format('HH:mm:ss'));
    intervalId = setInterval(() => {
      setDate(dayjs().format('DD/MM/YYYY'));
      setTime(dayjs().format('HH:mm:ss'));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container>
      <Typography fontSize={18}>{time}</Typography>
      <Typography fontSize={14}>{date}</Typography>
    </Container>
  );
};

export default TimeAndDate;
