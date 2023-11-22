import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ListaCategorias from './pages/categoria/ListaCategoria';
import ListaProdutos from './pages/produtos/ListaProdutos';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <div className='min-h-[80vh]'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/categoria" element={<ListaCategorias />} />
                        <Route path="/produtos" element={<ListaProdutos />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App