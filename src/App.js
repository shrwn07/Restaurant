import Header from "./Components/Header";
import Home from "./Components/Home";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetails from "./Components/ProductDetails";
import Footer from "./Components/Footer";
import Address from "./Components/Address";
import Wallet from "./Components/Wallet";

function App() {
  return (
    <div className="App overflow-x-hiddenApp bg-[#232323]">
      <div className="w-full fixed top-0">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path='/dish-Cart:id' element={<ProductDetails />} /> */}
        <Route path="/checkout" element={<Address />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
