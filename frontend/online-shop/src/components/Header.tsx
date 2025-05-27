// src/components/Header.tsx
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LoginModal from './LoginModal.tsx';
import { useState } from 'react';



interface Props {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  
  return(
    <>
    <AppBar position="static">
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Box>
        <Button color="inherit">محصولات</Button>
        <Button color="inherit">دسته بندی</Button>
        <Button color="inherit">بیمه</Button>
        <Button color="inherit">بررسی</Button>
      </Box>
      <Box>
            {username ? (
              <Typography>{username}</Typography>
            ) : (
              <Button color="inherit" onClick={() => setModalOpen(true)}>ورود</Button>
            )}
      </Box>
      <Box>
        <IconButton color="inherit" onClick={toggleTheme}>
          <Brightness4Icon />
        </IconButton>
      </Box>
    </Toolbar>
    </AppBar>
    <LoginModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onLoginSuccess={(username) => setUsername(username)}
      />
    </>
  )

}

export default Header;
