import React, { ReactNode, createContext, useState } from "react";

type Props = {
    children:  ReactNode
    
    
}
interface ContenidoContext {
    contador:number;
    setContador:(valor: number) => void;
    openProductDetail:() => void;
    closeProductDetail:() => void;
    detalleProductoAbierto:boolean;
    mostrarProducto:{};
    setMostrarProducto:{};
    cartProducts:[];
    setCartProducts:([]) => void;
    sideMenuAbierto:boolean;
    openSideMenu:() => void;
    closeSideMenu:() => void;
}

//interface TypeContext extends React.Context<ContenidoContext>




/*
const ShoppingCartContext:<Props | null>(null); = createContext()
React.Context<Props | null>
export const ShoppingCartProvider:React.FC<Props> = ({children}:Props) => {
*/

export const ShoppingCartContext = createContext<ContenidoContext | undefined>(undefined);//al crear un Context lo declaramos de esta forma y lo exportamos para que pueda ser usado afuera en otros componentes

export const ShoppingCartProvider:React.FunctionComponent<Props>= ({children}:Props) => {
    //Este estado incrementa a 1 cada que le de click al carrito de compra
    const [contador, setContador ] = useState(0);
   
   // open/close product detail
    const [detalleProductoAbierto, setDetalleProductoAbierto] = useState(false);//este estado nos servira para saber si actualizamos un estado inicia en false para que no abra en automatico
    const openProductDetail = () => setDetalleProductoAbierto(true);//si openProductDetail sera una funcion que al ser llamada simplemente hara el estado de arriba en true
    const closeProductDetail = () => setDetalleProductoAbierto(false);//si el closeProducto es llamado dara el valor de false al  estado detalleProductoAbierto
    
    //Show Product
    const [mostrarProducto, setMostrarProducto ] = useState({});//guardaremos el objeto del producto que le demos click con este estado
    
    //Add Products to Cart
    const [cartProducts, setCartProducts] = useState([])//almacenaremos valores en un array de productos comprados

    //Menu Open/Close
    const [sideMenuAbierto, setSideMenuAbierto] = useState(false);
    const openSideMenu= () => setSideMenuAbierto(true);
    const closeSideMenu = () => setSideMenuAbierto(false);
    
    return (<ShoppingCartContext.Provider value={{//al crear esta etiqueta le damos en value las variables y estados que usaremos para estar compartiendo informacion con cada componente
        contador,//exportamos usando context el valor para que lo agarre el componente que lo necesite en ese caso para aunmentar 1 cada que compre 1 articulo
        setContador,// setContador lo compartimos para poder actualizar contador
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
        {children/* children es un a variable especial que indica que todos los componenetes dentro pueden estar ahi*/}
        </ShoppingCartContext.Provider>)//tenemos que cerrar la etiqueta provider para que aqui se almacenen los estados de valores en este contexto
}

