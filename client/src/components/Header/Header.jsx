import React,{useState,useEffect} from 'react'
import './Header.scss'
import moment from 'moment'
import {ReactComponent as Search} from '../../assets/search.svg'
import {useDispatch, useSelector} from 'react-redux'
import { SearchFood } from '../../redux/Home/home.actions'
import SearchItem from '../SearchItem/SearchItem'
import styled,{css} from 'styled-components';
const Header = ({page}) => {
    const [inputdata,setinputdata]=useState('');
    const time= moment().format('dddd, DD MMMM YYYY');  
    const current= useSelector((state=>state.restaurants.current));
    const dispatch = useDispatch();
    useEffect(() => {
        const timer=setTimeout(() => {
            if(inputdata.length>0){
                dispatch(SearchFood(inputdata))
            }
        }, 500);
        return () => {
            clearTimeout(timer);
        }
    }, [inputdata,dispatch])

    const searchdata=useSelector((state)=>state.dish.search);
    const auth=useSelector((state)=>state.auth.user);
    const [authChanged,setauthChanged]=useState({
        authstate:"Logged Out!",
        bool:false
    });
    useEffect(() => {
        if(auth){
            setauthChanged({authstate:"Logged In!",bool:true});
            setTimeout(() => {
                setauthChanged({authstate:"",bool:false});
            }, 5000);
        }
        else {
            setauthChanged({authstate:"Logged Out!",bool:true});
            setTimeout(() => {
                setauthChanged({authstate:"",bool:false});
            }, 5000);
        }
        return () => {
            
        }
    }, [auth])

    const custcss=css`
    display:none;
    ${console.log("called")}
    `
    const StyledFlash=styled.div`
        background-color: #ea7c69;
        padding: 1rem 1.5rem;
        animation: authstate 5s ease;
        position: absolute;
        left: 40%;
        top: 25%;
        ${props=>!props.authChanged && custcss}
        @keyframes authstate {
            0% {
              transform: translateY(-7rem);
            }
            50% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-7rem);
            }
          }          
    `
    return (
        <div className='header'>
            <StyledFlash authChanged={authChanged.bool} className="header__flash">{authChanged.authstate}</StyledFlash>
            <div className="header__left">
                <div className="header__left-title heading-1">{page==="Home" ? (current!==null ? current.name: "Burgurly" ) : page}</div>
                <div className="header__left-time">{time}</div>
            </div>
            {page==="Home" && 
            <div className={`${inputdata && "header__inputContainer-flat"} header__inputContainer`}>
                <Search/>
                <input onChange={(e)=>setinputdata(e.target.value)} value={inputdata} placeholder='Search for food, coffee, etc'/>
                {!!searchdata.length && <div className="header__inputContainer-suggestions">
                    {searchdata.map((item,index)=>{
                        return <SearchItem key={index} item={item}/>
                    })}
                </div>}
            </div>
}
        </div>
    )
}

export default Header
