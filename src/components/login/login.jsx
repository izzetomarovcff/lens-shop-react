import React from "react";
import './login.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetLogin,SetRegister } from "../../redux/action";

function Login(props) {
    const dispatch = useDispatch()
    const {GeneralResponse} = useSelector(state=>state)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(SetLogin(true))
        console.log(email)
        console.log(password)
        setEmail('');
        setPassword('');
    };
    const changetype =()=>{
        dispatch(SetRegister(false))
    }
    const changelogin = () =>{
        
    }
    return (
        <div className="wrapper">
            <div className="form-box login">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>

                    <div className="input-box">
                        <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} required/>
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-lock"></i></span>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} required/>
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />Remember me</label>
                        <Link to="/" >Forgot Password?</Link>
                    </div>
                    <button type="submit" className="btn" onClick={changelogin}>Login</button>
                    <div class="login-register">
                        <p>Don't have an account?
                            <Link to="/" className="register-link" onClick={changetype}  > Register</Link>
                        </p>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
export default Login;