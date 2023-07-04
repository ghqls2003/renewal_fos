// assets
import { IconBusinessplan } from '@tabler/icons';

// constant
const icons = { IconBusinessplan };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Main',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Income & Expenditure',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconBusinessplan,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
