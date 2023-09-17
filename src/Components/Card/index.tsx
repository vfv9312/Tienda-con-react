//data:{data:{category:{name:string}}}
import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';



interface ObjetosApi {category:string;
    image:string;
     title:string;
      price:number;
       description:string}

       interface ClickEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}
      


const Card = (data:ObjetosApi) =>{//data lo recibimos de Home que es de donde llamamos a la api con todos los datos

    const context = useContext(ShoppingCartContext)!

    const showProduct = (productDetail:ObjetosApi) => {
        context.openProductDetail()
        context.setMostrarProducto(productDetail)
    }

    const addProductsToCart = (evento:ClickEvent, productData:ObjetosApi) => {//recibimos los valores de la accion click del boton agregar compra y producData que es los objetos que recibimos del api
        evento.stopPropagation()//stopPropagation es un metodo del evento click para que no se duplique la informacion
        {context.setContador(context.contador + 1)}//aumentamos en 1 al darle click agregar compra
        context.setCartProducts([...context.cartProducts, productData])// pasamos el valor individualmente para no clonar solo referencias del de cada producto que agreguemos al carrito el primer valor es el array actual y el segundo es el nuevo
        context.openSideMenu()
    }

    const retornaIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
        if (isInCart) {
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
               < CheckBadgeIcon color="green"/>
               </div>);
        }
        return(
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        onClick={(evento)=> addProductsToCart(evento, data.data)/* aqui al darle click llamara al metodo addProductsToCart el cual se le parasa dos valores event que es la accion del usuario y data que son los datos del api*/}>
       <ShoppingCartIcon/>
       </div>);
    }

return(
    <div className=" bg-white cursor-pointer w-56 h-60"
    onClick={() => showProduct(data.data)}>
        <figure className=" px-5 relative mb-2 w-full h-4/5">
            <span className=" absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category}</span>
            <img className="w-50 h-full object-cover rounded-lg" src={data.data.image}></img>
        {retornaIcon(data.data.id)}
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light ">{data.data.title}</span>
            <span className="text-sm font-medium">${data.data.price}</span>
        </p>
    </div>
);
}

export default Card