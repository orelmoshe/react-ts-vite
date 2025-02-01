import React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import colors from '../consts/colors';

const ButtonWrapper = styled('div')({
  position: 'relative',
});
const Button = styled(MuiButton)({
  margin: 5,
  '& .MuiButton-endIcon': {
    marginLeft: 0,
    marginRight: 5,
  },
});

interface Props {
  children: any;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  endIcon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
}
const LoadingButton: React.FC<Props> = ({
  onClick,
  loading = false,
  disabled = false,
  endIcon,
  children,
  variant = 'outlined',
}) => {
  return (
    <ButtonWrapper>
      <Button variant={variant} endIcon={endIcon} onClick={onClick} disabled={loading || disabled}>
        {children}
      </Button>
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            color: '#556cd6',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}
        />
      )}
    </ButtonWrapper>
  );
};

export default LoadingButton;
