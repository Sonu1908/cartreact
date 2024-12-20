
import './App.css';
import Appbar from "./components/Appbar";
import Home from "./components/Home";
import Products from "./components/Products";
// import AddCart from "./components/AddCart"
import Category1 from "./components/Category1";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import DataContextComp from './context/DataContextComp'


  
function App() {
  return (
  

<>
      <Router>
    
    
  
      <Container>
      
        <DataContextComp name="name">
        <Appbar />
        <Routes>
    
          <Route path="/" element={<Home/>} />
          <Route path="/category1" element={<Category1/>} />
        </Routes>
        </DataContextComp>

        {/* <AddCart/> */}
       
        
       <Routes>
          
          {/* <Route path="/category1" element={<Category1/>} /> */}
          <Route path="/product" element={<Products/>} />
         
         </Routes>
        </Container>
      </Router>
    </>
  
  );
}

export default App;
