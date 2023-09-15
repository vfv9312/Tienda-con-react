import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import {useState, useEffect} from "react";
import { apiUrl } from "../../api";
import  ProductDetail  from "../../Components/ProductDetail";


function Home():JSX.Element {
    const [items, setItems] = useState(null);

    useEffect(()=>{//useEffect se usa para api debido a que espera que se ejecute toda la app para comenzar a ejecutarse y no se vuelve a ejecutar almenos que 
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
                    <Card key = {articulos.id} data={articulos}/> // aqui enviamos los valores que recibimos de la api en key debido a que siempre lo pedira cuando se envien varios archivos con .map y data que tendra toda la informacion del api
                )) 
                
            }
            </div>
            <ProductDetail/>
        </Layout>
    )
}

export default Home