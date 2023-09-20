
import { Link } from "react-router-dom";
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import OrderCard from "../../Components/OrderCard";
import Layout from "../../Components/Layout";
function MyOrder():JSX.Element {
    const context = useContext(ShoppingCartContext)!
    console.log(context.order);
    return(
       
        <Layout>
                      <div className="flex w-80 items-center justify-center relative">
                <Link to='/my-orders' className=" absolute left-0">
            <ArrowSmallLeftIcon className="h-6 w-6 text-black mb-4 cursor-pointer hover:cursor-pointer"/>
            </Link>
        
                <h1>My Order</h1>
            </div>
            <div className=" flex flex-col w-80">
            {
            context.order?.slice(-1)[0].products.map((product)=>(
                <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                />
                ) )
        }
            </div>
            </Layout>
     )
}

export default MyOrder;