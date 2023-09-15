import { useRoutes, BrowserRouter } from "react-router-dom"; //npm i react-router-dom /*  <BrowserRouter> sirve para redireccionar las paginas*/ 
import  Home  from "../Home";
import MyAccount from "../MyAccount";
import MyOrder  from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import Signin from "../Signin";
import Navbar from "../../Components/Navbar";
import React from 'react';
import { ShoppingCartProvider } from "../../Context";

//import { useState } from 'react'
import './App.css'
import SideMenu from "../../Components/ChekautSlideMenu";

const AppRputes:React.FC<{}> = () => {
  let routes = useRoutes([//useRoutes me sirve para enviar 
    {path: '/',  element: <Home/>},
    {path: '/my-account',  element: < MyAccount/>},
    {path: '/my-order',  element: < MyOrder/>},
    {path: '/my-orders',  element: < MyOrders/>},
    {path: '/*',  element: < NotFound/>},// el * significa que cualquier otra /pagina enviara a notfound
    {path: '/signin',  element: <Signin/>}
  ])
  return routes;
}

function App():JSX.Element {



  return (
    <>
    <ShoppingCartProvider>{/* sirve para indicar que todos los componentes que esten dentro de esta etiqueta pueden tener acceso a los valores que tiene este context*/}
    <BrowserRouter>{/*  <BrowserRouter> sirve para redireccionar las paginas*/}
    <Navbar></Navbar>
    <SideMenu></SideMenu>
    <AppRputes/>
    </BrowserRouter>
    </ShoppingCartProvider>
    </>
  )
}

export default App
