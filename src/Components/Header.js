import { Box } from "@mui/material";
import Logo from "../Assets/tomato-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import {  Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../contextApi/Context";

function Header() {
  // const loginNavigation =  useNavigate();
  // const registrationNavigation = useNavigate();
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

    const {products,filterData,query,setQuery,setFilterData} = useGlobalContext();
    

useEffect(()=>{
  if(products) setFilterData(products);

  if(query){
    const smLtrQuery = query.toLowerCase();
    const filterDish = products.filter((dish)=> dish.dish_name.toLowerCase().includes(smLtrQuery));

    setFilterData(filterDish)
  }else{
    setFilterData(products);
  }

},[query, products,filterData,setFilterData])
  return (
    <Box className="h-16  w-screen flex justify-between items-center md:px-16">
      <Link className="h-14" to="/">
        <img src={Logo} alt="logo" className="h-full" />
      </Link>
      <Box className="flex justify-center items-center ">
        <input
          className="bg-white h-10 w-32 md:w-72 rounded-md border-2 px-2 "
          placeholder="Search your favourite dish"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />
        
      </Box>
      <Box className="flex justify-end  gap-2 items-center w-80">
        {isAuthenticated && <div className="text-white font-md font-semibold"> Welcome! {user.email}</div>}
        {isAuthenticated ? (
          <button
            onClick={() => logout({ returnT0: window.location.origin })}
            className="text-white font-semibold bg-[#0ab47f] h-10 w-28  px-5 md:px-4 rounded-md"
          >
            Log out
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="text-white font-semibold bg-[#0ab47f] h-10 w-28 px-5 md:px-4 rounded-md"
          >
            Log In
          </button>
        )}

        {/* <button onClick = {handleRegistrationBtn} className='text-white font-semibold bg-[#0ab47f] h-10 px-1 md:px-4 rounded-md'>Registration</button> */}
      </Box>
    </Box>
  );
}

export default Header;
