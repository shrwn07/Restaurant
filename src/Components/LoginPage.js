import './style.css'
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function LoginPage(){
  

  const handleLogin= (e) =>{
    e.preventDefault();
    
  }
return(
  <>
  <div className='login-page h-[90.7vh]  w-full flex justify-end items-center pr-28'>
    <div className='form-container h-2/4 w-1/3  flex flex-col items-center justify-center p-4 rounded-md '>
        <p className='text-3xl font-bold text-center text-white'>Login</p>
    <form className='flex flex-col items-center justify-center h-full w-full gap-4 ' onSubmit={handleLogin}>

    <div className='w-full flex justify-between items-center'>
    <label className='text-lg font-bold text-white'>Username:</label>
    <input type='text' className='h-8 w-72 rounded-md'/>
    </div>
    <div className='w-full flex justify-between items-center'>
    <label className='text-lg font-bold text-white'>Password:</label>
    <input type='text' className='h-8 w-72 rounded-md'/>
    </div>



      <p className='text-white font-semibold'>Need to register? <Link to='/register' className='text-white font-bold'>Register</Link> </p>
        <button type='submit' className='px-4 py-2 bg-[#3288bd] text-bold text-white rounded-md'>Submit</button>
    </form>
    </div>

  </div>
  </>
)}

export default LoginPage
