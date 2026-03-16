import './App.css'
import {Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import AddLauncherPage from './pages/AddLauncherPage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
    <Navbar/>
       <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/AddLauncher' element={<AddLauncherPage/>}/>
        <Route  path='/launcher/:id' element={<LauncherDetailsPage  />}/>
       </Routes>
    </>
  )
}

export default App
