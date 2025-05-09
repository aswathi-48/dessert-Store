import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'


function App() {

  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>

  )
}

export default App
