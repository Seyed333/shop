// src/router.tsx
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<RegisterPage />} />
  </Routes>
);

export default Router;
