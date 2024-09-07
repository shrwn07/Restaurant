import { Box } from "@mui/material";
import Cards from "./Cards";
import "./style.css";
import Cart from "./Cart";
import { useGlobalContext } from "../contextApi/Context";
import ScrollToElementButton from "./ScrollToElementButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
  const { cartInProducts, page, setPage,} = useGlobalContext();
  const incresePage = () =>{
    setPage((prev)=>prev+1);
  }
  const decresePage = () =>{
    setPage((prev)=>prev-1);
  }
  return (
    <div className= {cartInProducts.length !== 0?"md:flex md:w-9/12 ":"md:flex md:w-full "} >
      <div className="w-full">
        <Box className="hero flex justify-end items-center pr-28 ">
          <Box className="tag-line md:text-3xl text-base text-white absolute top-72 right-10 md:top-0 font-bold h-48 w-2/5 md:w-1/3 md:relative">
            <span className="absolute top-12">Crafted with Passion,</span>
            <br />
            <span className="absolute top-24 right-0">Served with Love</span>
          </Box>
        </Box>

        <Cards />
        <div className="flex justify-center">
        <button onClick={decresePage} className="h-10 w-10 bg-[#0ab47f] text-white rounded-md" disabled={page === 1}>
          <ArrowBackIcon />
        </button>
        <div className="pageNumber h-10 w-10 bg-[#0ab47f] flex justify-center items-center rounded-md text-white text-bold mx-6">{page}</div>
        <button onClick={incresePage} className="h-10 w-10 bg-[#0ab47f] text-white rounded-md" disabled={page === 7}>
          <ArrowForwardIcon />
        </button>
        </div>
      </div>
      {cartInProducts.length !== 0 && (
        <div className=" md:h-screen  mt-8 md:w-3/12 text-white px-5 md:fixed md:top-20 md:right-0" id="cart">
       <Cart />
      </div>
      )}
      <ScrollToElementButton id={'cart'}/>

      
    </div>
  );
}
export default Home;
