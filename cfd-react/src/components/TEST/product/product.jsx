import React from 'react'
import { useState } from 'react';
import './style.scss';
 const Product = ({price, nameProduct}) => {
     const [color, setColor] = useState();
     const [num, setNum] = useState(0);

  const changeColor = (color) => {
      setColor(color)
  }  ;
  const addProduct = (params) => {
    setNum( num +1)
  }
        return (
        <div className={`product__test ${color}`}>
             <p>sản phẩm {nameProduct}</p>
             <p>gia ban {price}</p>
             <span>{num}</span>
             <button onClick={() =>changeColor("red")}>red</button>
             <button onClick={() =>changeColor("green")}>green</button>
             <button onClick={() =>changeColor("vaiolet")}>vaiolet</button>
             <button onClick={addProduct}>add Product</button>
        </div>
    )
}
export default Product