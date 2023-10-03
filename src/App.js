import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/aboutus/about';
import Addition from './components/addition/addition';
import Contact from './components/contactus/contact';
import Product from './components/products/products';
import Rewiew from './components/rewiew/rewiew';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../src/redux";
function App() {
  const store = createStore(reducers)
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/addition" element={<Addition />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
          <Route path="/rewiew" element={<Rewiew />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
