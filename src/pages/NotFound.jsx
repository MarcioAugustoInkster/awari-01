import { Link } from 'react-router-dom';

const NotFound = () => {
  return(
    <div>
      <Link to="/">Ir para Home</Link>
      <h1>404 - Página não encontrada.</h1>
    </div>
  );
};

export default NotFound;
