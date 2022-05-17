import { useContext } from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CarritoContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';





const BotonCarrito = () => {

    const {counter,toggleCanvas } = useContext(CarritoContext);
  

    return (
        <>
        <Button onClick={()=>{toggleCanvas()}}>
        
                   <ShoppingCartIcon/>{counter}
                  
               
                 
        </Button>
        </>
    )

}

export default BotonCarrito;


