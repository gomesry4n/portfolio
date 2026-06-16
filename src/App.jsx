import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Inicio from './pages/Inicio/Inicio';
import SobreMim from './pages/SobreMim/SobreMim';
import Menu from './componentes/Menu/Menu';
import Banner from './componentes/Baner/Banner';
import Rodape from './componentes/Rodape/Rodape';


const App = () => {
  return (
    <BrowserRouter>
    <Menu/>
    <Banner/>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/sobremim' element={<SobreMim/>}/>
      <Route path='*' element={<div>Erro 404 - Pàgina não encontrada</div>}/>
    </Routes>
    <Rodape/>
    </BrowserRouter>

  )

}

export default App
