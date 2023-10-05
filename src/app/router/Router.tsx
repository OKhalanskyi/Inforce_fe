import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routerConfig } from '@/app/router/routerConfig.tsx';

const Router = () => {
  const router = useRoutes(routerConfig)

  return (
    <Suspense fallback={<h1>loading</h1>}>
      {router}
    </Suspense>
  );
};

export default Router;