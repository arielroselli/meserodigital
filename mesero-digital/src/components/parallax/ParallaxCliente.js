import React from "react"
import './parallax.css';
import BodyGeneral from "../tienda/Body";


const ParallaxCliente = () => {



    return (
        <>
            <div className="parallax1">
                <div className="caption">
                <span className="border">Desliza para comenzar</span>
                </div>

            </div>


            <div className="sectionCliente">
                <BodyGeneral/>
                
            </div>


            <div className="parallax2">
                <div className="caption">
                    <h3 className="border">Alguna que otra cosa publicitaria</h3>
                </div>
            </div>
        </>
    )
}



export default ParallaxCliente