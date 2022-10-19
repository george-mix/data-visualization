import React from 'react';
import {Box, List, ListItem, Typography} from '@mui/material';
import {projectGoals} from '@helpers/common/data';
import {TranslatedTypography} from '@components/UI/TranslatedTypography';
import {Subheader} from '@components/UI/Subheader';
import {Paragraph} from '@components/UI/Paragraph';

export const GoalList: React.FC = () => (
  <>
    <Subheader text="about.goals.subheader" />
    <List
      component={'ol'}
      sx={{p: 0}}
    >
      {projectGoals.map((goal, index) => (
        <ListItem
          key={goal.title}
          sx={{
            flexWrap: 'wrap',
            p: 0,
          }}
        >
          <Box
            component="span"
            sx={{
              pb: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="h3"
              component="p"
              color="primary.main"
            >
              0{index + 1}.
            </Typography>
            <TranslatedTypography
              variant="h5"
              component="h3"
              translation={goal.title}
              sx={{
                overflowWrap: 'anywhere',
              }}
            />
          </Box>
          <Paragraph text={goal.description} />
        </ListItem>
      ))}
    </List>
  </>
);
