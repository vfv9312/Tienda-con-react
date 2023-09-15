import { useContext } from 'react'
import './style.css'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from "../OrderCard";

interface ObjetosApi {category:string;
    image:string;
     title:string;
      price:number;
       description:string}

const SideMenu= ()=>{
    const context = useContext(ShoppingCartContext)!
    console.log('cart2', context.cartProducts);
   
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
                title={product.title}
                imageUrl={product.image}
                price={product.price}/>
                ) )
        }</div>
    </aside>
)
}

export default SideMenu