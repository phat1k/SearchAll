
import React, { useEffect } from 'react';
import './style.scss'
import {useState} from 'react';
import productServices from "../../services/productServices";
import ProductCard from '../home/components/ProductCard'





const Category = () => {
    const [isFetching, setisFetching] = useState(true)
    const[product ,setProducts] = useState([])
    useEffect ( () =>{
        (async () => {  
            setisFetching(true)
            const res = await productServices.list()
            setProducts(res.data)
            setisFetching(false)
        })()
    }, []);
    return (
        <div className="category__container">
            <div className="category__left">
                menu category
            </div>
            <div className="category__right">
                {
                isFetching ? [...Array(15)].map((e,i) => <div  className="item__product "> <ProductCard loading={true} key={i} isFetching={true} /></div>) :
                product.map( (e,i) =>  <div className="item__product "> 
                <ProductCard titleProduct={e.name}  price={e.discount} sale={e.discount_rate}  img={e.images[0].medium_url} setisFetching={true}
                key={i}/></div>)}
            </div>
        </div>
    );
}
export default Category;