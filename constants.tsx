import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/home',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  // {
  //   title: 'Catelog',
  //   path: '/catelog',
  //   icon: <Icon icon="lucide:folder" width="24" height="24" />,
  //   submenu: true,
  //   subMenuItems: [
  //     { title: 'All', path: '/catelog' },
  //     { title: 'coming soon', path: '/catelog' },
  //     { title: 'coming soon', path: '/catelog' },
  //   ],
  // },
  {
    title: 'Material Handout',
    path: '/material-handout',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
  {
    title: 'Past Q',
    path: '/past-q',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Programming Languages',
    path: '/programming languages',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },

];