import React, { useEffect } from 'react'
import styled,{css} from 'styled-components'
import {useDispatch, useSelector} from 'react-redux';
import { setdishsection } from '../../../global/redux/dishes/dishes.action'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { CurrentRestaurant, getRestaurants } from '../../../global/redux/restaurant/restaurant.actions';
import './Home.scss'
import Dishes from '../../components/Dishes/Dishes';
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
const StyledItem=styled.div`
    position: relative;
    cursor:pointer;
    ${props=>props.section===props.name && PseudoClass} 
    ${props=>props.section==="MainCourse" && `margin-right:1.25rem`} 
`
const HomeCustomer = () => {
    const dispatch = useDispatch();
    const currentSection=useSelector((state)=>state.category?.dishsection);
    const restaurants=useSelector((state)=>state.restaurants);
    const dishes=restaurants?.dishes;
    useEffect(() => {
        dispatch(getRestaurants());
        return () => {
            
        }
    }, [dispatch])

    const fetchMenu=({id,address,name,location})=>{
        dispatch(CurrentRestaurant({id,address,name,location}));
        dispatch(setdishsection("MainCourse"));
    }
    return (
        <div className="homeCustomer">
            {
                currentSection!==null &&<div className="homeCustomer__section">
                <StyledItem section={currentSection} name="MainCourse" onClick={()=>dispatch(setdishsection("MainCourse"))}>Main Course</StyledItem>
                <StyledItem section={currentSection} name="sideDish" onClick={()=>dispatch(setdishsection("sideDish"))}>Side Dish</StyledItem>
                <StyledItem section={currentSection} name="soup" onClick={()=>dispatch(setdishsection("soup"))}>Soup</StyledItem>
                <StyledItem section={currentSection} name="drink" onClick={()=>dispatch(setdishsection("drink"))}>Drink</StyledItem>
                <StyledItem section={currentSection} name="appetizer" onClick={()=>dispatch(setdishsection("appetizer"))}>Appetizer</StyledItem>
                <StyledItem section={currentSection} name="dessert" onClick={()=>dispatch(setdishsection("dessert"))}>Dessert</StyledItem>
            </div>
            }
            <div className="homeCustomer__heading heading-2">{currentSection==null ? "Choose Restaurant" : "Choose Dishes"}</div>
            <div className="homeCustomer__overflowfix">
                <div className="homeCustomer__dishes">
                    {currentSection==null ? restaurants && restaurants?.restur?.map((restaurant,index)=>{
                        const {RestaurantAddress,RestaurantName,location,_id,image}=restaurant;
                        return <RestaurantCard fetchMenu={fetchMenu} key={_id} id={_id} image={image} address={RestaurantAddress} name={RestaurantName} location={location}/>
                    })
                    :
                    dishes.map((dish,index)=>{
                        if(dish.name===currentSection){
                            return dish.dishes.map((receipe)=>{
                                return <Dishes key={index} dish={receipe}/>
                            })
                        }
                        else return null
                    })
                    
                }
                </div>
            </div>                
        </div>
    )
}

export default HomeCustomer
