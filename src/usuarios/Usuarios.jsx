const Usuarios = () => {
  const usuarios = [
    {
      codigo: 1,
      nome: 'João',
    },
    {
      codigo: 2,
      nome: 'Pedro',
    },
    {
      codigo: 3,
      nome: 'Maria',
    },
    {
      codigo: 4,
      nome: 'Ana',
    },
  ];

  return (
    <>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((item, index) => (
        <li key={index}>
          {item.codigo} - {item.nome}
        </li>))}
      </ul>
    </>
  );
};

export default Usuarios;
