import React from 'react'
import './Dashboard.scss'
import {ReactComponent as Coin} from '../../../assets/Coin.svg'
import {ReactComponent as Order} from '../../../assets/Order.svg'
import {ReactComponent as Customer} from '../../../assets/Customer.svg'
import {ReactComponent as ArrowUp} from '../../../assets/Arrow-Up.svg'
import {ReactComponent as ArrowDown} from '../../../assets/Arrow-Down.svg'
// import {ReactComponent as Option} from '../../../assets/Option.svg'
// import Button from '../../components/Button/Button'
// import GhostButton from '../../components/GhostButton/GhostButton'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__section">
                <div className="dashboard__section-item">
                    <div className="dashboard__part">
                        <div className="dashboard__part-icon"><Coin/></div>
                        <div className="dashboard__part-stat dashboard__part-stat-1">+32.40% <span><ArrowUp/></span></div>
                    </div>
                    <div className="dashboard__part"><div className="dashboard__part-number">$10,243.00</div></div>
                    <div className="dashboard__part"><div className="dashboard__part-title">Total Revenue</div></div>
                </div>

                <div className="dashboard__section-item">
                    <div className="dashboard__part">
                            <div className="dashboard__part-icon"><Order/></div>
                            <div className="dashboard__part-stat dashboard__part-stat-2">-12.40% <span><ArrowDown/></span></div>
                    </div>
                    <div className="dashboard__part"><div className="dashboard__part-number">23,456</div></div>
                    <div className="dashboard__part"><div className="dashboard__part-title">Total Dish Ordered</div></div>
                </div>

                <div className="dashboard__section-item">
                    <div className="dashboard__part">
                            <div className="dashboard__part-icon"><Customer/></div>
                            <div className="dashboard__part-stat dashboard__part-stat-3">+2.40% <span><ArrowUp/></span></div>
                    </div>
                    <div className="dashboard__part"><div className="dashboard__part-number">1,234</div></div>
                    <div className="dashboard__part"><div className="dashboard__part-title">Total Customer</div></div>
                </div>
            </div>
            {/* <div className="dashboard__report">
                <div className="dashboard__report-header">
                    <div className="dashboard__report-header--title">Order Report</div>
                    <div className="dashboard__report-header--filter">
                        <GhostButton></GhostButton>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Dashboard
