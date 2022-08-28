import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import {SocialMedia} from './interfaces';

export const suppportedLanguages = ['EN', 'RU'];

export const socialMediaList: SocialMedia[] = [
  {
    name: 'Telegram',
    link: import.meta.env.VITE_GITHUB_LINK,
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
