import React from 'react';
import { Grid, Box } from '@mui/material';
import ProductCard from '@/components/ProductCard/ProductCard.tsx';
import { IProduct } from '@/models/IProduct.ts';

type ProductListProps = {
  products?: IProduct[],
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (!products) {
    return <h1>loading</h1>
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products?.map((product) => (
          <Grid item xs={2} sm={4} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;