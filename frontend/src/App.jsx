import './App.css'
import {Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import AddLauncherPage from './pages/AddLauncherPage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import Navbar from './components/Navbar'
import Users from './pages/Users'
import LoginPages from './pages/LoginPages'
function App() {

  return (
    <>
    <Navbar/>
       <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/AddLauncher' element={<AddLauncherPage/>}/>
        <Route  path='/launcher/:id' element={<LauncherDetailsPage  />}/>
        <Route  path='/allusers' element={<Users  />}/>
        <Route  path='/Login' element={<LoginPages  />}/>
       </Routes>
    </>
  )
}

export default App
