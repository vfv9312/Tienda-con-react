import { XCircleIcon } from '@heroicons/react/24/solid'

interface PropsProduct {
    id: number; 
    imageUrl: string;
    title: string;
    price: number;
    handleDelete: (id:number)=>void;
  }

const OrderCard:(props:PropsProduct) => JSX.Element = props => {
    const {id, title, imageUrl, price, handleDelete} = props;//es una variable que tiene todo lo que se recibe de props solo con los valores seleccionados
    let renderXCircleIcon;
    if (handleDelete) {
        renderXCircleIcon =     <XCircleIcon onClick={()=>(handleDelete(id))} className="h-6 w-6 text-black mb-4 hover:cursor-pointer" />
    }
return(
<div className="flex justify-between items-center mb-2">
    <div className='flex items-center gap-2'>
        <figure className=' w-20 h-20'>
            <img className=' w-full h-full rounded-lg object-cover' src={imageUrl} alt={title}></img>
        </figure>
    </div>
    {renderXCircleIcon }
    <p className=' text-lg font-medium'>{price}</p>
        
</div>);
}

export default OrderCard