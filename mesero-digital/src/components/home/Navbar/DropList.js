import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'; 
import React, {useState} from 'react';

const DropList = () => {

    const [dropdown, setDropdown]=useState(false);
    const abrirCerrarDropdown=() => {
      setDropdown(!dropdown);
    }
    return (
        <div>
            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
                <DropdownToggle className="boton">
                Boton Dropdown
                    
                </DropdownToggle>


                <DropdownMenu>
                    <DropdownItem>Item1</DropdownItem>
                    <DropdownItem>Item2</DropdownItem>
                    <DropdownItem>Item3</DropdownItem>
                    <DropdownItem>Item4</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>


    )
}



export default DropList;