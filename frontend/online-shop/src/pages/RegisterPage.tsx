import React, { useState } from 'react';
import {
  Container, Typography, TextField, Button, Box, Alert
} from '@mui/material';
import instance from '../api/axios.ts';

const RegisterPage = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    phone_number: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const res = await instance.post('register/', form);
      if(res.data.username){
        // setMessage(res.data.message);
        setMessage("ثبت نام با موفقیت انجام شد");
      }
      
    } catch (err: any) {
      setError('ثبت‌نام ناموفق بود. اطلاعات را بررسی کنید.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} p={4} boxShadow={3} borderRadius={3}>
        <Typography variant="h5" mb={3}>ثبت‌نام</Typography>

        {message && <Alert severity="success">{message}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth margin="normal" label="نام کاربری" name="username"
            value={form.username} onChange={handleChange} />
          <TextField
            fullWidth margin="normal" label="ایمیل" name="email"
            value={form.email} onChange={handleChange} />
          <TextField
            fullWidth margin="normal" label="شماره تماس" name="phone_number"
            value={form.phone_number} onChange={handleChange} />
          <TextField
            fullWidth margin="normal" label="رمز عبور" name="password"
            type="password" value={form.password} onChange={handleChange} />
          <Button fullWidth type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            ثبت‌نام
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterPage;
