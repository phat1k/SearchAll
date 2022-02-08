import React from 'react'
import InputRadio from '../../components/inputRadio'
import './style.scss'
// const inputRadio = [ 'FedEx', 'DHL'];
 const CardRadio = ({price, title, img,radio}) => {
    return (
        <div className="item__method">
            <InputRadio 
            radio={radio}>
            </InputRadio>
            <p>{price}</p>
            <p>{title}</p>
            <p>{img}</p>
        </div>
    )
}
export default CardRadio