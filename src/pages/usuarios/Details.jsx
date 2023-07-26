import { Link, useParams } from 'react-router-dom';
import dadosUsuario from '../../json/usuarios.json';
import { useEffect, useState } from 'react';
import UserStatus from '../../components/UserStatus';

const Details = () => {
  const { codigo } = useParams();
  const [usuario, setUsuario] = useState();

  const buscaUsuario = () => {
    const usuario = dadosUsuario?.find((usuario) => usuario.id === codigo);
    if (usuario !== undefined) {
      setUsuario(usuario);
    }
  };

  useEffect(() => {
    buscaUsuario();
  });

  return (
    <div>
      <UserStatus />
      <div style={{ margin: '0 16px' }}>
        <div>
          <Link to="/">Voltar para o Inicio</Link>
          <span> | </span>
          <Link to="/usuarios">Voltar para Usuarios</Link>
        </div>
        {usuario !== undefined ? (
          <table
            style={{
              border: '1px solid #c00',
              backgroundColor: '#eee',
              width: '100%',
              marginTop: '30px',
            }}
          >
            <tbody>
              <tr>
                <th style={{ textAlign: 'right' }}>Imagem</th>
                <td>
                  <img
                    src={usuario.download_url}
                    alt="Imagem de Usuário"
                    width="72"
                    height="72"
                  />
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: 'right' }}>Tamanho da Imagem</th>
                <td>
                  <span>
                    {usuario.width}x{usuario.height}
                  </span>
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: 'right' }}>Midia Social</th>
                <td>
                  <Link to={usuario.url} target="_blank">
                    Ver meu Perfil
                  </Link>
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: 'right' }}>Código</th>
                <td>{usuario.id}</td>
              </tr>
              <tr>
                <th style={{ textAlign: 'right' }}>Nome de Usuário</th>
                <td>{usuario.author}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <span>Não há registros</span>
        )}
      </div>
    </div>
  );
};

export default Details;
