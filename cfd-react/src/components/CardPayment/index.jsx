import React from 'react'
import InputRadio from '../../components/inputRadio'
import InputComponent from '../../components/input'
import './style.scss'

const CardPayment = ({ radio, img, content }) => {
    return (
        <div className="card-payment">
            <div className="top_pay">
                <InputRadio radio={radio} />
                <p>{img}</p>
            </div>
            {/* <div className="content">
                {content}
            </div> */}
            <div className="form_input"></div>
                <div className="input__up">
                    <InputComponent placeholderTitle={"Card number"}/>
                </div>
                <div className="input__down">
                    <div className="first">
                        <InputComponent placeholderTitle={"Card holder"}/>   
                    </div>
                    <div className="second">
                        <InputComponent placeholderTitle={"DD/MM/YY"}/>
                    </div>
                    <div className="second">
                        <InputComponent placeholderTitle={"CVC"}/>
                    </div>
                </div>
        </div>
    )
}
export default CardPayment