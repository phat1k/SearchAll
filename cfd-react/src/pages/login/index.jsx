import React, { useState, } from 'react'
import './style.scss';

import authService from '../../services/authServices'
import registerServices from '../../services/registerServices'

import { useDispatch, useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom'
import store from '../../store';

export const Login = () => {
    // const {form, err, inputChange, submit,} = useForm({ email: "", password:""});
    const { login, statusLogin } =  useSelector(store => store.auth);
   
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        username: "",
        password: "",
        name: "",
        fullname:"",
    });
    const [formregis, setFormregis] = useState({
        username: "",
        password: "",
        fullname:"",
    });
    const [err, seterr] = useState("")
    const regaxemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regaxpassword = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/;
    const submit = async (e) => {
        e.preventDefault();
        let obj = {};
        if (!form.username) {
            obj.username = "nhap email vao"
        } else if (!regaxemail.test(form.username)) {
            obj.username = "vui lòng nhập đúng định dạng email !!!"
        }
        if (!form.password) {
            obj.password = "vui lòng nhập password"
        }
        seterr(obj);
        console.log(form)
        if (Object.keys(obj).length === 0) {
            // call api
            const res = await authService.login(form);
            console.log(`res`, res)
            if (!res || res.message) {
                alert(res?.message || "Login error")
            } else {
                // luu token va updata login state len redux
                const token = res?.data;
                const loginAction = {
                    type: "LOGIN",
                    payload: token
                }
                dispatch(loginAction)
            }
        }
    }
    const register = async (e) => {
        e.preventDefault();
        let obj = {};
        if (!formregis.username) {
            obj.username = "nhap email vao"
        } else if (!regaxemail.test(formregis.username)) {
            obj.username = "vui lòng nhập đúng định dạng email !!!"
        }
        if (!formregis.password) {
            obj.password = "vui lòng nhập password"
        }
        if(!formregis.fullname){
            obj.fullname = " vui lòng nhập họ tên"
        }
        seterr(obj);
        console.log(formregis)
        if (Object.keys(obj).length === 0) {
            // call api
            const { password, username, fullname} = formregis
            const res = await registerServices.formRegister({
                password, username, name: fullname
            });
            console.log(`res`, res)
            if (!res || res.error) {
                alert(res?.error || "Register error")
            } else {
                // luu token va updata login state len redux
                const token = res?.data?.token;
                const register = {
                    type: "LOGIN",
                    payload: {
                        accessToken: token.accessToken,
                        refreshToken: token.refreshToken
                    }
                }
                dispatch(register)
            }
        }
    }

    const inputChange = (ev) => {
        let name = ev.currentTarget.name;
        let value = ev.currentTarget.value;
        setForm({
            ...form, [name]: value,
        })
    }
    const inputChangeRegister = (ev) => {
        let name = ev.currentTarget.name;
        let value = ev.currentTarget.value;
        setFormregis({
            ...formregis, [name]: value,
        })
    }

    if(statusLogin){
        return <Navigate to="/"/>
    }

    return (
        <div className="login-page">
            <div class="login__form">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div class="signup">
                    <form>
                    <label for="chk" aria-hidden="true">Login</label>
                        <input type="username" name="username" placeholder="username" value={form.username} onChange={inputChange} />
                        {err.username && <p className="errlogin">{err.username}</p>}
                        <input type="password" name="password" placeholder="Password" value={form.password} onChange={inputChange} />
                        {err.password && <p className="errlogin">{err.password}</p>}
                        <button onClick={submit}>Login</button>
                    </form>
                </div>
                <div class="login" >
                    <form>
                    <label for="chk" aria-hidden="true">Sign up</label>
                        <input type="text"  name="username" placeholder="User name" value={formregis.username} onChange={inputChangeRegister}/>
                        {err.username && <p className="errlogin">{err.username}</p>}
                        <input type="text" name="fullname" placeholder="fullname" value={formregis.fullname} onChange={inputChangeRegister}/>
                        {err.fullname && <p className="errlogin">{err.fullname}</p>}
                        <input type="password" name="password" placeholder="Password" value={formregis.password} onChange={inputChangeRegister} />
                        {err.password && <p className="errlogin">{err.password}</p>}
                        <button onClick={register}>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;