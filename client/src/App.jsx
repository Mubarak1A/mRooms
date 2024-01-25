import './App.css'
import Navbar from './components/Navbar'
import Homescreen from './screens/homescreen'
import {BrowserRouter, Route, Link} from 'react-router-dom'

function App() {
  

  return (
    <div>
      <Navbar />
      <Homescreen />
    </div>
  )
}

export default App
