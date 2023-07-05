import { useParams } from "react-router-dom";
import dadosUsuario from './../json/usuarios.json';
import { useEffect, useState } from "react";

const Details = () => {
    const { codigo } = useParams();
    const [usuario, setUsuario] = useState();

    const buscaUsuario = () => {
        const usuario = dadosUsuario?.find((usuario) => usuario.id === codigo);
        setUsuario(usuario);
    }

    useEffect(() => {
        buscaUsuario();
    });

    return(
        <div style={{margin: '0 16px'}}>
            {usuario !== undefined
            ? <table style={{
                border: '1px solid #c00',
                backgroundColor: '#eee',
                width: '100%',
                marginTop: '30px'
            }}>
                <tr>
                    <th style={{textAlign: 'right'}}>Código</th>
                    <td>{usuario.id}</td>
                </tr>
                <tr>
                    <th style={{textAlign: 'right'}}>Nome de Usuário</th>
                    <td>{usuario.author}</td>
                </tr>
            </table>
            : 'sem dados'}
            
        </div>
    );
}

export default Details;
