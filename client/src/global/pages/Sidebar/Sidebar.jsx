import React from 'react'
import './Sidebar.scss'
import {ReactComponent as Logo} from '../../../assets/Logo.svg'
import {ReactComponent as Home} from '../../../assets/Home.svg'
import {ReactComponent as Discount} from '../../../assets/Discount.svg'
import {ReactComponent as Dashboard} from '../../../assets/Dashboard.svg'
import {ReactComponent as Message} from '../../../assets/Message.svg'
import {ReactComponent as Notification} from '../../../assets/Notification.svg'
import {ReactComponent as Setting} from '../../../assets/Setting.svg'
import {ReactComponent as Logout} from '../../../assets/logout.svg'
import {ReactComponent as Login} from '../../../assets/login.svg'
import SidebarItem from '../../components/SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
const Sidebar = () => {
    const user=useSelector((state)=>state.auth.user);
    
    const arraylist=[{item:<Home/>, name:"Home"},
                    {item:<Discount/>,name:"Discounts"},
                    {item:<Dashboard/>,name:"Dashboard"},
                    {item:<Message/>,name:"Messages"},
                    {item:<Notification/>,name:"Notifications"},
                    {item:<Setting/>,name:"Settings"},
                    {item:user ?<Logout/>:<Login/>,name:"auth"},
                ];
    
    return (
        <div className='sidebar'>
            <div className="sidebar__brand"><Logo/></div>
            {arraylist.map((item)=>{
                return <SidebarItem key={item.name}>{item}</SidebarItem>
            })}
        </div>
    )
}

export default Sidebar
