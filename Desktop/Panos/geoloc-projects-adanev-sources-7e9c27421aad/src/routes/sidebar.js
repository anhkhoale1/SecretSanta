import { IoCalendarOutline, RiNurseLine, RiToolsLine, RiBugLine, RiAncientPavilionLine } from 'react-icons/all';

const sidebar = [
  { path: '/dashboard', icon: RiAncientPavilionLine, name: 'Dashboard' },
  { path: '/Brand', icon: RiNurseLine, name: 'Brand' },
  { path: '/Store', icon: IoCalendarOutline, name: 'Store' },
  { path: '/Product', icon: IoCalendarOutline, name: 'Product' },
  { path: '/Supplier', icon: IoCalendarOutline, name: 'Supplier' },
  { path: '/setting', icon: RiToolsLine, name: 'Paramètres' },
  {
    icon: RiBugLine,
    name: 'Pages',
    routes: [
      // submenu
      {
        path: '/404',
        name: '404',
      },
      {
        path: '/coming-soon',
        name: 'Coming Soon',
      },
    ],
  },
];
export default sidebar;
