import './App.scss';
import Header from './global/pages/Header/Header';
import Sidebar from './global/pages/Sidebar/Sidebar.jsx';
import Order from './global/pages/Order/Order.jsx';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { fetchUser } from './global/redux/auth/auth.action';
import { setCurrentPage } from './global/redux/currentpage/currentPage.action';
import Dashboard from './global/pages/Dashboard/Dashboard.jsx';
import CustomerLogin from './customer/pages/Login/Login';
import RestaurantLogin from './restaurant/pages/Login/Login';
import { Redirect, Route, Switch } from 'react-router';
import Settings from './restaurant/pages/Settings/Settings.jsx';
import HomePartner from './restaurant/pages/Home/Home.jsx';
import HomeCustomer from './customer/pages/Home/Home.jsx';
function App() {
  const dispatch = useDispatch();
  const user=useSelector((state)=>state.auth?.user);
  const currentPartnerInfo = useSelector((state)=> state.restaurants?.resInfo);
 
  useEffect(() => {
    if(user==null){
      dispatch(fetchUser());
    }
    dispatch(setCurrentPage("Home"));  
    return () => {
      
    }
  }, [dispatch,user])

  const TypeCustomer=()=>{
    return(
      <>
      <Route exact path='/home'>
          {
            currentPage!=='Login' && <Sidebar/>
          }
      </Route>
      <div className="app__content">
      <Route exact path='/home'>
        {currentPage==="Home" && 
        <>
          <Header page="Home"/>
          <HomeCustomer/>
        </> 
        }
      </Route>
      <Route exact path='/dashboard'>
        {currentPage==="Dashboard" && 
          <>
          <Header page="Dashboard"/>
          <Dashboard/>
          </>
        }
     </Route>
     <Route exact path='/settings'>
      {currentPage==="Settings" && 
        <>
        <Header page="Settings"/>
        <Settings/>
        </>
      }
     </Route>
      </div>
      {currentPage==="Home" && <Order/>}
      </>
    )
  }

  const currentPage=useSelector((state)=>state.page.page);
  return (
    <div className="app">
      {!user && <Redirect to='/'/>}
      <Switch>
        {
          user?.type==="Customer" && <Route exact path='/' render={()=>user ? <Redirect to='/home'/> : <Redirect to='/'/>} />
        }
        {
          user?.type==="Partner" && <Route exact path='/' render={()=>user?<Redirect to='/restaurant/partner'/>: <Redirect to='/restaurant'/>} />
        }
      
      <Route exact path='/' component={CustomerLogin}/>
      <Route exact path='/restaurant' component={RestaurantLogin}/>
      {user?.type==='Customer' && <TypeCustomer/>}
      {user?.type==='Partner' && <>
          <Route exact path='/restaurant/partner'>
          {
            currentPage!=='Login' && <Sidebar/>
          }
          <div className="app__content">            
          {currentPage==="Home" && 
              <>
              <Header page="Home"/>
              <HomePartner/>
              </> 
        }
        {currentPage==="Dashboard" && 
          <>
          <Header page="Dashboard"/>
          <Dashboard/>
          </>
        }
        {currentPage==="Settings" && 
          <>
          <Header page="Settings"/>
          <Settings currentPartnerInfo={currentPartnerInfo}/>
          </>
        }
          </div>
          {currentPage==="Home" && <Order/>}
          </Route>
      </>}
      
      </Switch>
      
    </div>
  );
}

export default App;
