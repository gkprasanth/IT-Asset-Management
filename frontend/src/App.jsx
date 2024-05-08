import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/register'
import { useSelector } from 'react-redux'
import NavBar from './components/NavBar'
import AssetAllocation from './pages/AssetAllocation'


function App() {
  const isLoggedIn = useSelector((state)=>state.user.isAuthenticated)
   return (
    <>
      <BrowserRouter>
      {isLoggedIn && <NavBar/>}
        <Routes>
          <Route path='/' element={isLoggedIn ? <Home/> : <Navigate to={'/login'} />} />
          <Route path='/asset-allocation' element={<AssetAllocation/>}  />
          <Route path='/login' element={<Login/>}  />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
