import React from 'react';
import styles from './index.module.css';
import { useGetAllProductsQuery } from '@/api/product.api.ts';
import ProductList from '@/components/ProductList/ProductList.tsx';
import Toolbar from '@/components/Toolbar/Toolbar.tsx';

const MainPage: React.FC = () => {
  const { data: products } = useGetAllProductsQuery()


  return (
    <div className={styles.toolbar}>
      <Toolbar />
      <ProductList products={products} />
    </div>
  );
};

export default MainPage;