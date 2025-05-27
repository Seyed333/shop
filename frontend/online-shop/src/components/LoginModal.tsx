import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Alert } from '@mui/material';
import instance from '../api/axios.ts';

interface Props {
  open: boolean;
  onClose: () => void;
  onLoginSuccess: (username: string) => void;
}

export default function LoginModal({ open, onClose, onLoginSuccess }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await instance.post('/login/', {
        username,
        password,
      });
      onLoginSuccess(response.data.username);
      setError('');
      onClose();
    } catch (err) {
      setError('نام کاربری یا رمز عبور اشتباه است.');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 400, margin: 'auto', mt: 10, p: 3, bgcolor: 'white', borderRadius: 2 }}>
        <Typography variant="h6" textAlign="center">ورود کاربر</Typography>
        <TextField
          fullWidth
          margin="normal"
          label="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="رمز عبور"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Alert severity="error">{error}</Alert>}
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
          ورود
        </Button>
      </Box>
    </Modal>
  );
}
