import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserTable = ({item}) => {
  const [listItems, setListItems] = useState([]);
  const navigate = useNavigate();

  const removeItem = (id) => {
    const result = listItems.filter(item => item.id !== id);
    setListItems(result);
  };

  const itemDetails = (id) => {
    navigate(`/usuario/detalhes/${id}`);
  };

  useEffect(() => {
    if (item.length > 0) {
      setListItems(item);
    }
  }, [item]);

  return(
    <table data-testid="user-table">
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Nome do Usuário</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        {listItems.length > 0 ? listItems.map((item, index) =>
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.author}</td>
          <td>
            <button
              type="button"
              onClick={() => itemDetails(item.id)}
              data-testid={`btn-detail_${item.id}`}
            >
              Detalhes
            </button>
            <span> | </span>
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              data-testid={`btn-delete_${item.id}`}
            >
              Remover
            </button>
          </td>
        </tr>)
        :
        <tr>
          <td colSpan={3}>Tabela vazia</td>
        </tr>}
      </tbody>
    </table>
  );
};

export default UserTable;
