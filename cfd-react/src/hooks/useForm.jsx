import React from 'react'
import { useState } from 'react';

export const useForm = (initialForm) => {
    const regaxemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regaxpassword = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/;
    const  [form , setForm ] = useState(initialForm);

    const  [err, seterr] = useState("");

    const inputChange = ( ev ) => {
        let name = ev.currentTarget.name;
        let value = ev.currentTarget.value;
        setForm({ 
            ...form, [name] :value,
        })
    };

    const submit = () => { 
        // e.preventDefault();
        let obj = {};
        if(!form.email){
            obj.email = "nhap email vao"
        }else if(!regaxemail.test(form.email)){
            obj.email = "vui lòng nhập đúng định dạng email !!!"
            
        }
        if(!form.firstName){
            obj.firstName="nhap firstName vao"
        }
        if(!form.lastName){
            obj.lastName="nhap lastName vao"
        }
        if(!form.address){
            obj.address="nhap địa chỉ vao"
        }
        if(!form.phone){
            obj.phone="nhap địa chỉ so dien thoai vao"
        }
        if(!form.zipCode){
            obj.zipCode="nhap ma code vao"
        }
        if(!form.country){
            obj.country="nhap quoc tich vao"
        }
        if(!form.city){
            obj.city="nhap thanh pho vao"
        }        
        if(!form.age){
            obj.age="nhap số tuổi vào để kiểm tra điều kiện 18+"
        }else if(form.age  >18){
            obj.age="chua du 18+"
        }
        if(!form.password){
            obj.password="nhap password vao"
        }
        seterr(obj);
        console.log(form) 
        if(Object.keys(obj).length === 0){
            alert("da login thanh cong")
        }
    }

    return{
        form,
        err,
        inputChange,
        submit,
    }
}
