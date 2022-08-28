import React from 'react';
import {Avatar, List, ListItem} from '@mui/material';
import {socialMediaList} from '@utils/common/data';

export const SocialMediaLinks: React.FC = () => (
  <List style={{display: 'flex'}}>
    {socialMediaList.map((media) => (
      <ListItem key={media.name}>
        <a href={media.link}>
          <Avatar sx={{bgcolor: 'primary.main'}}>
            <media.icon />
          </Avatar>
        </a>
      </ListItem>
    ))}
  </List>
);
