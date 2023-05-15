import sprite from '../components/share/SocialLink/symbol-defs.svg';
import scss from '../components/share/SocialLink/SocialLink.module.scss';
import { nanoid } from 'nanoid';

export const socialLink = [
  {
    id: nanoid(),
    name: scss.instagram,
    path: 'https://www.instagram.com/web.every/',
    spriteIcon: sprite + '#icon-instagram',
  },
  {
    id: nanoid(),
    name: scss.facebook,
    path: 'https://www.facebook.com/profile.php?id=100092267193984',
    spriteIcon: sprite + '#icon-facebook',
  },
  {
    id: nanoid(),
    name: scss.telegram,
    path: 'https://t.me/Webevery',
    spriteIcon: sprite + '#icon-telegram',
  },
  {
    id: nanoid(),
    name: scss.linkedin,
    path: 'https://www.linkedin.com/company/webevery',
    spriteIcon: sprite + '#icon-linkedin',
  },
];
