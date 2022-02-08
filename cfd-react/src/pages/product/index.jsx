import { useEffect, useState } from "react"
import productServices from "../../services/productServices";
import categoryServices from "../../services/categoryServices"
import registerService from '../../services/registerServices'


  const Product = () => {
        const[IsLoading ,setIsLoading] = useState(true)
        const[product ,setProducts] = useState()
        const[IsCategory ,setIsCategorys] = useState([])
        useEffect ( () =>{
            (async () => {  
                setIsLoading(true)
                const res = await categoryServices.listCategory();
                console.log( "resss"  .  res)
                setIsCategorys(res)
                setIsLoading(false)
            })()
        }, [])
        useEffect ( () =>{
            (async () => {  
                setIsLoading(true)
                const res = await productServices.list()
                setProducts(res.data)
                setIsLoading(false)
            })()
        }, [])
        useEffect ( () =>{
            (async () => {  
                setIsLoading(true)
                const res = await registerService.formRegister("form")
                setProducts(res)
                setIsLoading(false)
            })()
        }, [])
        if(IsLoading) return '.........loading'
        console.log("PAGE__PRODUCT product" , product)
        console.log("PAGE__PRODUCT category" , IsCategory)

        return(
            <div>
                product <br />
                category <br />
            </div>
        )
    }
export default Product






