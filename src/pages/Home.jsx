import { Link } from 'react-router-dom';
import dadosUsario from './../json/usuarios.json';

const Home = () => {
  return (
    <div>
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
            {dadosUsario?.length > 0 ? (
              dadosUsario.map((items, index) => (
                <tr key={index}>
                  <td>{items.id}</td>
                  <td>{items.author}</td>
                  <td>
                    <Link to={`/details/${items.id}`}>Detalhes</Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Tabela vazia</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
