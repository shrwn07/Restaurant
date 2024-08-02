import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../contextApi/Context'
import Address from './Address'
import Logo from '../Assets/tomato-logo.png'

const Wallet = () => {
    const {total} = useGlobalContext()
    const [myAdd,setMyAdd]=useState(null);
    const navigate = useNavigate()
    // const {plotNo,landmark,city,state,address} = myAdd;
    const [payNow,setPayNow] = useState(false);
    useEffect(()=>{
        const address = localStorage.getItem('obj')
        if (address) {
            const myAddress = JSON.parse(address);
            setMyAdd(myAddress);
          }
console.log(total)
    },[total])

    const payNowHandler =() =>{
        setPayNow(true)
    }
  return (
    <div className='wallet h-screen w-full mt-5 flex flex-col justify-center  md:flex-row gap-4'>
    {payNow?(<div className=''>
        <p className='text-white text-4xl'>Your Balance: ₹ { 5000 - total}</p>
        <p className='text-white text-6xl font-[cursive] mt-16'>Thank you</p><button onClick={()=> navigate('/')} className='bg-[#0ab47f] p-4 text-white font-bold mt-16 rounded-md'>Shop More</button>
        
    </div>):(
        <>
        <div className='  '  >
            <p className='text-3xl font-bold text-white'>Your Balance: ₹ 5000</p>
            <p className='text-2xl font-semibold text-white mt-7'>Total Price : ₹ {total}</p>
        </div>
        <div className='flex flex-col'>
        <div className='address'>
        
            <p>{myAdd?.plot}</p>
            <p>{myAdd?.landmark}</p>
            <p>{myAdd?.city}</p>
            <p>{myAdd?.state}</p>
            <p>{myAdd?.address}</p>
        </div>
        <button onClick={payNowHandler} className='bg-white px-3 py-2 font-semibold rounded-md mt-10'>Pay Now</button>
        </div>
        </>
    )}
        <img src={Logo} alt='logo' className='h-96'/>
    </div>
  )
}

export default Wallet