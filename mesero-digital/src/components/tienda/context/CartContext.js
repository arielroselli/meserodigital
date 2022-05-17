import { createContext, useMemo, useState } from "react";




export const CarritoContext = createContext();
export const CarritoProvider = ({ children }) => {


    const [carrito, setCarrito] = useState([])
    const [counter, setCounter] = useState(0)



    const addItem = (agregarProducto) => {
        console.log(carrito)
        setCarrito([...carrito, agregarProducto])
        setCounter(carrito.length)

    }
    const enCarrito = (id) =>{
        return carrito.findIndex(element=>element.id===parseInt(id))>=0?true:false;
    }

    const removeItem = (id) => {
        let carritoAux = carrito
        if(enCarrito(id))
        {let index = carritoAux.findIndex(element => element.id === parseInt (id))
        carritoAux.splice(index,1)
        setCarrito(carritoAux)}
        setCounter(carrito.length)
    }

    const borrarTodo = (id) => {
        setCarrito([])
    }

    const toggleCanvas = () => {
      let canvas = document.getElementById("canvasCarrito")
      if (canvas.style.display === "none")
      {canvas.style.display = "flex"}
      else {canvas.style.display = "none"}
    }


    const value = useMemo(() => {
        return {
            carrito,
            addItem,
            counter,
            removeItem,
            borrarTodo,
            toggleCanvas
        }}, [carrito, counter]
    )


    return (
        <CarritoContext.Provider value={value}>
            {children}
        </CarritoContext.Provider>
    )
}
