import React from 'react'
import "./Sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReportIcon from '@mui/icons-material/Report';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MailIcon from '@mui/icons-material/Mail';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className='link'>
                            <li className="sidebarListItem active">
                                <LineStyleIcon className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='link'>
                            <li className="sidebarListItem ">
                                <PersonOutlineIcon className='sidebarIcon' />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <StorefrontIcon className='sidebarIcon' />
                            Products
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartIcon className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <MailIcon className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <HomeRepairServiceIcon className='sidebarIcon' />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportIcon className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
