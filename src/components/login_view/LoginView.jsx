import { useState } from 'react';
import { useEffect } from 'react';
import storageRead, { storageRemove } from '../../utils/LocalData';
import { useNavigate } from 'react-router-dom';

const LoginView = () => {
  const [usuario, setUsuario] = useState();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    storageRemove();
    navigate('/home');
  };

  useEffect(() => {
    const localData = storageRead();
    if (localData !== null) {
      if (Object.keys(localData).length > 0) {
        setUsuario(localData);
      }
    }
  }, []);

  return(
    <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '25px'}}>
      {usuario !== undefined
      ?
      <div>
        <strong>Usuário: </strong>
        <span>{usuario['usuario']}</span>
        <button type="button" onClick={onLogoutHandler}>Logout</button>
      </div>
      : <span>Sem dados de Usuário</span>}
    </div>
  );
};

export default LoginView;
