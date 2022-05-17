import { Button } from "reactstrap";
import Item from '../ItemListContainer/ContenedorDetallesItem/Item'
import { getComidasById } from '../ItemListContainer/ComidasMock'
import { useEffect, useState } from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { useParams } from "react-router-dom";



const BotonSinStock = ({}) => {
  
  const { id } = useParams()

  const [comidas, setComidas] = useState()
  const [habilitado, setHabilitado] = useState(false);
  const [checkSeleccionado, setCheckSeleccionado] = useState([]);



  useEffect(async () => {
    await getComidasById(id).then(comida => {
      setComidas(comida)

    })
  }, [])



  const handleCambiarCheck = e => {

   let auxiliar = null;

    if (checkSeleccionado.includes(e.target.value)) {
      auxiliar = checkSeleccionado.filter(elemento => elemento !== e.target.value);

    } else {
      auxiliar = checkSeleccionado.concat(e.target.value);
    }
    setCheckSeleccionado(auxiliar);

    if (auxiliar.lenght > 0) {
      setHabilitado(true);
    } else {
      setHabilitado(false);
    }
  }


  return (
    <Button disabled={habilitado} onClick={() =>
      setHabilitado(true)}>

    </Button>
  )
}

export default BotonSinStock