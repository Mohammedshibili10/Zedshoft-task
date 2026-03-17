
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import TodoPage from './pages/TodoPage'
import TodoDetails from './components/TodoDetails'


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
       <Route path='/todo' element={<TodoPage/>}/>
       <Route path='/tododetails' element={<TodoDetails/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
