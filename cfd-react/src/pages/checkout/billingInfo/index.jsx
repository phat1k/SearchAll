import React, { useState } from 'react'
import InputComponent from '../../../components/input'
import { useForm } from '../../../hooks/useForm';
import { forwardRef, useImperativeHandle } from "react";
const inputBilling = [ 
    {
        titleInput: 'First name',
        placeholderTitle: 'First name',
        name:"firstName",
    },
    {
        titleInput: 'Email address',
        placeholderTitle: 'Email addess',
        name:"email",

    },
    {
        titleInput: 'Address',
        placeholderTitle: 'Adress',
        name:"address",

    },
    {
        titleInput: 'State / Country',
        placeholderTitle: 'Choose a state or Country',
        name:"country",

    },
    {
        titleInput: 'Last name',
        placeholderTitle: 'Last name',
        name:"lastName",

    },
    {
        titleInput: 'Phone number',
        placeholderTitle: 'Phone number',
        name:"phone",

    },
    {
        titleInput: 'Town / City',
        placeholderTitle: 'Town or city',
        name:"city",

    },
    {
        titleInput: 'ZIP/Postal code',
        placeholderTitle: 'Postal code or ZIP',
        name:"zipCode",

    },
 ];

 const BillingInfo = forwardRef((props, ref) => {
     const {form, err, inputChange, submit} = useForm({
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
    useImperativeHandle(ref, () => {
        return {
            form, err, inputChange, submit
        }
    }, [form, err, inputChange, submit])
    // const  [form , setForm ] = useState({
    //     address:"",
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password:"",
    //     zipCode:"",
    //     phone:"",
    //     country:"",
    //     city:"",
    // });
    // const  [err, seterr] = useState("")
    // const regaxemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const regaxpassword = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/;
    // const submit = (e) => { 
    //     e.preventDefault();
    //     let obj = {};
    //     if(!form.email){
    //         obj.email = "nhap email vao"
    //     }else if(!regaxemail.test(form.email)){
    //         obj.email = "vui lòng nhập đúng định dạng email !!!"
            
    //     }
    //     if(!form.firstName){
    //         obj.firstName="nhap firstName vao"
    //     }
    //     if(!form.lastName){
    //         obj.lastName="nhap lastName vao"
    //     }
    //     if(!form.address){
    //         obj.address="nhap địa chỉ vao"
    //     }
    //     if(!form.phone){
    //         obj.phone="nhap địa chỉ so dien thoai vao"
    //     }
    //     if(!form.zipCode){
    //         obj.zipCode="nhap ma code vao"
    //     }
    //     if(!form.country){
    //         obj.country="nhap quoc tich vao"
    //     }
    //     if(!form.city){
    //         obj.city="nhap thanh pho vao"
    //     }        
    //     if(!form.age){
    //         obj.age="nhap số tuổi vào để kiểm tra điều kiện 18+"
    //     }else if(form.age  >18){
    //         obj.age="chua du 18+"
    //     }
    //     seterr(obj);
    //     console.log(form) 
    // }
    // const inputChange = ( ev ) => {
    //     let name = ev.currentTarget.name;
    //     let value = ev.currentTarget.value;
    //     setForm({ 
    //         ...form, [name] :value,
    //     })
    // }
    return (
        <>
        <div className="container__billing">
                    <div className="billing__title">
                        <h2 className="title__item">Billing info</h2>
                        <p className="sub__item"> Please enter your billing info</p>
                    </div>
                    {inputBilling.map( (e,i) => <InputComponent
                    key={i}
                    {...e}
                    onChange={inputChange}
                    value={form[e.name]}
                    error={err[e.name]}
                  />)}
        </div>
        <button onClick={submit}>submit</button>
        </>

    )
})
export default BillingInfo;