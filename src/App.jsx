 import React from 'react'

 import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import DashBoard from './pages/DashBoard'
import Header from './components/Header'

 
 const App = () => {
   return (
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/signup' element ={<SignUp/>}/>
      <Route path='/projects' element ={ <Projects/>}/>
      <Route path='/dashboard' element ={<DashBoard/>}/>
     </Routes>
     </BrowserRouter>
   )
 }
 
 export default App