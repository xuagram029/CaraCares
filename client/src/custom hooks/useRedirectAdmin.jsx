import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirectAdmin = (user) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }else{
      navigate('/admin-login');
    }
  }, [user, navigate]);
};

export default useRedirectAdmin;
