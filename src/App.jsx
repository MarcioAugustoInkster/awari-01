import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/account/Login';
import Pokemon from './pages/pokemon/Pokemon';
import Users from './pages/user/Users';
import Details from './pages/user/Details';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/conta/login" element={<Login />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/usuarios/detalhes/:codigo" element={<Details />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
