import React from 'react';
import {Link, List, ListItem, ListItemText} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {TranslatedTypography} from '@components/UI/TranslatedTypography';
import {socialMediaList} from '@helpers/common/data';

export const SocialMediaList: React.FC = () => {
  const {t} = useTranslation();

  return (
    <>
      <TranslatedTypography
        translation="common.contacts"
        component="h2"
        variant="h6"
        sx={{
          color: 'primary.main',
        }}
      />
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
    </>
  );
};
