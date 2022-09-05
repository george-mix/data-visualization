import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import {ProjectGoal, SocialMedia} from './interfaces';

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
