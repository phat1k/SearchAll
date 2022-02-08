import React, { useRef } from 'react'
import './style.scss'
import InputComponent from "../../components/input";
import CardRadio from '../../components/cardRadio';
import InputCheckbox from '../../components/inputCheckbox';
import Button__buy from '../../components/ButtonBuy'
import Payment from './payment';
import Summary from './summary'
import BillingInfo from './billingInfo'
import { BillingMethod } from './billingMethod';
import { useForm } from '../../hooks/useForm';

   
  
    const confirmation = [
        {
            titleConfirmation:"I agree with sending an Marketing and newsletter emails. No spam, promissed!"
        },
        {
            titleConfirmation:"I agree with our terms and conditions and privacy policy."
        }
    ]
   
    

    export const Checkout = () => {
        const {form, inputChange, submit, err} = useForm({
            address:"",
            firstName: "",
            lastName: "",
            email: "",
            password:"",
            zipCode:"",
            phone:"",
            country:"",
            city:"",
        });
        const billingInfoRef = useRef();
        const billingMethodRef = useRef();
        const submitAll = () => {
            const errorObject = {
                ...billingInfoRef.current?.submit(),
                ...billingMethodRef.current?.submitMethod(),
            }
            console.log("erro",errorObject)
            if (Object.keys(errorObject).length === 0) {
                const formData = {
                    ...billingInfoRef.current?.form,
                    ...billingMethodRef.current?.form,
                }
            console.log("formData",formData)
            }
        }
       
    return (
        <div className="checkout__page">
            <div className="checkout__left">
                <BillingInfo ref={billingInfoRef}/>
                <BillingMethod ref={billingMethodRef}/>
                <Payment/>
                {/* ADDITON */}
                <div className="container__additional">
                    <h2 className="title__item">Additional informations </h2>
                    <p className="sub__item">Need something else? We will make it for you!</p>
                    <InputComponent inputTitle={"Order notes"} placeholderTitle={"Need a specific delivery day? Sending a gitf? Let’s say ..."}/>
                </div>

                {/* COMFORMATION */}
                <div className="container__confirmation">
            
                <h2 className="title__item">Confirmation</h2>
                <p className="sub__item">We are getting to the end. Just few clicks and your order si ready!</p>
                {confirmation.map((e,i) => <InputCheckbox 
                key={i}
                confirmation={e.titleConfirmation}
                />)} <br />


               <Button__buy color="stroke" size="large" handleClick={submitAll}>
                    complete order
                </Button__buy>
                <div className="title_final">
                    <h3>All your data are safe</h3>
                    <p>We are using the most advanced <br />
                     security to provide you the best <br />
                     experience ever.</p>
                </div>
            </div>

            </div>
            <div className="checkout__right">
                <div className="summary">
                    <Summary/>
                </div>
            </div>
        </div>
    )
}
