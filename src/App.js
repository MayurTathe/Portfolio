import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Home from './components/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <div className='font-semibold text-2xl'>
        <Routes>
          <Route  path='/' element={<Home />}/>
          <Route exact path='/aboute' element={<AboutMe />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
