import { createContext, useContext, useEffect, useState } from "react";
import { MenuData } from "../data/menuData";

const RestContext = createContext();

const RestProvider = ({ children }) => {
  const [products, setProducts] = useState(MenuData);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartInProducts, setCartInProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [query,setQuery] = useState('');
  const [filterData,setFilterData] = useState([])
  const [checkoutBtn, setCheckOutBtn] = useState(false);

  useEffect(() => {
    const cartInProducts = products.filter((entries) =>
      cartProducts.includes(entries.id)
    );
    setCartInProducts(cartInProducts);
    console.log("Products in cart:", cartInProducts);

    // Calculate the total price whenever cartInProducts changes
    const newTotal = cartInProducts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [products, cartProducts]);

  return (
    <RestContext.Provider
      value={{
        products,
        setProducts,
        cartInProducts,
        setCartInProducts,
        cartProducts,
        setCartProducts,
        total,
        setTotal,
        query,
        setQuery,
        filterData,
        setFilterData,
        checkoutBtn, setCheckOutBtn
      }}
    >
      {children}
    </RestContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(RestContext);
};

export { RestContext, RestProvider, useGlobalContext };
