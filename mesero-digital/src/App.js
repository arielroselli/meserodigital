import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import NavBar from './components/home/Navbar/NavBar'
import Footer from './components/home/footer/Footer';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Parallax404Error from './components/parallax/Parallax404Error'
import ParallaxAdmin from './components/parallax/ParallaxAdmin'
import ParallaxCliente from './components/parallax/ParallaxCliente';
import ParallaxHome from './components/parallax/ParallaxHome';
import Detalles from './components/tienda/ItemListContainer/ContenedorDetallesItem/DetalleItem';
import { DataProvider } from './components/tienda/context/Context';
import { CarritoContext, CarritoProvider } from './components/tienda/context/CartContext';
import ParallaxCarrito from './components/parallax/ParallaxCarrito';
import CanvasCarrito from './components/tienda/Carrito/CanvasCarrito';


const App = () => {




    return (
        <>
            <CarritoProvider>

                <BrowserRouter>
                    <NavBar />
                    <CanvasCarrito/>
                    <Routes>
                        <Route path="/" element={<ParallaxHome />} />
                        <Route path="/:categoria" element={<ParallaxCliente />} />
                        <Route path="/Administracion" element={<ParallaxAdmin />} />
                        <Route path="/carrito" element={<ParallaxCarrito />} />
                        <Route path="/detalles/:id" element={<Detalles />} />
                        <Route path="*" element={<Parallax404Error />} />
                    </Routes>
                </BrowserRouter>
            </CarritoProvider>
            <Footer />
        </>
    )


}


export default App;