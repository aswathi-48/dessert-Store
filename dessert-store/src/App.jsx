

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Menu from './Component/Menu/Menu';
import Layout from './Layout';
import Contact from './Component/Contact/Contact';
import Specials from './Component/Specials/Specials';
import MenuDetails from './Component/Menu/MenuDetails';
import Test from './Component/test/Test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="specials" element={<Specials />} />
          <Route path="/dessert/:name" element={<MenuDetails />} />
        </Route>
        <Route path="/data" element={<Test />} />
         <Route path="/feature/:id" element={<Feature />}/>

      </Routes>
    </Router>
  );
}

export default App;
