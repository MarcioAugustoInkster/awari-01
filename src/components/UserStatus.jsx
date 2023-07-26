import './user-status.css';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { credentialActions } from '../store/user';
import storageRead, { storageIsValid, storageRemove } from '../utils/locals/Storage';

const UserStatus = () => {
  const [credentials, setCredentials] = useState();
  const isLoadedRef = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoadedRef.current) {
      const hasData = storageIsValid();
      if (hasData) {
        const localData = storageRead();
        setCredentials(localData);
        dispatch(credentialActions.init(localData));
      }
    }
    return () => (isLoadedRef.current = true);
  }, [dispatch]);

  const handleLogoff = () => {
    storageRemove();
    if (window.location.pathname !== '/' || window.location.pathname !== '/home') {
      navigate('/conta/login');
    }
  };

  return(
    <>
      <div className="login-status">
        {credentials !== undefined ?
        <>
          <div className="status-view">
            <strong>Logado:</strong>
            <span>{credentials.username}</span>
          </div>
          <button type="button" onClick={() => handleLogoff()}>Logout</button>
        </>
        : <Link to="/conta/login">Login</Link>}
      </div>
    </>
  );
};

export default UserStatus;
