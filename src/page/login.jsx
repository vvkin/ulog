import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';

export const LoginPage = () => {
  const { authStore } = useStore();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    authStore.setAuthState({ userId: 'johndoe' });
    navigate('/');
  };

  return (
    <div>
      <button onClick={(evt) => handleLogin(evt)}>Login</button>
    </div>
  );
};
