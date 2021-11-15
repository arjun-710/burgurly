import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../global/redux/currentpage/currentPage.action';
import {useHistory} from 'react-router-dom'
import './SidebarItem.scss'
const SidebarItem = ({children}) => {
    const dispatch = useDispatch();
    const page=useSelector((state)=>state.page.page);
    const user=useSelector((state)=>state.auth.user);
    const history=useHistory();
    useEffect(() => {
        if(page==="auth"){
            if(user){
                history.push('/api/logout');
                window.location.reload();
            }
            else{
                history.push('/auth/google');
                window.location.reload();
            }
        }
        return () => {
            
        }
    }, [page,user,history])
    return (
        <>
            <div onClick={()=>{
                dispatch(setCurrentPage(children.name));
                }} className={`${page===children.name &&'sidebar__item--clicked'} sidebar__item`}><div className={`${page===children.name &&'svg-wrapper--clicked'} svg-wrapper`}>{children.item}</div></div>
        </>
    )
}

export default SidebarItem
