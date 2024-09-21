import React from 'react'
import "./Topbar.css"
import avatar from '../../images/image-avatar.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>Magnum-Admin</span>

                </div>
                <div className="topRight">
                    <div className="topIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topIconContainer">
                        <LanguageIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topIconContainer">
                        <SettingsIcon />
                    </div>
                    <img src={avatar} alt="avatar" className='topAvatar' />
                </div>
            </div>
        </div>
    )
}
