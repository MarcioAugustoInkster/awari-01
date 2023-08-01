import { Link } from 'react-router-dom';
import dadosUsario from './../../assets/json/usuarios-mock.json';
import LoginView from '../../components/login_view/LoginView';

const Users = () => {
  return (
    <div>
      <LoginView />
      <Link to="/">Voltar para Home</Link>
      <h1>Lista de Usuários</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Nome do Usuário</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {dadosUsario?.usuarios.length > 0 ? (
            dadosUsario.usuarios.map((items, index) => (
              <tr key={index}>
                <td>{items.id}</td>
                <td>{items.author}</td>
                <td>
                  <Link to={`/usuarios/detalhes/${items.id}`}>Detalhes</Link>
                </td>
              </tr>
            ))) : (
            <tr>
              <td>Tabela vazia</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
