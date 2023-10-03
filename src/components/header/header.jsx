import React from "react";
import './header.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RemoveCart } from '../../redux/action'
import { RemoveAddtionCart } from '../../redux/action'
import { ActiveCart } from '../../redux/action'
import { Filter } from '../../redux/action'
import { FilterAddition } from '../../redux/action'
import { SetSearch } from '../../redux/action'
import { AddCart } from '../../redux/action'
import { AddAdditionCart } from '../../redux/action'
import {SetLogin} from  '../../redux/action'
function Header() {
    const [query, setQuery] = useState('');

    const dispatch = useDispatch()
    const { GeneralResponse } = useSelector(state => state)
    const [searchvalue, setsearchvalue] = useState('')
    const [v1, setV1] = useState('a');
    const [v2, setV2] = useState('a');
    const [v3, setV3] = useState('a');
    const [v4, setV4] = useState('a');
    const [v5, setV5] = useState('a');
    const [v6, setV6] = useState('a');
    const [search, setSearch] = useState('search-form');
    const [cart, setCart] = useState('deactivecart');
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            setV1('a active')
            dispatch(Filter([]))
            dispatch(FilterAddition([]))
            dispatch(SetSearch(false))
        } if (location.pathname === '/products') {
            setV2('a active')
            dispatch(Filter([]))
            dispatch(FilterAddition([]))
            dispatch(SetSearch(false))
        } if (location.pathname === '/addition') {
            setV3('a active')
            dispatch(Filter([]))
            dispatch(FilterAddition([]))
            dispatch(SetSearch(false))
        } if (location.pathname === '/about') {
            setV4('a active')
            dispatch(Filter([]))
            dispatch(FilterAddition([]))
            dispatch(SetSearch(false))
        } if (location.pathname === '/rewiew') {
            setV5('a active')
            dispatch(Filter([]))
            dispatch(FilterAddition([]))
            dispatch(SetSearch(false))
        } if (location.pathname === '/contact') {
            setV6('a active')
            dispatch(Filter([]))
            dispatch(FilterAddition([]))
            dispatch(SetSearch(false))
        }
    }, location)

    const activesearch = () => {
        if (search === "search-form") {
            setSearch('active')
            dispatch(SetSearch(false))
            setQuery('')
            setsearchvalue('')
        } else {
            setSearch('search-form')
            dispatch(SetSearch(false))
            setQuery('')
            setsearchvalue('')
        }
    }
    const activecart = () => {
        if (cart === "deactivecart") {
            setCart('activecart')
        } else {
            setCart('deactivecart')
        }
    }
    const removeLensItem = (proitem) => {
        const updatedItems = GeneralResponse.cart.filter((cartitem) => cartitem.id !== proitem.id)
        dispatch(RemoveCart(updatedItems))

    }
    const removeAdditionItem = (addition) => {
        const updatedAdditionItems = GeneralResponse.additioncart.filter((additioncartitem) => additioncartitem.id !== addition.id)
        dispatch(RemoveAddtionCart(updatedAdditionItems))

    }
    const buyevent = () => {
        // buy data
        console.log(GeneralResponse.cart)
        console.log(GeneralResponse.additioncart)
    }
    //search
    //productsearch
    const handleInputChange = (event) => {

        dispatch(SetSearch(true))
        const searchTerm = event.target.value;
        setsearchvalue(event.target.value)
        setQuery(searchTerm);
        filterData(searchTerm);
        filterAdditionData(searchTerm);
        
    };

    const filterData = (searchTerm) => {
        const filteredData = GeneralResponse.productdata.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        dispatch(Filter(filteredData));

    };
    const filterAdditionData = (searchTerm) => {
        const filteredData2 = GeneralResponse.adddata.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        dispatch(FilterAddition(filteredData2));
    };
    const handleOnclick = (product) => {
        if (GeneralResponse.login === false) {
          alert("Please login")
        } else {
          dispatch(AddCart(product))
          dispatch(ActiveCart(true))
        }
      }
      const handlAadditionsOnclick = (addition) => {
        if (GeneralResponse.login === false) {
          alert("Please login")
        } else {
          dispatch(AddAdditionCart(addition))
          dispatch(ActiveCart(true))
        }
      }
      const logout = ()=>{
        dispatch(SetLogin(false))
      } 
    return (
        <div className="header">
            <Link to="/" className="logo"><img src='images/logo.png' alt="image" /></Link>
            <nav class="navbar">
                <Link to="/" className={v1}>Home</Link>
                <Link to="/products" className={v2}>Products</Link>
                <Link to="/addition" className={v3}>Addition</Link>
                <Link to="/about" className={v4}>About Us</Link>
                <Link to="/rewiew" className={v5}>Rewiew</Link>
                <Link to="/contact" className={v6}>Contact Us</Link>
            </nav>
            <div className="buttons">

                <button id="search-btn" onClick={activesearch}>
                    <i className="fas fa-search">
                    </i>
                </button>
                <button id="cart-btn" onClick={activecart}>
                    <i className="fas fa-shopping-cart">
                    </i>
                </button>

                <button id="menu-btn">
                    <i className="fas fa-bars"></i>
                </button>

            </div>
            <div class={search}>
                <input type="text" class="search-input" id="search-box" placeholder="search here" onChange={handleInputChange} value={searchvalue} />
                <i class="fas fa-search"></i>
            </div>
            {GeneralResponse.search ? (<div className="searched">
                {GeneralResponse.productfiltered.map(proitem => (
                    <div className="itemss">
                        <div className="cartimg">
                            <img src={proitem.img} alt="dsg" />
                        </div>
                        <h1>{proitem.name}</h1>
                        <h1>₺{proitem.price}</h1>
                        <div className="btnsrc" onClick={()=>handleOnclick(proitem)}>ADD</div>
                    </div>
                ))}
                {GeneralResponse.additionfiltered.map(additem => (

                    <div className="itemss">
                        <div className="cartimg">
                            <img src={additem.img} alt="dsg" />
                        </div>
                        <h1>{additem.name}</h1>
                        <h1>₺{additem.price}</h1>
                        <div className="btnsrc" onClick={()=>handlAadditionsOnclick(additem)}>ADD</div>
                        
                    </div>
                ))}
            </div>) : (<div></div>)}
            {GeneralResponse.activecart ? (
                <div className={cart}>
                    {GeneralResponse.cart.map(proitem => (
                        <div className="itemss">
                            <div className="cartimg">
                                <img src={proitem.img} alt="dsg" />
                            </div>
                            <h1>{proitem.name}</h1>
                            <h1>₺{proitem.price}</h1>
                            
                            <i class="fa-solid fa-xmark delete" onClick={() => removeLensItem(proitem)}></i>
                        </div>
                    ))}
                    {GeneralResponse.additioncart.map(additem => (

                        <div className="itemss">
                            <div className="cartimg">
                                <img src={additem.img} alt="dsg" />
                            </div>
                            <h1>{additem.name}</h1>
                            <h1>₺{additem.price}</h1>
                            <i class="fa-solid fa-xmark delete" onClick={() => removeAdditionItem(additem)}></i>
                        </div>
                    ))}
                    <button className="buybutton " onClick={() => buyevent()}>BUY NOW</button>
                </div>
            ) : (<div></div>)}
            {GeneralResponse.login?(<i class="fa fa-sign-out" aria-hidden="true" onClick={()=>logout()}></i>):(<div></div>)}
            
        </div>
    );
}

export default Header;
