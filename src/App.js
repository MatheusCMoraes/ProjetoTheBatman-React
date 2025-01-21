import './App.css';
import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";
import Fotos from "./pages/fotos/Fotos";
import Comentarios from "./pages/comentarios/Comentarios";

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/comentarios" element={<Comentarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
