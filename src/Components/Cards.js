import { useEffect } from "react";
import { useGlobalContext } from "../contextApi/Context";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import DetailForm from "./DetailForm";


const Cards = () => {
  const { products } = useGlobalContext();
  const { cartProducts, setCartProducts, setQuantity, filterData } =
    useGlobalContext();
  // const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  // const handleNavigation = (id) => {
  //   navigate(`/dish-Cart:${id}`);
    
  // };

  const handleAddToCart = (id) => {
    if(isAuthenticated){
      setCartProducts((prev) => {
        if (!prev.includes(id)) {
          console.log("Previous cart products:", prev);
          console.log("Adding product id:", id);
          const updatedCart = [...prev, id];
          console.log("Updated cart products:", updatedCart);
          return updatedCart;
        } else {
          console.log("Product id already in cart:", id);
          return prev;
        }
      });
      }else{
  
          alert('Please Login or Register your Accout')
      }
    
  };
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="text-white p-4 flex justify-center md:justify-between items-center gap-6 mt-4 flex-wrap md:px-10">
      {products.map((items) => (
        <div
          className="h-96 w-72 bg-slate-100 rounded-md overflow-hidden hover:scale-110"
          key={items.id}
        >
          <div
            className="w-full h-56 text-black hover:cursor-pointer"
            
          >
            <img
              src={items.images[0]}
              alt={items.dish_name}
              className="h-full w-full"
            />
          </div>
          <p className="text-lg font-semibold text-black px-4">
            {items.dish_name}
          </p>
          <p className="text-md font-base text-black px-4">
            {items.description}
          </p>
          <div className="px-4 flex justify-between items-center  text-black">
            <p className="text-black font-bold">₹ {items.price}</p>
            <p>
              <StarIcon sx={{ color: "gold" }} /> {items.rating}
            </p>
          </div>
          <div className="w-full mb-4 px-4  ">
            <button
              text="button"
              onClick={() => handleAddToCart(items.id)}
              className="h-12 w-full rounded-md bg-[#0ab47f] font-bold hover:bg-[#2d8368]"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cards;
