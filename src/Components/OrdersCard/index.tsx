interface PropsCard {
    totalPrice:number;
     totalProducts:number} 

const OrdersCard:(props:PropsCard) => void = props => {
    const {totalPrice, totalProducts}= props;//es una variable que tiene todo lo que se recibe de props solo con los valores seleccionados
    console.log(totalProducts);

return(
<div className="flex justify-between items-center mb-2 bg-slate-500 border-separate border-2 border-solid border-red-500 p-5 w-44">
<p className='flex justify-between w-full'>
    <div className='flex flex-col'>
    <span className=' font-light'>01.02.23</span>
    <span className=' font-light'>{totalProducts} articles</span>
    </div>
    <span className=' font-semibold'>${totalPrice}</span>
</p>
</div>);
}

export default OrdersCard