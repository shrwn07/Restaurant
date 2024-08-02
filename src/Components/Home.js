import { Box } from "@mui/material";
import Cards from "./Cards";
import "./style.css";
import Cart from "./Cart";
import { useGlobalContext } from "../contextApi/Context";
import ScrollToElementButton from "./ScrollToElementButton";

function Home() {
  const { cartInProducts } = useGlobalContext();
  return (
    <div className="md:flex w-screen ">
      <div className="w-full">
        <Box className="hero flex justify-end items-center pr-28 ">
          <Box className="tag-line md:text-3xl text-base text-white absolute top-80 right-10 md:top-0 font-bold h-48 w-2/5 md:w-1/3 md:relative">
            <span className="absolute top-12">Crafted with Passion,</span>
            <br />
            <span className="absolute top-24 right-0">Served with Love</span>
          </Box>
        </Box>

        <Cards />
      </div>
      {cartInProducts.length !== 0 && (
        <div className=" md:h-screen mt-8 md:w-3/12 text-white px-5 " id="cart">
       <Cart />
      </div>
      )}
      <ScrollToElementButton id={'cart'}/>
    </div>
  );
}
export default Home;
