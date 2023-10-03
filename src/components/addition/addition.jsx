import React from "react";
import { Link } from "react-router-dom";
import Header from '../header/header.jsx'
import Footer from "../footer/footer.jsx";
import { AddAdditionCart } from "../../redux/action.js";
import { ActiveCart }  from '../../redux/action';
import { useDispatch, useSelector } from "react-redux";
function Addition() {
  const dispatch = useDispatch()
  const { GeneralResponse } = useSelector(state => state)
  const handlAadditionsOnclick = (addition) => {
    if (GeneralResponse.login === false) {
      alert("Please login")
    } else {
      if (GeneralResponse.login === false) {
        alert("Please login")
      } else {
        dispatch(AddAdditionCart(addition))
        dispatch(ActiveCart(true))
      }
    }
  }
  return (
    <div className="">
      <Header />
      <div className="additions" id="additions">
        <h1 className="heading">Additions</h1>
        <div className="box-container">
        {GeneralResponse.adddata.map(addition => (
            <div className="box">
              <div className="box-head">
                <span className="title">{addition.type}</span>
                <Link to="/" className='name'>{addition.name}</Link>
              </div>
              <div className="image">
                <img src={addition.img} alt="" />
              </div>
              <div className="box-bottom">
                <div className="info">
                  <b className="price">₺{addition.price}</b>
                  <span className="amount">{addition.description}</span>
                </div>
                <div className="additions-btn">
                  <div className="a" onClick={()=>handlAadditionsOnclick(addition)}>
                    <i className="fas fa-plus"></i>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Addition;
