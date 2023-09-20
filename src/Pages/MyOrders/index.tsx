import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";



function MyOrder():JSX.Element {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1
    
    
    return(
        
        <Layout>
            <div className="flex w-80 items-center justify-center relative">
        
                <h1>My Orders</h1>
            </div>
            {
                context?.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard 
                    totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
                    </Link>
                ))
            }
            <OrdersCard/>

            </Layout>
    )
}

export default MyOrder;