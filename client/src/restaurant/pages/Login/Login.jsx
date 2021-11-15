import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import Button from '../../../global/components/Button/Button';
import { setCurrentPage } from '../../../global/redux/currentpage/currentPage.action';
import {ReactComponent as Google} from '../../../assets/google.svg';
import './Login.scss'
import { useHistory } from 'react-router';
const RestaurantLogin = () => {
  const dispatch = useDispatch();
  const history=useHistory();
  useEffect(() => {
    dispatch(setCurrentPage("Login"));
    return () => {
    }
  }, [dispatch])

  const LoginWithGoogle=()=>{
    history.push('/auth/partner/google') 
    window.location.reload();
  }

  return (
    <>
      <div className="restaurantlogin">
        <div className='restaurantlogin__content'></div>
        <div className="restaurantlogin__details">
          <div onClick={LoginWithGoogle}><Button type="primary" config="orderpayment"><Google/>&nbsp;&nbsp;&nbsp;Login with Google</Button></div>
          <div>Or</div>
          <div>Authenticate with Email & Password</div>
          <div className="restaurantlogin__details--inputContainer"><input type='email' placeholder='Enter Email'/></div>
          <div className="restaurantlogin__details--inputContainer"><input type='password' placeholder='Enter Password'/></div>
          <div className="restaurantlogin__details-login"><span>Login</span></div>
        </div>
      </div>
    </>
  )
}

export default RestaurantLogin
