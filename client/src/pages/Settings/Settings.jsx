import React,{useEffect, useState} from 'react'
import './Settings.scss';
import {ReactComponent as Business} from '../../assets/business.svg'
import {ReactComponent as Option} from '../../assets/Option.svg'
import {ReactComponent as Add} from '../../assets/Add.svg'
import Button from '../../components/Button/Button';
import styled,{css} from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/currentpage/currentPage.action';
import MenuCard from './MenuCard/MenuCard';
import { Dialog } from "@material-ui/core";
import MenuAddForm from './MenuAddForm/MenuAddForm';
import { fetchUser } from '../../redux/auth/auth.action';
import { fetchDishes } from '../../redux/dishes/dishes.action';
import axios from 'axios';

const Settings = () => {
  const [name,setName]=useState('');
  const [address,setAddress]=useState('');
  const [latitude,setLatitude]=useState('');
  const [longitude,setLongitude]=useState('');
  const [side,setSide]=useState('info');
  const [open,setopen]=useState(false);
  const category=useSelector((state)=>state.category?.dishes);
  const dispatch = useDispatch();

  const [currentSection,setCurrentSection]=useState('MainCourse');


  useEffect(() => {
    //remove this fectch User
    dispatch(fetchUser());
    dispatch(fetchDishes(currentSection));
    return () => {
      
    }
  }, [currentSection,open,dispatch])

  const StyledItem=styled.div`
    position: relative;
    font-size:1.25rem;
    cursor:pointer;
    ${props=>props.section===props.name && PseudoClass} 
    ${props=>props.section==="main course" && `margin-right:1.25rem`} 
`

const PseudoClass=css`
    color:#ea7c69;
    &::after{
        content: "";
        position: absolute;
        bottom: calc(-1rem - 2px);
        left: 0;
        width: 4rem;
        height: 3px;
        border-radius: 7px;
        background-color: #ea7c69;}
    `

  const Discard=()=>{
    setName('');
    setAddress('');
    setLatitude('');
    setLongitude('');
  }

  const FetchLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }
  const Submit=()=>{
    if(name!=='' && address!=='' && latitude!=='' && longitude!=='')
    axios.post('/api/partner/detail',{
        RestaurantName:name,
      RestaurantAddress:address,
      location:{
        type:'Point',
        coordinates:[+latitude,+longitude]
      }
    })
    .then((res)=>{
      console.log(res);
      setSide('upload')
    })
    .catch(e=>console.log(e))
    setSide('upload');
  }

  const UploadSubmit=()=>{
    dispatch(setCurrentPage('Home'));
    
  }

  const handledialogactions=()=>{
    setopen(false);
}
  const ondelete=(id)=>{
    console.log(id);
    axios.post('/api/partner/menu/delete',{
      id:id
    })

  }

  return (
    <>
      <div className="settings">
        {/* Sidebar */}
        <div className="settings__sidebar">
          <div className={`${side==='info' && 'settings__Card--clicked'} settings__Card`} onClick={()=>setSide('info')}>
            <div className="settings__Card-svg">
              <Business/>
            </div>
            <div className="settings__Card-detail">
            <div className="settings__Card-detail--heading">Restaurant Information</div>
            <div className="settings__Card-detail--subHeading">Restaurant name, address, contact no.,owner details</div>
            </div>
          </div>
          <div className={`${side==='upload' && 'settings__Card--clicked'} settings__Card`} onClick={()=>setSide('upload')}>
            <div className="settings__Card-svg">
              <Option/>
            </div>
            <div className="settings__Card-detail">
            <div className="settings__Card-detail--heading">Upload Images</div>
            <div className="settings__Card-detail--subHeading">Menu, restaurant, food images</div>
            </div>
          </div>
        </div>
        <div className="settings__form">
          {side==='info' && <>
            <div className="settings__form-heading">Restaurant Information</div>
            <div className="settings__form-details">
              <div className="settings__form-details-inputContainer"><input type='text' placeholder='Enter Restaurant Name' value={name} onChange={(e)=>setName(e.target.value)}/></div>
              <div className="settings__form-details-inputContainer"><input type='text' placeholder='Restaurant Address' value={address} onChange={(e)=>setAddress(e.target.value)}/></div>
              <div className="settings__form-details-location">
                <div className="settings__form-details-location-inputContainer"><input type='text' placeholder='Enter latitude' value={latitude} onChange={(e)=>setLatitude(e.target.value)}/></div>
                <div className="settings__form-details-location-inputContainer"><input type='text' placeholder='Enter Longitude' value={longitude} onChange={(e)=>setLongitude(e.target.value)}/></div>
              </div>
              <div className="settings__form-details-location-auto" onClick={FetchLocation}>Fetch current Location</div>
            </div>
            <div className="settings__buttons">
              <div onClick={Discard}><Button type="ghost" config="discard" color='#ea7c69'>Discard Changes</Button></div>
              <div onClick={Submit}><Button type="primary" config="save">Save Changes</Button></div>
            </div>
          </>
          }
          {
            side==='upload' && <>
              <div className="settings__form-heading">Restaurant Menu</div>
               <div className="settings__form-upload">
                <StyledItem section={currentSection} name="MainCourse" onClick={()=>setCurrentSection("MainCourse")}>Main Course</StyledItem>
                <StyledItem section={currentSection} name="sideDish" onClick={()=>setCurrentSection("sideDish")}>Side Dish</StyledItem>
                <StyledItem section={currentSection} name="soup" onClick={()=>setCurrentSection("soup")}>Soup</StyledItem>
                <StyledItem section={currentSection} name="drink" onClick={()=>setCurrentSection("drink")}>Drink</StyledItem>
                <StyledItem section={currentSection} name="appetizer" onClick={()=>(setCurrentSection("appetizer"))}>Appetizer</StyledItem>
                <StyledItem section={currentSection} name="dessert" onClick={()=>setCurrentSection("dessert")}>Dessert</StyledItem>
              </div>
              <div className="menuContainer">
                <div className="menuContainer__addCard" onClick={()=>setopen(true)}>
                  <Add/>
                  <div className="menuContainer__addCard-text">Add new dish</div>
                </div>
                {category?.map((dishes)=>{
                  return dishes?.dishes?.map((dish)=>{
                    const {name,image,price,stock,_id}=dish;
                  return <MenuCard title={name} id={_id} src={image} price={price} stock={stock} currentSection={currentSection} ondelete={ondelete}/>
                  })
                })}
                
              </div>
              <div className="settings__buttons">
                <div onClick={UploadSubmit}><Button type="primary" config="save">Save Changes</Button></div>
              </div>            
            </>
          }
        </div>
      </div>
      {open && <Dialog open={open} onClose={()=>setopen(false)} >
      <MenuAddForm handleClose={handledialogactions} currentSection={currentSection}/>
    </Dialog>}
    </>
  )
}

export default Settings
