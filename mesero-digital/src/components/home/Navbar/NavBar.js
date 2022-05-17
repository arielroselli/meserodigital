import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BotonCarrito from '../../tienda/Carrito/BotonCarrito';
import 'animate.css';


const NavBar = () => {

   
    return (

        <header>
            <Navbar
                color="dark"
                expand="xl"
                fixed="top"
            >
                <NavbarBrand href="/" className='linkHome'><img className='imgLogo' src='/assets/logo/pizza.png' />
                    Mesero Digital
                </NavbarBrand>
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Modo de la pagina
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag='a' href='/tienda'>
                                    Cliente
                                </DropdownItem>
                                <DropdownItem tag='a' href='/administracion'>
                                    Administracion
                                </DropdownItem>
                                <DropdownItem divider />

                                <DropdownItem>
                                    Ayuda
                                </DropdownItem>
                            </DropdownMenu>



                        </UncontrolledDropdown>

                    </Nav>
                </Collapse>
                <BotonCarrito/>
            </Navbar>
        </header>
    )
}


export default NavBar;