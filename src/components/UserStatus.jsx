import './user-status.css';
import { useEffect, useRef, useState } from 'react';
import { storageIsValid, storageRead, storageRemove } from '../utils/locals/Storage';
import { Link, useNavigate } from 'react-router-dom';

const UserStatus = () => {
  const [username, setUsername] = useState('');
  const [showStatus, setShowStatus] = useState(false);
  const navigate = useNavigate();
  const isLoggedRef = useRef(false);

  useEffect(() => {
    if (!isLoggedRef.current) {
      const items = storageRead();
      if (items !== null) {
        setUsername(items.user_name);
        setShowStatus(true);
      }
    }
    if (!storageIsValid()) {
      setShowStatus(false);
    }
    return () => (isLoggedRef.current = true);
  }, [showStatus]);

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
        {showStatus ?
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
