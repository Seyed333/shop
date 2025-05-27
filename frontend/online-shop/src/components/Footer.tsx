// src/components/Footer.tsx
import { Box, Typography, Grid } from '@mui/material';

const Footer = () => (
  <Box sx={{ backgroundColor: 'primary.main', color: '#fff', p: 4 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6">درباره ما</Typography>
        <Typography>فروشگاه آنلاین با بهترین امکانات</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6">ارتباط با ما</Typography>
        <Typography>تلفن: 021-32154786</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6"></Typography>
        <Typography>© تمامی حقوق محفوظ است</Typography>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;
