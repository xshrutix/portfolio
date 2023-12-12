import './App.css';
import Home from './components/Home/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Containers/Footer';
import Contact from './components/Containers/Contact/Contact';

function App() {
  return (

    
        <BrowserRouter>
          
          <Routes>
          {/* <Route path="/details/:id" element={<Details />} /> */}
            
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
 
  

  );
}

export default App;
