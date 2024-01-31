import './App.css'
import Navbar from './components/Navbar'
import Homescreen from './screens/homescreen'
import Bookingscreen from './screens/Bookingscreen'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homescreen />} />
          <Route path="/rooms/:id" element={<Bookingscreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
  }
export default App;
