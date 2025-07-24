import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header';
import Calculadora from './components/Calculadora/Calculadora';
import Conversor from "./components/Conversor/Conversor";
import FaleConosco from "./components/FaleConosco/FaleConosco";
import Login from "./components/Login/Login";
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <BrowserRouter>
                <section>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/calculadora" element={<Calculadora />} />
                        <Route path="/conversor" element={<Conversor />} />
                        <Route path="/fale-conosco" element={<FaleConosco />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </section>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;