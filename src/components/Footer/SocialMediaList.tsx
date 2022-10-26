import React from 'react';
import {Box, Link, List, ListItem, ListItemText} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {socialMediaList} from '@helpers/common/data';
import {FooterCategorySubheader} from './FooterCategorySubheader';

export const SocialMediaList: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Box sx={{pb: 2}}>
      <FooterCategorySubheader text="common.contacts" />
      <List>
        {socialMediaList.map((media) => (
          <ListItem
            key={media.name}
            disableGutters
          >
            <Link
              href={media.link}
              underline="none"
              sx={{
                '& :hover': {
                  color: 'primary.light',
                },
              }}
            >
              <ListItemText
                primary={t(`${media.name}`)}
                sx={{
                  color: 'text.primary',
                }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
