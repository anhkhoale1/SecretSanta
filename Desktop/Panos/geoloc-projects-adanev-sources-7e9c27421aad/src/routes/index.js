import { lazy } from 'react';

// use lazy for better code splitting
const Dashboard = lazy(() => import('../pages/Dashboard'));
const AddBrand = lazy(() => import('../pages/AddBrand'));
const AddSupplier = lazy(() => import('../pages/AddSupplier'));
const Page404 = lazy(() => import('../pages/404'));
const ComingSoon = lazy(() => import('../pages/ComingSoon'));
const Brand = lazy(() => import('../pages/Brand'));
const Supplier = lazy(() => import('../pages/Supplier'));
const Store = lazy(() => import('../pages/Store'));
const AddStore = lazy(() => import('../pages/AddStore'));
const Product = lazy(() => import('../pages/Product'));
const AddProduct = lazy(() => import('../pages/AddProduct'));
const routes = [
  {
    path: '/Brand',
    component: Brand,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/coming-soon',
    component: ComingSoon,
  },
  {
    path: '/Store',
    component: Store,
  },
  {
    path: '/Supplier',
    component: Supplier,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/AddBrand',
    component: AddBrand,
  },{
    path: '/AddStore',
    component: AddStore,
  },{
    path: '/AddSupplier',
    component: AddSupplier,
  },{
    path: '/Product',
    component: Product,
  },{
    path: '/AddProduct',
    component: AddProduct,
  }

];

export default routes;
