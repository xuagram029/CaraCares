import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirectUser = (user) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);
};

export default useRedirectUser;
