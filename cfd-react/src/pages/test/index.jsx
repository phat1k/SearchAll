import React, { useRef } from 'react'
import InputTest from '../../components/TEST/inputtest';
import Product from '../../components/TEST/product/product';
import { useEffect, useState } from "react";
import productServices from "../../services/productServices";
import { useDispatch, useSelector } from 'react-redux';

 const Test = () => {
    
      const dispatch = useDispatch()
      const {count} = useSelector(store => store.count)
      const inputRef = useRef();
      const ref = useRef();
      const ref1 = useRef(); 

     const changeColor = () => {
        if(ref.current){
            ref.current.style.background = "blue";
        }
     }
     const resetText = () => {
        //  console.log(ref1)
        // if(ref1.current){
        //  ref1.current.value = ''}
        alert(ref1.current?.value)
        if(ref1.current){
            ref1.current.style.background = "yellow";
        }
     }

     const products = [
         {
            nameProduct: "iphone 5",
            price: "5$"
         },
         {
            nameProduct: "iphone x",
            price: "10$"
         },
         {
            nameProduct: "iphone xs",
            price: "150$"
         },
         {
            nameProduct: "iphone 13",
            price: "200$"
         },
         {
            nameProduct: "iphone 13 pro max",
            price: "4000$"
         },
     ]
     const [FedEx, setFedEx] = useState(false)
     const [DHL, setDHL] = useState(false)
     const [err, seterr] = useState("")
     const selectedFe = (ev) => {
         setFedEx(ev.target.checked)
     };
     const selectedDh = (ev) => {
         setDHL(ev.target.checked)
     }
     console.log(`FedEx`, FedEx)
     console.log(`DHL`, DHL)
     const submitChecked = () => {
      if(FedEx || DHL){
         seterr("")
         alert('thanh cong')
      }else{
         seterr("please checkbox")
      }
     }
     
    return (
        <div>
            <form>
                <input ref={inputRef} />
                <button onClick={() => alert(inputRef.current?.value)}>Click</button>
                <div ref={ref} className="box" style={{backgroundColor: "red", width: "100px", height: "100px"}}></div>
            </form>
                <button   onClick={changeColor}>change color</button>

                <InputTest ref1={ref1}/>
                <button onClick={resetText}>button</button>
                {products.map((e,i) => <Product 
                // price={e.price}
                // nameProduct={e.nameProduct}
                {...e}
                />)}

                {/* redux saga */}
                {count}
                <button  onClick={()=> dispatch({type: 'COUNT'})}> count +1</button>


                  <br /><br /><br /> <br /><br /><br /><br /><br />
                  {/* checkbox validate */}
                  <input type="checkbox" checked={FedEx}  onChange={selectedFe}/>FedEx<br /> 
                  <input type="checkbox" checked={DHL} onChange={selectedDh}/>DHL<br /> 
                  {err && <p>{err}</p>}
                  <button onClick={submitChecked}>submitChecked</button>

        </div>
    )
}

export default Test