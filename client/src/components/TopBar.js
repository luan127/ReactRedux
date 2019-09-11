import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'

import CartContainer from '../containers/CartContainer'
import ListProducts from '../components/ListProducts'


export default function TopBar({cart}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return(
    <Router>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={()=>{toggle()}} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="m-2">
              <Link to='/Cart/'> Cart({cart.length})</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Route path='/cart/' component={CartContainer}></Route>
      <Route exact  path='/' component={ListProducts}></Route>
    </Router>
  )
}

