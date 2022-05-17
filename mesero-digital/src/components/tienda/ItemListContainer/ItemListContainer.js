import { useEffect, useState } from "react";
import { getComidas } from '../ItemListContainer/ComidasMock'
import ItemList from "./ContenedorDetallesItem/ItemList";


const ItemListContainer = () => {
    const [count, setCount] = useState(1);


    const onAdd = (condition) => {
        if (condition === '-') {
            setCount(count - 1);
        }
        if (condition === '+') {
            setCount(count + 1);
        }

    };

    const [listado, setListado] = useState([])

    useEffect(() => {

        getComidas().then(datos => {
            setListado(datos)
            console.log(datos)
        })


    }, [])


    return (
        <div className="contenedorPedidos">
            <div className="itemComida">
                <div className="contador">
                    <ItemList lista={listado} />
                </div>
            </div>


        </div>
    );
};


export default ItemListContainer