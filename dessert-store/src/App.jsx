import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About'


function App() {

  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      

    </Routes>
  </Router>

  )
}

export default App
