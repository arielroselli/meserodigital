import Item from './Item'

const ItemList = ({ lista }) => {

    const comidas = lista
    if (comidas != []) {
        return (
            <div className='cardList'>

                {comidas.map(plato =>
                    <Item data={plato} key={"item" + plato.id} />
                )}
            </div>
        )
    }


}


export default ItemList