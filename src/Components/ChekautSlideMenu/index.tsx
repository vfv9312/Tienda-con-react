import { useContext } from 'react'
import './style.css'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from "../OrderCard";
import { TotalPrice } from "../../utilis";

interface ObjetosApi {category:string;
    image:string;
     title:string;
      price:number;
       description:string}

const SideMenu= ()=>{
    const context = useContext(ShoppingCartContext)!
    
    const handleDelete = (id) => {
        const filterdProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filterdProducts)
    }
   
return(
    <aside className= {`${context.sideMenuAbierto ? 'flex' : 'hidden'} side-menu  flex-col z-10 fixed right-0 border border-black rounded bg-white`}>
        <div className='flex justify-between items-center'>
<h2 className=' font-medium text-xl p-6'>My Order</h2>
<div><XCircleIcon className="h-6 w-6 text-black mb-4 cursor-pointer hover:cursor-pointer" onClick={()=> {context.closeSideMenu()}}/></div>
        </div>
        <div className=' px-6 overflow-y-scroll'>
        {
            context.cartProducts.map((product)=>(
                <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                handleDelete={() => handleDelete(product.id)}
                />
                ) )
        }</div>
        <div className='px-6'>
            <p className='flex justify-between items-center'>
                <span className='font-light'>Total :</span>
                <span className=' font-medium text-2xl'>${TotalPrice(context.cartProducts)}</span>
            </p>
        </div>
    </aside>
)
}

export default SideMenu