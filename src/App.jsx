
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import View from './Pages/View'
import Header from './Components/Header'

function App() {


  return (
    <>
      <Header></Header>
    <Routes>
    
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/view' element={<View></View>}></Route>
    <Route path='/login' element={<Auth></Auth>}> </Route> 

      <Route  path='/register' element={<Auth insideRegister></Auth>}></Route>
      </Routes> 
    </>
  )
}

export default App
