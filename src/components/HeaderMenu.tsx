import React from 'react';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuMUIIcon from '@mui/icons-material/Menu';

import colors from '../consts/colors';
import { AppContext, AppProps, pages } from '../providers/AppProvider';

const MenuIcon = styled(MenuMUIIcon)({
  height: 35,
  width: 35,
  color: colors.black,
});

const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { pageSelected, setPageSelected } = React.useContext<AppProps>(AppContext);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (newValue: string) => () => {
    setPageSelected(newValue);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu id="header-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {Object.values(pages).map((p, index) => {
          const isCurrentPage = p === pageSelected;
          return (
            <MenuItem key={index} onClick={handleClose(p)} sx={{ background: isCurrentPage ? colors.grayLight : colors.white }}>
              {p}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default HeaderMenu;
