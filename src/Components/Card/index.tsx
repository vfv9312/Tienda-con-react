//data:{data:{category:{name:string}}}
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import ProductDetail from "../ProductDetail";

const Card = (data:{data:{category:string; image:string; title:string; price:number; description:string}}) =>{

    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setMostrarProducto(productDetail)
    }

    const addProductsToCart = (evento, productData) => {
        evento.stopPropagation()
        {context.setContador(context.contador + 1)}
        context.setCartProducts([...context.cartProducts, productData])
        context.openSideMenu()
        console.log('cart ', context.cartProducts);
        
    }

return(
    <div className=" bg-white cursor-pointer w-56 h-60"
    onClick={() => showProduct(data.data)}>
        <figure className=" px-5 relative mb-2 w-full h-4/5">
            <span className=" absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category}</span>
            <img className="w-50 h-full object-cover rounded-lg" src={data.data.image}></img>
            <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
             onClick={(evento)=> addProductsToCart(evento, data.data)}>
            <ShoppingCartIcon/>
            </div>
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light ">{data.data.title}</span>
            <span className="text-sm font-medium">${data.data.price}</span>
        </p>
    </div>
);
}

export default Card