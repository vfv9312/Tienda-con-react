import React, { ReactNode, createContext, useState } from "react";

type Props = {
    children:  ReactNode
}




/*
const ShoppingCartContext:<Props | null>(null); = createContext()

export const ShoppingCartProvider:React.FC<Props> = ({children}:Props) => {
*/

export const ShoppingCartContext:React.Context<Props | null> = createContext();

export const ShoppingCartProvider:React.FunctionComponent<Props>= ({children}:Props) => {
    //icrement quatity
    const [contador, setContador ] = useState(0);
   
   // open/close product detail
    const [detalleProductoAbierto, setDetalleProductoAbierto] = useState(false);
    const openProductDetail = () => setDetalleProductoAbierto(true);
    const closeProductDetail = () => setDetalleProductoAbierto(false);
    
    //Show Product
    const [mostrarProducto, setMostrarProducto ] = useState({});
    
    //Add Products to Cart
    const [cartProducts, setCartProducts] = useState([])

    //Menu Open/Close
    const [sideMenuAbierto, setSideMenuAbierto] = useState(false);
    const openSideMenu= () => setSideMenuAbierto(true);
    const closeSideMenu = () => setSideMenuAbierto(false);
    
    return (<ShoppingCartContext.Provider value={{
        contador,
        setContador,
        openProductDetail,
        closeProductDetail,
        detalleProductoAbierto,
        mostrarProducto,
        setMostrarProducto,
        cartProducts,
        setCartProducts,
        sideMenuAbierto,
        openSideMenu,
        closeSideMenu
    }}>
        {children}
        </ShoppingCartContext.Provider>)
}

