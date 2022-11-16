import React from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper} from '@mui/material';
import {AppPaths, articleRoutes} from '@router/routes';

type ArticleMenuProps = {
  anchorRef: React.RefObject<HTMLButtonElement>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

export const ArticleMenu: React.FC<ArticleMenuProps> = ({anchorRef, setOpen, open}) => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current
      && anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const handleItemClick = (path: AppPaths) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role="menu"
      id="article-menu"
      placement="bottom-start"
      transition
      disablePortal
    >
      {({TransitionProps, placement}) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom-start' ? 'left top' : 'left bottom',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                aria-labelledby="composition-button"
                onKeyDown={handleListKeyDown}
              >
                {articleRoutes.map((route) => (
                  <MenuItem key={route.path} onClick={() => handleItemClick(route.path)}>
                    {t(`${route.title}`)}
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};
