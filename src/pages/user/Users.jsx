import { Link } from 'react-router-dom';
import UserTable from '../../components/tables/UserTable';
import { useEffect, useRef, useState } from 'react';
import usuariosMock from '../../assets/json/usuarios-mock.json';

const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    if (!isLoadedRef.current) {
      setUsuarios(usuariosMock.usuarios);
    }
    return () => isLoadedRef.current = true;
  }, []);

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
        <Link to="/">Voltar</Link>
      </div>
      <h1>Lista de Usuários</h1>
      <UserTable item={usuarios} />
    </div>
  );
};

export default Users;
