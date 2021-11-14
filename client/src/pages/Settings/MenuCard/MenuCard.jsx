import React,{useState} from 'react'
import './MenuCard.scss'
import {ReactComponent as Edit} from '../../../assets/Edit.svg';
import {ReactComponent as Trash} from '../../../assets/Trash.svg';
import MenuEditForm from '../MenuEditForm/MenuEditForm'
import { Dialog } from '@material-ui/core'
const MenuCard = (props) => {
    const [open,setopen]=useState(false);
    const handledialogactions=()=>{
        setopen(false);
    }
    return (
        <>
        <div className={`${props.formCalled && 'menuCard--dark'} menuCard`}>
            {!props.nodelete && <div className="menuCard__trash" onClick={()=>props.ondelete(props.id)}><Trash/></div>}
            <div className="menuCard__image"><img src={props.src} alt={props.title} /></div>
            <div className="menuCard__description">
                <div className="menuCard__description-heading menuCard-text">{props.title}</div>
                <div className="menuCard__description-price menuCard-text"><span className="u-margin-right-sm">$</span>{props.price}</div>
                <div className="menuCard__description-available menuCard-text">{props.stock} available in stock</div>
            </div>
            {!props.formCalled && <div className="menuCard__Edit" onClick={()=>setopen(true)}><Edit/>&nbsp;&nbsp;Edit Dish</div>}
        </div>
        {open && <Dialog open={open} onClose={()=>setopen(false)} >
        <MenuEditForm handleClose={handledialogactions} currentSection={props.currentSection} title={props.title} stock={props.stock} src={props.src} price={props.price}/>
        </Dialog>}
        </>
    )
}

export default MenuCard
