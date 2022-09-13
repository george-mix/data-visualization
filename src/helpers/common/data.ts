import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import {ColorSchemes, ProjectGoal, SocialMedia} from './interfaces';

export const suppportedLanguages = ['EN', 'RU'];

export const socialMediaList: SocialMedia[] = [
  {
    name: 'Telegram',
    link: import.meta.env.VITE_TELEGRAM_LINK,
    icon: TelegramIcon,
  },
  {
    name: 'Email',
    link: import.meta.env.VITE_EMAIL_LINK,
    icon: EmailIcon,
  },
  {
    name: 'Github',
    link: import.meta.env.VITE_GITHUB_LINK,
    icon: GitHubIcon,
  },
];

export const projectGoals: ProjectGoal[] = [
  {
    header: 'about.goals.learn-d3.header',
    description: 'about.goals.learn-d3.description',
  },
  {
    header: 'about.goals.combine-d3-and-jsx.header',
    description: 'about.goals.combine-d3-and-jsx.description',
  },
  {
    header: 'about.goals.compare-data.header',
    description: 'about.goals.compare-data.description',
  },
];

export const technologyStackList = [
  'TypeScript',
  'Vite',
  'React',
  'Redux Toolkit',
  'React Query',
  'React-i18next',
  'MUI',
  'D3',
];

export const lightThemeColorSchemes: ColorSchemes = {
  schemeOne: [
    '#456b86',
    '#d7b1b3',
    '#bbc5d5',
    '#a6978b',
    '#788cae',
    '#90756f',
    '#6f6764',
    '#a0968f',
    '#5d3a35',
    '#3a2d39',
  ],
};

export const darkThemeColorSchemes: ColorSchemes = {
  schemeOne: [
    '#f8734b',
    '#f08667',
    '#cb5845',
    '#d67754',
    '#a24640',
    '#c55b36',
    '#b03824',
    '#612613',
    '#734638',
    '#bf6b52',
  ],
};
