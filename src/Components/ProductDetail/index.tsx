import { useContext } from 'react'
import './style.css'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'



const ProductDetail= ()=>{
    const context = useContext(ShoppingCartContext)
   
    
  
    
return(
    <aside className= {`${context.detalleProductoAbierto ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded bg-white`}>
        <div className='flex justify-between items-center'>
<h2 className=' font-medium text-xl p-6'>Detalles</h2>
<div><XCircleIcon className="h-6 w-6 text-black mb-4 cursor-pointer hover:cursor-pointer" onClick={()=> {context.closeProductDetail()}}/></div>
        </div>
        <figure className='px-6'>
            <img className=' w-full h-full rounded-lg' src={context.mostrarProducto.image} alt={context.mostrarProducto.title}/>
        </figure>
        <p className='flex flex-col p-6'>
            <span className=' font-medium text-2xl mb-3'>${context.mostrarProducto.price}</span>
            <span className=' font-medium text-md mb-1'>{context.mostrarProducto.title}</span>
            <span className=' font-light text-sm'>{context.mostrarProducto.description}</span>
        </p>
    </aside>
)
}

export default ProductDetail