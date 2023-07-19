import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import pokeApi from '../../routes/axios';
import { AppContext } from '../../context/AppContext';

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const isLoadedRef = useRef(false);

  const { credentials } = useContext(AppContext);

  const formatData = useCallback(async() => {
    let apiData = [];
    for (let i = 0; i < 20; i++) {
      await pokeApi.get(`${(i + 1)}/`).then((data) =>
        data.status === 200 && apiData.push({
          id: data.data.id,
          name: data.data.name,
          picture: data.data.sprites.other['official-artwork'].front_default,
          height: data.data.height,
          weight: data.data.weight,
          baseXP: data.data.base_experience
        }));
    }
    setPokemons(apiData);
  }, []);

  useEffect(() => {
    // conectando API Pokémons
    if (!isLoadedRef.current) {
      formatData();
    }
    return () => (isLoadedRef.current = true);
  }, [formatData]);

  return (
    <div className="pokemon-container">
      <h4>
        <Link to="/">Página Inicial</Link>
      </h4>
      <ul>
        <li>
          <span>{credentials.user}</span>
        </li>
        <li>
          <span>{credentials.email}</span>
        </li>
        <li>
          <span>{credentials.access}</span>
        </li>
        <li>
          <span>{credentials.logado ? 'LOGADO' : 'NÃO LOGADO'}</span>
        </li>
      </ul>
      <div className="container-table">
        <h1>Lista de Pokémons</h1>
        <table className="pokemon-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Imagem</th>
              <th>Pokémon</th>
              <th>Altura</th>
              <th>Peso</th>
            </tr>
          </thead>
          <tbody>
            {pokemons?.length > 0 ? (
              pokemons.map((item, index) => (
                <tr key={index}>
                  <td>#{item.id}</td>
                  <td>
                    <img src={item.picture} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.height} mt</td>
                  <td>{item.weight} kg</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>Atualizando Pokémons...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pokemon;
