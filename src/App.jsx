
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllCategories from './pages/AllCategories'
import AllProductsByCategories from './pages/AllProductsByCategories'
import Error from './pages/Error'
import ProductPage from './pages/ProductPage'
import AllSAles from './pages/AllSales'
import Cart from './pages/Cart'
function App() {

  return (
    <div className='App'>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/categories' element={<AllCategories />}/>
        <Route path='/categories/:id' element={<AllProductsByCategories />}/>
        <Route path='/products/:id' element={<ProductPage />}/>
        <Route path='/products/sale' element={<AllSAles />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </div>
  )
}

export default App
