import './DetallesItem.css'
import { getComidasById } from '../ComidasMock'
import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import { Button, Spinner } from 'reactstrap'
import { CarritoContext } from '../../context/CartContext'
import Cargando from './assets/spinner/spinner'


const Detalles = () => {

    const { id } = useParams()

    const {agregar , addItem} = useContext(CarritoContext);

    const [comida, setComida] = useState()

    useEffect(async () => {
        await getComidasById(id).then(dato => {
            setComida(dato)

        }),4000
    }, [])

    const handleClick = (cant) => {

      addItem({...comida, cantidad: cant})

    }

    const esperando = (<Cargando/>)


    const dataC = (<div className='detalleItem'>

        <div id={comida === undefined ? null : comida.id} key={comida === undefined ? null : comida.id}>

            <div className='detallePadre' >

                <img className='detalleImagen' src={comida === undefined ? null : comida.imagen} alt={comida === undefined ? null : comida.nombre} />

                <div className='detalleTexto'>

                    <h1><strong>{comida === undefined ? null : comida.nombre}</strong></h1>
                    <h2>{comida === undefined ? null : comida.descripcion}</h2>
                    <div className='botonAgregar'>
                        <h3 className="mb-2 text-muted" tag="h6" >
                            Disponible: {comida === undefined ? null : comida.stock}
                        </h3>

                        {agregar ? <Link to={'/carrito'}><Button color="success" outline> Ir al carrito</Button></Link> : comida === undefined ?  null : <ItemCount onAdd={handleClick} stock={comida.stock} initial={1}  />  }
                    </div>
                
                </div>
            </div>
        </div>

    </div>)
    return (
        <>
            {comida ? (dataC) : (esperando)}
        </>)
}


export default Detalles