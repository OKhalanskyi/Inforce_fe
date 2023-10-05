import { RouteObject } from 'react-router-dom';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage.tsx';
import MainPage from '@/pages/MainPage/MainPage';
import { getMainPage, getProductPage } from '@/shared/constants/getRoutes.ts';
import ProductPage from '@/pages/ProductPage/ProductPage.tsx';


export const routerConfig: RouteObject[] = [
  {
    path: getMainPage(),
    element: <MainPage />,
  },
  {
    path: getProductPage(':productId'),
    element: <ProductPage />
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];