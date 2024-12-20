// import React from 'react'
import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs";
import {useContext} from 'react';
import {UserContext} from '../context/DataContextComp';




const Appbar = () => {
const {count}= useContext (UserContext)

  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">FAKE-API</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">Home</NavLink> 
           
          <NavLink className="nav-link" to="/Category1">Category</NavLink>  
          <NavLink className="nav-link" to="/Products">Products</NavLink>
      
          <Button> <BsFillCartFill/> Cart {count}</Button> <br/>
     
        
           <div className=" form-div ms-3">
                <input type="text"  className="form-control" /> 
           </div>  
         

 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Appbar