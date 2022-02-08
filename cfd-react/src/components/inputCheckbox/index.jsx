import React from 'react'
import './style.scss'
export const InputCheckbox = ({confirmation, radio , price, title, img, isSelected, onSelect}) => {
    return (
        <div className="input_checkbox">
            <input type="checkbox"  onChange={()=> onSelect(radio)} checked={isSelected}/>
            <label>{confirmation}</label>
            <p>{price}</p>
            <p>{title}</p>
            <p>{img}</p>
        </div>
    )
}
export default InputCheckbox;