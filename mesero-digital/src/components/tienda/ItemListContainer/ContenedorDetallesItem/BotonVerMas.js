import React, { useState } from 'react';


const VerMas = ({text}) => {
    const [mostrar, setMostrar] = useState(true);
    
    return (
        <>
            <a style={{ color: 'blue' }}
                type="button"
                onClick={() => {
                    setMostrar(!mostrar);
                }}
            >
                {mostrar ? 'Ver mas...' : 'Ver menos...'}
            </a>

            {mostrar ? (
                <div style={{ color: 'red' }}></div>
            ) : (
                <div className='descripcion'>{text}</div>
            )}
        </>
    );
}

export default VerMas

