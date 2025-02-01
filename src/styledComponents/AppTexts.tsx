import { styled } from '@mui/material/styles';
import colors from '../consts/colors';

export const TEXT_FONT_SIZE_SM = 20;
export const TEXT_FONT_SIZE_MD = 22;
export const TEXT_FONT_SIZE_LG = 22;

export const Text = styled('div')(({ theme }) => ({
  color: colors.black,
  fontWeight: 400,
  [theme.breakpoints.up('sm')]: {
    fontSize: TEXT_FONT_SIZE_SM,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: TEXT_FONT_SIZE_MD,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: TEXT_FONT_SIZE_LG,
  },
}));

export const TitleText = styled(Text)(({ theme }) => ({
  color: colors.black,
  fontWeight: 700,
  [theme.breakpoints.up('sm')]: {
    fontSize: TEXT_FONT_SIZE_SM + TEXT_FONT_SIZE_SM / 2,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: TEXT_FONT_SIZE_MD + TEXT_FONT_SIZE_MD / 2,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: TEXT_FONT_SIZE_LG + TEXT_FONT_SIZE_LG / 2,
  },
}));
