import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import Button from '../../../global/components/Button/Button';
import { setCurrentPage } from '../../../global/redux/currentpage/currentPage.action';
import {ReactComponent as Google} from '../../../assets/google.svg';
import './Login.scss'
import { useHistory } from 'react-router';
const CustomerLogin = () => {
  const dispatch = useDispatch();
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const history=useHistory();
  useEffect(() => {
    dispatch(setCurrentPage("Login"));
    return () => {
    }
  }, [dispatch])
  const Submit=()=>{
    
  }

  const LoginWithGoogle=()=>{
    history.push('/auth/customer/google') 
    window.location.reload();
  }
  return (
    <>
      <div className="customerlogin">
        <div className='customerlogin__content'></div>
        <div className="customerlogin__details">
          <div onClick={LoginWithGoogle}><Button type="primary" config="orderpayment"><Google/>&nbsp;&nbsp;&nbsp;Login with Google</Button></div>
          <div>Or</div>
          <div>Authenticate with Email & Password</div>
          <div className="customerlogin__details--inputContainer"><input type='email' placeholder='Enter Email' value={username} onChange={(e)=>setUsername(e.target.value)}/></div>
          <div className="customerlogin__details--inputContainer"><input type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/></div>
          <div className="customerlogin__details-login" onClick={Submit}><span>Login</span></div>
          <div className="customerlogin__details-partner" onClick={()=>history.push('/restaurant')}><Button type="primary" config="partner">Login as Restaurant Partner</Button></div>
        </div>
      </div>
    </>
  )
}

export default CustomerLogin
