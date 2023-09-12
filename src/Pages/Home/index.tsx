import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import {useState, useEffect} from "react";
import { apiUrl } from "../../api";
import  ProductDetail  from "../../Components/ProductDetail";


function Home():JSX.Element {
    const [items, setItems] = useState(null);

    useEffect(()=>{
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => setItems(data))
        
    },[])

    return (
        <Layout>
            Home
            <div className="grid gap-4 grid-cols-3 w-full max-w-screen-lg ">
            {
                items?.map((articulos:{id:string;  category: string; image: string; title: string; price: number; }) => (// USAR () enves de {} returna automaticamente
                    <Card key = {articulos.id} data={articulos}/> 
                )) 
                
            }
            </div>
            <ProductDetail/>
        </Layout>
    )
}

export default Home