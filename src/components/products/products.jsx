import React from "react";
import { useState } from "react";
import Header from '../header/header.jsx';
import Footer from "../footer/footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "../../redux/action";
import { ActiveCart }  from '../../redux/action';

function Product() {
  // const [query, setQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  
  const dispatch = useDispatch()
  const {GeneralResponse} = useSelector(state=>state)
  const handleOnclick = (product) => {
    if (GeneralResponse.login === false) {
      alert("Please login")
    } else {
      dispatch(AddCart(product))
      dispatch(ActiveCart(true))
    }
  }
  // const handleInputChange = (event) => {
  //   const searchTerm = event.target.value;
    
  //   // setQuery(searchTerm);
  //   // filterData(searchTerm);
  // };

  // const filterData = (searchTerm) => {
  //   const filteredData = GeneralResponse.productdata.filter(item =>
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setSearchResults(filteredData);
  // };
  return (
    <div className="">
      <Header />
      <div className="products" id="products">
        <h1 className="heading">Products</h1>
        <div className="box-container">
        {GeneralResponse.productdata.map(product => (
            <div className="box">
              <div className="box-head">
                <img src={product.img} alt="lens" />
                <span className="product-category">{product.type}</span>
                <h3>{product.name}</h3>
                <div className="price">{product.price} <span>{product.old_price}</span>
                </div>
                <div className="box-bottom">
                  <div className="btn" onClick={()=>handleOnclick(product)}>{product.addbutton}</div>
                </div>
              </div>
            </div>
          )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
