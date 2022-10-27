import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import {AppPalette, ColorSchemes, ProjectGoal, SocialMedia} from './interfaces';
import {Colors, SupportedLanguages} from './enums';
import {alpha} from '@mui/material';

export const appName = 'dataviz';

export const supportedLanguages = [SupportedLanguages.English, SupportedLanguages.Russian];

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
    title: 'about.goals.learn-d3.title',
    description: 'about.goals.learn-d3.description',
  },
  {
    title: 'about.goals.combine-d3-and-jsx.title',
    description: 'about.goals.combine-d3-and-jsx.description',
  },
  {
    title: 'about.goals.compare-data.title',
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

export const lightThemePalette: AppPalette = {
  text: Colors.RichBlack,
  background: Colors.Snow,
  neutral: alpha(Colors.LiverChestnut, 0.3),
  primary: Colors.IndigoDye,
  secondary: Colors.PastelPink,
  info: Colors.NeonSilver,
  infoLight: alpha(Colors.NeonSilver, 0.1),
  success: Colors.PigmentGreen,
  warning: Colors.Citrine,
  error: Colors.Red,
  accentOne: Colors.QuartzGray,
  accentTwo: Colors.QueenBlue,
  accentThree: Colors.QuickSilver,
};

export const darkThemePalette: AppPalette = {
  text: Colors.Snow,
  background: Colors.RaisinBlack,
  neutral: alpha(Colors.NeonSilver, 0.22),
  primary: Colors.PastelBlue,
  secondary: Colors.CadetGray,
  info: Colors.NeonSilver,
  infoLight: alpha(Colors.NeonSilver, 0.1),
  success: Colors.UfoGreen,
  warning: Colors.Golden,
  error: Colors.Scarlet,
  accentOne: Colors.PaleCerulean,
  accentTwo: Colors.CoralPink,
  accentThree: Colors.OldRose,
};

export const lightThemeColorSchemes: ColorSchemes = {
  schemeOne: [
    Colors.LightGray,
    Colors.IndigoDye,
    Colors.CentennialRose,
    Colors.BlueDam,
    Colors.Identity,
    Colors.ArrowheadLake,
    Colors.StormyWeather,
    Colors.PoppyRed,
    Colors.Tarawera,
  ],
  interpolationGreen: [Colors.TurquoiseGreen, Colors.TealGreen],
  svgChartPalette: lightThemePalette,
};

export const darkThemeColorSchemes: ColorSchemes = {
  schemeOne: [
    Colors.BlueHeeler,
    Colors.PastelBlue,
    Colors.TurtleBay,
    Colors.BlackishGreen,
    Colors.DutchBlue,
    Colors.FadedDenim,
    Colors.StrawberrySpinachRed,
    Colors.YellowOcher,
    Colors.LilacBush,
  ],
  interpolationGreen: [Colors.AshGray, Colors.HookersGreen],
  svgChartPalette: darkThemePalette,
};
