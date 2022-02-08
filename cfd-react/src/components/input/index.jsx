import React from 'react'
import './style.scss';
 const InputComponent = (props) => {
    
    const {inputBilling, placeholderTitle, error} = props;
    return (
            <div className="input__item">
                <label>{inputBilling}</label>
                <input {...props}  type="text" placeholder={placeholderTitle}/>
               {error && <p className="">{error}</p>}
            </div>
    )
}
export default InputComponent;
