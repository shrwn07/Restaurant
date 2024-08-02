import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contextApi/Context";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const {
    cartInProducts,
    setCartInProducts,
    total,
    setTotal,
    checkoutBtn,
    setCheckOutBtn,
    setCartProducts
  } = useGlobalContext();
  const navigate = useNavigate();
  const navigateAdd = useNavigate();

  const { isAuthenticated } = useAuth0();

  console.log("Cart In Products:", cartInProducts); // Debugging line

  // Decrement item quantity handler
  const decrementItemHandler = (id) => {
    setCartInProducts((prev) => {
      const quantity = cartInProducts.find((item) => item.id === id);
      if (quantity.quantity < 2) {
        return prev.filter((item) => item.id !== id);
      }
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  // Increment item quantity handler
  const incrementItemHandler = (id) => {
    setCartInProducts((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const handleCheckOutbtn = () => {
    setCheckOutBtn(true);
    navigate("/checkout");
  };

  useEffect(() => {
    const newTotal = cartInProducts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartInProducts, setTotal]);

  // if(checkoutBtn){
  //   return <
  // }
  const payNowHandler= () =>{
    navigate('/wallet')
    setCartInProducts([])
    setCartProducts([])
  }

  return (
    <>
      <p className="text-xl text-white font-bold ">My Cart</p>
      <div className="cart mt-2">
        {cartInProducts.length > 0 ? (
          cartInProducts.map((item) => (
            <div key={item.id} className="flex md:mt-4 h-28 gap-5">
              <div className="h-20 w-32 text-white">
                <img
                  src={item.images[0]}
                  alt={item.dish_name}
                  className="h-full w-full"
                />
                <p className="text-xl mt-3">
                  {" "}
                  Price: ₹ {item.price * item.quantity}
                </p>
              </div>
              <div className="text-xl flex flex-col text-white">
                {item.dish_name}
                <p className="text-base">
                  {item.description.substring(0, 15)}...
                </p>
                {checkoutBtn ? (
                  <div className="flex gap-3 mt-3">
                  
                    <span>{item.quantity}</span>
                    
                  </div>
                ) : (
                  <div className="flex gap-3 mt-3">
                    <button
                      onClick={() => decrementItemHandler(item.id)}
                      className="h-8 w-8 rounded-md flex justify-center items-center font-bold"
                      style={{
                        backgroundColor:
                          item.quantity === 1 ? "#EE4E4E" : "#0ab47f",
                      }}
                    >
                      {item.quantity === 1 ? <DeleteIcon /> : "-"}
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => incrementItemHandler(item.id)}
                      className="h-8 w-8 bg-[#0ab47f] rounded-md flex justify-center items-center font-bold"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
      <div className="flex justify-between p-2 items-center mt-4 text-white text-lg font-bold">
        Total Price: ₹ {total}
        {!checkoutBtn ? (
          <button
            onClick={handleCheckOutbtn}
            className="p-2 bg-[#0ab47f] rounded-md flex justify-center items-center"
          >
            Check Out
          </button>
        ) : (
          <button onClick={payNowHandler} className="p-2 bg-[#0ab47f] rounded-md flex justify-center items-center">
            Pay Now
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
