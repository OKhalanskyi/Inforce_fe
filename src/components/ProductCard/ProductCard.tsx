import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { IProduct } from '@/models/IProduct.ts';
import { Link } from 'react-router-dom';
import { getProductPage } from '@/shared/constants/getRoutes.ts';

type ProductCardProps = {
  product: IProduct,
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={getProductPage(String(product.id))}>
      <Card sx={{ maxWidth: 345, minWidth: 200 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image_url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default ProductCard;