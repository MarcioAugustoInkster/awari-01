import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import LoginView from '../components/login_view/LoginView';

const Home = () => {
  const navigate = useNavigate();

  const onLoginPage = () => {
    navigate('/conta/login');
  };

  return (
    <div>
      <LoginView />
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
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
        <Button text="Login" action={onLoginPage} />
      </div>
    </div>
  );
};

export default Home;
