
import React from 'react'
import './style.scss'
 const InputRadio = ({radio}) => {
    return (
        <div className="input_radio">
            <input type="radio"/>
            <label>{radio}</label>

        </div>
    )
}
export default InputRadio