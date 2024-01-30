import './App.css'
import Navbar from './components/Navbar'
import Homescreen from './screens/homescreen'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homescreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
  }
export default App;
