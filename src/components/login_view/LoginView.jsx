import { useState } from 'react';
import { useEffect } from 'react';
import storageRead from '../../utils/LocalData';

const LoginView = () => {
  const [usuario, setUsuario] = useState();

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
      </div>
      : <span>Sem dados de Usuário</span>}
    </div>
  );
};

export default LoginView;
