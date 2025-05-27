// src/pages/Home.tsx
import { Container, Grid, Typography  } from '@mui/material';
import ProductCard from '../components/ProductCard.tsx';
import { useEffect, useState } from 'react';
import instance from '../api/axios.ts';


interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image_url: string;
}

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    instance.get<Product[]>('products/')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" mt={4} mb={2}>محصولات</Typography>
      <Grid container spacing={4}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
