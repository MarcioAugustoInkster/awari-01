import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { credentialActions } from '../../store/user';
import userDataApi from './../../assets/json/users_mock-databank.json';
import storageAdd from '../../utils/locals/Storage';

const Login = () => {
  const [statusMessage, setStatusMessage] = useState();
  const usernameRef = useRef('');
  const passcodeRef = useRef('');

  const navigation = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();

    if (usernameRef.current.value.trim().length === 0 ||
      passcodeRef.current.value.trim().length === 0) {
      setStatusMessage('Informe um Usuário e Senha');
      return;
    }

    let apiResult = userDataApi.find(user =>
      (user.username === usernameRef.current.value ||
      user.email === usernameRef.current.value) &&
      user.password === passcodeRef.current.value && !user.logged);

    if (apiResult !== undefined) {
      apiResult.logged = true;
      dispatch(credentialActions.add(apiResult));
      storageAdd(apiResult);
      navigation('/home');
      setStatusMessage('Login efetivado com sucesso!');
    } else {
      setStatusMessage('Usuário ou Senha incorretos');
    }
  };

  return (
    <div className="login-section">
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <Link to="/">Home Page</Link>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <span>{statusMessage}</span>
      </div>
      <div className="login-container">
        <h1>LOGIN</h1>
        <form onSubmit={(event) => handleLogin(event)}>
          <div className="login-input">
            <label htmlFor="lgusername">Username or Email</label>
            <input type="text" id="lgusername" ref={usernameRef} />
          </div>
          <div className="login-input">
            <label htmlFor="lgpasscode">Senha</label>
            <input type="text" id="lgpasscode" ref={passcodeRef} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
