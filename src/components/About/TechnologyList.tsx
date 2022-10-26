import React from 'react';
import {List, ListItem} from '@mui/material';
import {technologyStackList} from '@helpers/common/data';
import {Subheader} from '@components/UI/Subheader';
import {Paragraph} from '@components/UI/Paragraph';

export const TechnologyList: React.FC = () => (
  <>
    <Subheader text="about.technologies" sx={{pt: 1, pb: 1}}/>
    <List
      sx={{
        p: 0,
        pl: 4,
        listStyleType: 'disc',
      }}
    >
      {technologyStackList.map((technology) => (
        <ListItem key={technology} sx={{display: 'list-item'}}>
          <Paragraph text={technology} />
        </ListItem>
      ))}
    </List>
  </>
);
