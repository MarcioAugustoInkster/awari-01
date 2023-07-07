import { Link } from 'react-router-dom';

const Error = () => {
    return(
        <>
            <h1>404 - Página não encontrada</h1>
            <Link to="/">Voltar para Página Inicial</Link>
        </>
    );
};

export default Error;
