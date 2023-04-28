import sprite from '../components/share/SocialLink/symbol-defs.svg';
import scss from '../components/share/SocialLink/SocialLink.module.scss';
import { nanoid } from 'nanoid';

export const socialLink = [
  {
    id: nanoid(),
    name: scss.instagram,
    path: '',
    spriteIcon: sprite + '#icon-instagram',
  },
  {
    id: nanoid(),
    name: scss.facebook,
    path: '',
    spriteIcon: sprite + '#icon-facebook',
  },
  {
    id: nanoid(),
    name: scss.telegram,
    path: '',
    spriteIcon: sprite + '#icon-telegram',
  },
  {
    id: nanoid(),
    name: scss.linkedin,
    path: '',
    spriteIcon: sprite + '#icon-linkedin',
  },
];
