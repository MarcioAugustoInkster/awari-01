import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosApi from '../../routes/axios';

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // conectando API Pokémons
    axiosApi.get().then(data => {
      if (data.status === 200) {
        setPokemons(data.data.results);
      }
    }).catch(error => console.log(error));
  }, []);

  return (
    <div className="pokemon-container">
      <div className="container-header">
        <Link to="/">Página Inicial</Link>
      </div>
      <div className="container-table">
        <h1>Lista de Pokémons</h1>
        <table className="pokemon-table">
          <thead>
            <tr>
              <th>Pokémon</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.length > 0 ? (
              pokemons.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <Link to={item.url} target='_blank'>{item.url}</Link>
                  </td>
                </tr>
              ))
            ) : (
              <span>Nenhum Pokémon encontrado</span>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pokemon;
