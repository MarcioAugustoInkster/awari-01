import { Link } from "react-router-dom";
import dadosUsario from './../json/usuarios.json';

const Home = () => {
    return(
        <div>
            <h1 style={{
                textAlign: 'center', 
                borderBottom: '2px solid black'
            }}>Lista de Usuários</h1>
            <div style={{margin: '0 30px'}}>
                <table style={{
                    border: '1px solid #000',
                    width: '100%'
                }}>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nome do Usuário</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosUsario?.length > 0 
                        ? 
                        dadosUsario.map((items, index) =>
                        <tr key={index}>
                            <td style={{textAlign: 'center'}}>{items.id}</td>
                            <td style={{textAlign: 'center'}}>{items.author}</td>
                            <td style={{textAlign: 'center'}}>
                                <Link to={`/details/${items.id}`}>
                                    Detalhes
                                </Link>
                            </td>
                        </tr>
                        )
                        :
                        <tr>
                            <td>Tabela vazia</td>
                        </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
