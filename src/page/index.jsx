import { useNavigate } from 'react-router';
import { useStore } from '../store';

export const IndexPage = () => {
  const { userStore, authStore } = useStore();
  const { userId } = userStore.getUser();
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    authStore.resetAuthState();
    navigate(0);
  };

  return (
    <>
      <h1>Hi, {userId}</h1>
      <button onClick={(evt) => handleLogout(evt)}>Logout</button>
    </>
  );
};
