import './user-status.css';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { credentialActions } from '../store/user';
import storageRead, { storageIsValid, storageRemove } from '../utils/locals/Storage';

const UserStatus = () => {
  const [username, setUsername] = useState('');
  const [isValid, seIsValid] = useState(false);
  const isLoadedRef = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoadedRef.current) {
      const hasLocalData = storageIsValid();
      if (hasLocalData) {
        const localData = storageRead();
        dispatch(credentialActions.init(localData));
        setUsername(localData.user_name);
        seIsValid(true);
      }
    }
    return () => isLoadedRef.current = true;
  }, [dispatch]);

  const handleLogoff = () => {
    storageRemove();
    if (window.location.pathname !== '/' ||
      window.location.pathname !== '/home') {
        navigate('/conta/login');
      }
  };

  return(
    <>
      <div className="login-status">
        {isValid ?
        <>
          <div className="status-view">
            <strong>Logado:</strong>
            <span>{username}</span>
          </div>
          <button type="button" onClick={() => handleLogoff()}>Logout</button>
        </>
        : <Link to="/conta/login">Login</Link>}
      </div>
    </>
  );
};

export default UserStatus;
