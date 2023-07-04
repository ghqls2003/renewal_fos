// assets
import { IconPhoto, IconVideo } from '@tabler/icons';

// constant
const icons = {
  IconPhoto,
  IconVideo
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Album',
  type: 'group',
  children: [
    {
      id: 'Photo1016',
      title: '2010-2016(Photo)',
      type: 'item',
      url: '/utils/Photo1016',
      icon: icons.IconPhoto,
      breadcrumbs: false
    },
    {
      id: 'Video1016',
      title: '2010-2016(Video)',
      type: 'item',
      url: '/utils/Video1016',
      icon: icons.IconVideo,
      breadcrumbs: false
    },
    {
      id: 'AfterPhoto2016',
      title: '2016 After(Photo)',
      type: 'item',
      url: '/utils/AfterPhoto2016',
      icon: icons.IconPhoto,
      breadcrumbs: false
    },
    {
      id: 'AfterVideo2016',
      title: '2016 After(Video)',
      type: 'item',
      url: '/utils/AfterVideo2016',
      icon: icons.IconVideo,
      breadcrumbs: false
    }
  ]
};

export default utilities;
