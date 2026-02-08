import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Swipe } from './pages/Swipe';
import { ProfileDetail } from './pages/ProfileDetail';
import { Messages } from './pages/Messages';
import { ThemeProvider } from './contexts/ThemeContext';

export function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/profile" element={<ProfileDetail />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </ThemeProvider>
  );
}