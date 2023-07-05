import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const Photo1016 = Loadable(lazy(() => import('views/utilities/Photo1016')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Video1016')));
const AfterPhoto2016 = Loadable(lazy(() => import('views/utilities/AfterPhoto2016')));
const AfterVideo2016 = Loadable(lazy(() => import('views/utilities/AfterVideo2016')));
const SourceRoot = Loadable(lazy(() => import('views/other/SourceRoot')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'Photo1016',
          element: <Photo1016 />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'Video1016',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'AfterPhoto2016',
          element: <AfterPhoto2016 />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'AfterVideo2016',
          element: <AfterVideo2016 />
        }
      ]
    },
    {
      path: 'other',
      children: [
        {
          path: 'SourceRoot',
          element: <SourceRoot />
        }
      ]
    }
  ]
};

export default MainRoutes;
