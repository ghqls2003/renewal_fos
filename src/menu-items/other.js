// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'documentation',
      title: 'SourceRoot',
      type: 'item',
      url: '/other/SourceRoot',
      icon: icons.IconHelp,
      breadcrumbs: false
    }
  ]
};

export default other;
