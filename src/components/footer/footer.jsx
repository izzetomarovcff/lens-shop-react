import React from "react";
import './footer.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Footer() {
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');
    const [v3, setV3] = useState('');
    const [v4, setV4] = useState('');
    const [v5, setV5] = useState('');
    const [v6, setV6] = useState('');
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname==='/'){
            setV1('active')
        }if(location.pathname==='/products'){
            setV2('active')
        }if(location.pathname==='/addition'){
            setV3('active')
        }if(location.pathname==='/about'){
            setV4('active')
        }if(location.pathname==='/rewiew'){
            setV5('active')
        }if(location.pathname==='/contact'){
            setV6('active')
        }
    },location)
  return (
    <div className="footer">
        <div className="share">
            <a href="https://www.facebook.com" class="fab fa-facebook"></a>
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidHIifQ%3D%3D%22%7D"
                className="fab fa-twitter"></a>
            <a href="https://www.instagram.com" class="fab fa-instagram"></a>
        </div>
        <div className="links">
            <Link to="/" className={v1}>Home</Link>
            <Link to="/products" className={v2}>Products</Link>
            <Link to="/addition" className={v3}>Addition</Link>
            <Link to="/about" className={v4}>About Us</Link>
            <Link to="/rewiew" className={v5}>Rewiew</Link>
            <Link to="/contact" className={v6}>Contact Us</Link>
        </div>
    </div>
  );
}

export default Footer;
