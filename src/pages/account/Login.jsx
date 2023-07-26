import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { credentialActions } from '../../store/user';
import userDataApi from './../../assets/json/users_mock-databank.json';

const Login = () => {
  const [statusMessage, setStatusMessage] = useState();
  // const usernameRef = useRef('');
  // const passcodeRef = useRef('');
  const usernameRef = useRef('mas_email@fake.com');
  const passcodeRef = useRef('origin@l_123');

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();

    // if (usernameRef.current.value.trim().length === 0 ||
    //   passcodeRef.current.value.trim().length === 0) {
    //   setStatusMessage('Informe um Usuário e Senha');
    //   return;
    // }

    let apiResult = userDataApi.find((user) =>
      (user.username === usernameRef.current ||
      user.email === usernameRef.current) &&
      user.password === passcodeRef.current &&
      !user.logged
    );

    if (apiResult !== undefined) {
      const credData = {
        username: apiResult.username?.length === 0
          ? apiResult.email : apiResult.username,
        token: apiResult.token,
        access: apiResult.access,
        logged: true
      };
      dispatch(credentialActions.add(credData));
      navigation('/home');
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
            {/* <input type="text" id="lgusername" ref={usernameRef} /> */}
            <input type="text" id="lgusername" />
          </div>
          <div className="login-input">
            <label htmlFor="lgpasscode">Senha</label>
            {/* <input type="text" id="lgpasscode" ref={passcodeRef} /> */}
            <input type="text" id="lgpasscode" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
