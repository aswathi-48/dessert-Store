// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import Navbar from './Component/Navbar/Navbar'
// import Home from './Component/Home/Home'
// import About from './Component/About/About'
// import Menu from './Component/Menu/Menu'
// import Footer from './Component/footer/Footer'


// function App() {

//   return (
//     <Router>
//     <Navbar />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/menu" element={<Menu />} />


//     </Routes>
//     <Footer/>
//   </Router>

//   )
// }

// export default App


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Menu from './Component/Menu/Menu';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* path="/" */}
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
