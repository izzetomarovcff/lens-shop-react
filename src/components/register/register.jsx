import React from "react";
import './register.css'
import '../login/login.css'
import { useState } from "react";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetLogin,SetRegister } from "../../redux/action";
function Register(props) {
    const dispatch = useDispatch()
    const {GeneralResponse} = useSelector(state=>state)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };
    const changetype2 = () => {
        dispatch(SetRegister(true))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(SetLogin(true))
        console.log(username)
        console.log(email)
        console.log(password)
        setUsername('');
        setEmail('');
        setPassword('');
        
    };
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const changelogin = () =>{
        
        
    }
    return (
        <div className="wrapper">
            <div class="form-box">
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-user"></i></span>
                        <input type="text" id="username" value={username} onChange={handleUsernameChange} required />
                        <label>Username</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-lock"></i></span>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} required/> I agree to the terms & conditions</label>
                    </div>
                    <button type="submit" className="btn" onClick={changelogin}>Register</button>
                    <div class="login-register">
                        <p>Already have an account?
                            <Link to="/" className="register-link" onClick={changetype2}  > Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default Register