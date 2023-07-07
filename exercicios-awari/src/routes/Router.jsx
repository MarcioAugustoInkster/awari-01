import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Error from '../pages/Error';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:codigo" element={<Details />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;