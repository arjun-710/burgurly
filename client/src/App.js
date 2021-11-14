import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './pages/Sidebar/Sidebar';
import Order from './pages/Order/Order.jsx';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { fetchUser } from './redux/auth/auth.action';
import { setCurrentPage } from './redux/currentpage/currentPage.action';
import { setdishsection } from './redux/Home/home.actions';
import Dashboard from './pages/Dashboard/Dashboard';
import CustomerLogin from './pages/Login/Customer/CustomerLogin';
import RestaurantLogin from './pages/Login/Restaurant/RestaurantLogin.jsx';
import { Route, Switch } from 'react-router';
import Settings from './pages/Settings/Settings';
import HomePartner from './pages/Home/HomePartner/HomePartner';
import HomeCustomer from './pages/Home/HomeCustomer/HomeCustomer';
function App() {
  const dispatch = useDispatch();
  const user=useSelector((state)=>state.auth?.user);
  const type=user?.type;
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(setCurrentPage("Home"));  
    if(type==="Partner"){
      dispatch(setdishsection("MainCourse"));
    }
    return () => {
      
    }
  }, [dispatch,type])

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
      <Switch>
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
          <Settings/>
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
