import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import Cart from '../src/pages/Cart'

const App = () => {
  return (
    <div>
      <div className='bg-slate-900 sticky top-0 z-10'>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  )
};

export default App;
