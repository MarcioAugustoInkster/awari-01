import { Link } from 'react-router-dom';
import UserStatus from '../components/UserStatus';

const Home = () => {
  return (
    <div>
      <UserStatus />
      <h1>Página Inicial</h1>
      <div className="list-center">
        <ul>
          <li>
            <Link to="/usuarios">Exercício Lista de Usuários</Link>
          </li>
          <li>
            <Link to="/pokemon">Exercício Pokémon</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
