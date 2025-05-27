// src/components/ProductCard.tsx
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface ProductProps {
  product: {
    name: string;
    price: string;
    description: string;
    image_url: string;
  };
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image_url}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="subtitle1" color="primary">
          {product.price} تومان
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
