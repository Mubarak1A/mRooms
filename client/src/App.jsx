import './App.css'
import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen'
import Bookingscreen from './screens/Bookingscreen'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Registerscreen from './screens/Registerscreen'
import Loginscreen from './screens/Loginscreen'
import ProfileScreen from './screens/ProfileScreen'
import Adminscreen from './screens/Adminscreen'

function App() {
  

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homescreen />} />
          <Route path="/rooms/:id/:fromDate/:toDate" element={<Bookingscreen />} />
          <Route path='/register' element={<Registerscreen />} />
          <Route path='/login' element={<Loginscreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/admin' element={<Adminscreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
  }
export default App;
