import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Owner from './pages/Owner';

function App() {
  return (
    <>
      {/* สร้าง path Home และ Owner Component */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Owner' element={<Owner />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
