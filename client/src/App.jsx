import './App.css'
import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen'
import Bookingscreen from './screens/Bookingscreen'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Registerscreen from './screens/Registerscreen'
import Loginscreen from './screens/Loginscreen'

function App() {
  

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homescreen />} />
          <Route path="/rooms/:id" element={<Bookingscreen />} />
          <Route path='/register' element={<Registerscreen />} />
          <Route path='/login' element={<Loginscreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
  }
export default App;
