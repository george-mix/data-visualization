import React from 'react';
import {Avatar, List, ListItem} from '@mui/material';
import {socialMediaList} from '@helpers/common/data';

export const SocialMediaLinks: React.FC = () => (
  <List
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      pt: 6,
      pb: 6,
    }}
  >
    {socialMediaList.map((media) => (
      <ListItem
        key={media.name}
        sx={{width: 'auto'}}
      >
        <a href={media.link}>
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              '&:hover': {
                color: 'primary.main',
                bgcolor: 'background.default',
                border: 2,
              },
            }}
          >
            <media.icon />
          </Avatar>
        </a>
      </ListItem>
    ))}
  </List>
);
