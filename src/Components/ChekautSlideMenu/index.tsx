import { useContext } from 'react'
import './style.css'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'



const SideMenu= ()=>{
    const context = useContext(ShoppingCartContext)
    
return(
    <aside className= {`${context.sideMenuAbierto ? 'flex' : 'hidden'} side-menu  flex-col fixed right-0 border border-black rounded bg-white`}>
        <div className='flex justify-between items-center'>
<h2 className=' font-medium text-xl p-6'>My Order</h2>
<div><XCircleIcon className="h-6 w-6 text-black mb-4 cursor-pointer hover:cursor-pointer" onClick={()=> {context.closeSideMenu()}}/></div>
        </div>

    </aside>
)
}

export default SideMenu