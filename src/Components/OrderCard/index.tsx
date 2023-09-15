import { XCircleIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'

const OrderCard = props => {
    const { title, imageUrl, price} = props;//es una variable que tiene todo lo que se recibe de props solo con los valores seleccionados
    console.log('imageUrl:', imageUrl);
return(
<div className="flex justify-between items-center mb-2">
    <div className='flex items-center gap-2'>
        <figure className=' w-20 h-20'>
            <img className=' w-full h-full rounded-lg object-cover' src={imageUrl} alt={title}></img>
        </figure>
    </div>
    <p className=' text-lg font-medium'>{price}</p>
    <XCircleIcon className="h-6 w-6 text-black mb-4 hover:cursor-pointer" />
</div>);
}

export default OrderCard