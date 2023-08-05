import { Link, useNavigate } from 'react-router-dom';
import LoginView from '../components/login_view/LoginView';
import Button from '../components/buttons/Button';
import { useEffect } from 'react';
import store from '../store/store';
import { credentialActions } from '../store/user';

const Home = () => {
  const navigate = useNavigate();

  const onLoginPage = () => {
    navigate('/conta/login');
  };

  useEffect(() => {
    store.dispatch(credentialActions.init());
  }, []);

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
        <Button action={onLoginPage} />
      </div>
    </div>
  );
};

export default Home;
