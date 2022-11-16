import React, {useRef, useState} from 'react';
import {ListItemButton, ListItemText} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {ArticleMenu} from './ArticleMenu';

export const ArticleNav: React.FC = () => {
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <ListItemButton
        disableGutters
        component="li"
        aria-controls={open ? 'article-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <ListItemText
          primary={t('common.articles')}
          ref={anchorRef}
          sx={{
            cursor: 'pointer',
            color: open ? 'primary.light' : 'text.primary',
            '& :hover': {
              color: 'primary.light',
            },
          }}
        />
      </ListItemButton>

      <ArticleMenu anchorRef={anchorRef} open={open} setOpen={setOpen} />
    </>
  );
};
