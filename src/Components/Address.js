import React, { useEffect } from 'react';
import Cart from './Cart';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../contextApi/Context';
import Image from '../Assets/img.png';
import './style.css';

const Address = () => {
  const navigate = useNavigate();
  const { checkoutBtn } = useGlobalContext();
  const location = useLocation();

  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);
    localStorage.setItem('addressData',JSON.stringify(obj))
    alert('thank you for your address')
  };

  return (
    <div className='w-full h-full p-4  flex flex-col md:flex-row'>
      <div className='md:w-9/12 flex justify-center md:gap-10 '>
        <div className='w-full  flex flex-col justify-center items-center'>
          <p className='text-3xl px-5 mt-5 font-bold text-white'>Address</p>
          <form onSubmit={handleForm} className='p-4 w-full  flex flex-col gap-3 mt-5 text-white '>
            <label htmlFor="plot">Plot No:</label>
            <input type="text" name='plot' id="plot" className='w-full h-8 rounded-sm text-black px-2'/>
            <label htmlFor="landmark">Landmark:</label>
            <input type="text" name='landmark' id="landmark" className='w-full h-8 rounded-sm text-black px-2'/>
            <label htmlFor="city">City:</label>
            <input type="text" name='city' id="city" className='w-full h-8 rounded-sm text-black px-2'/>
            <label htmlFor="state">State:</label>
            <input type="text" name='state' id="state" className='w-full h-8 rounded-sm text-black px-2'/>
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" className='h-40 w-full rounded-sm text-black p-2' placeholder='Detailed address'></textarea>
            <button type='submit' className='w-full h-10 rounded-md bg-[#0ab47f]'>Submit</button>
          </form>
        </div>
        <img src={Image} alt='img' className='w-2/5 h-auto boy-girl hidden md:block' />
      </div>
      <div className='md:w-3/12 h-56 p-4 '>
        <Cart />
      </div>
    </div>
  );
};

export default Address;
