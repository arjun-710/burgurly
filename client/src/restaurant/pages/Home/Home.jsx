import React from 'react'
import styled,{css} from 'styled-components'
import {useDispatch, useSelector} from 'react-redux';
import MenuCard from '../../components/MenuCard/MenuCard';
import { setdishsection } from '../../../global/redux/dishes/dishes.action';
import './Home.scss';
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
const HomePartner = () => {
    const dispatch = useDispatch();
    const currentSection=useSelector((state)=>state.category?.dishsection);
    // const dishes=useSelector((state)=>state.dish.dish);
    const user=useSelector((state)=>state.auth?.user);
    const category=useSelector((state)=>state.category?.dishes);
    return (
        <div className="homePartner">
            <div className="homePartner__section">
                <StyledItem section={currentSection} name="MainCourse" onClick={()=>dispatch(setdishsection("MainCourse"))}>Main Course</StyledItem>
                <StyledItem section={currentSection} name="sideDish" onClick={()=>dispatch(setdishsection("sideDish"))}>Side Dish</StyledItem>
                <StyledItem section={currentSection} name="soup" onClick={()=>dispatch(setdishsection("soup"))}>Soup</StyledItem>
                <StyledItem section={currentSection} name="drink" onClick={()=>dispatch(setdishsection("drink"))}>Drink</StyledItem>
                <StyledItem section={currentSection} name="appetizer" onClick={()=>dispatch(setdishsection("appetizer"))}>Appetizer</StyledItem>
                <StyledItem section={currentSection} name="dessert" onClick={()=>dispatch(setdishsection("dessert"))}>Dessert</StyledItem>
            </div>
            <div className="homePartner__heading heading-2">Avaialble Dishes</div>
            <div className="homePartner__overflowfix">
                <div className={`${user?.type==='Partner' && 'homePartner__dishes--partner'} homePartner__dishes`}>
                {category?.map((dishes)=>{
                  return dishes?.dishes?.map((dish)=>{
                    const {name,image,price,stock,_id}=dish;
                  return <MenuCard key={_id} title={name} id={_id} src={image} price={price} stock={stock} currentSection={currentSection} nodelete={true}/>
                  })
                })}
                </div>
            </div>

            
        </div>
    )
}

export default HomePartner
