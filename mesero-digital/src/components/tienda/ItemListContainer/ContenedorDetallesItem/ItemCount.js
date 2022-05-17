
import { useState } from "react";
import { Button, ButtonGroup } from "reactstrap"





const ItemCount = ({ onAdd, stock, initial }) => {
const [count, setCount] = useState (initial)

const clickeado = () => {
  onAdd(count)
}


    return (
        <div className="cardComidas">
            <ButtonGroup>
                <Button onClick={() => {
                    if (count > initial) {
                        setCount(count - 1);
                    }
                    if (count == initial) {
                        setCount(1);
                    }
                }} className="botonCard" color="success">

                    -</Button>
                <Button className="bool botonCard ">
                    {count}
                </Button>
                <Button onClick={() => {
                    if (count < stock) {
                        setCount(count + 1)
                    }
                    if (count == stock) {
                        setCount(stock);
                    }
                }} className="botonCard" color="success">

                    +</Button>
            </ButtonGroup>
            <Button onClick={clickeado} className="botonCardAgregar">
                Agregar
            </Button>


        </div>
    )
}



export default ItemCount