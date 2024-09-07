import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {MenuData} from '../data/menuData'


const RestContext = createContext();

const RestProvider = ({ children }) => {
  const [products, setProducts] = useState(MenuData);
  const [pageProducts,setPageProducts] = useState([]);  //pagination product
  const [page,setPage] = useState(1);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartInProducts, setCartInProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [query,setQuery] = useState('');
  const [filterData,setFilterData] = useState([])
  const [checkoutBtn, setCheckOutBtn] = useState(false);

  useEffect(()=>{
    // async function fetchData(){
    //   try {
    //     const response =  await axios.get("http://localhost:3001/api/menu")
    //     setProducts(displayItems(response.data,page));
    //   } catch (error) {
    //     console.error({messege : error});
    //   }
    // }
    setPageProducts(displayItems(products,page));
    function displayItems(data,page){
      let itemPerPage = 16;
      const startIndex = (page - 1) * itemPerPage;
      const lastIndex = startIndex + itemPerPage;
      let slicedData = data.slice(startIndex,lastIndex);
      return slicedData;
    }
    // fetchData();

  },[page])

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
        checkoutBtn, setCheckOutBtn,
        page,setPage,
        pageProducts,setPageProducts
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
