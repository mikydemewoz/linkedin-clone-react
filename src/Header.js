import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import HeaderOptions from './HeaderOptions';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {

    const dispatch = useDispatch()
    const logoutApp = () => {
        dispatch(logout)
        auth.signOut()
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>
            <div className="header_right">
                <HeaderOptions title="Home" Icon={HomeIcon} />
                <HeaderOptions title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
                <HeaderOptions title="Messaging" Icon={ChatIcon} />
                <HeaderOptions title="Notifications" Icon={NotificationsIcon} />
                <HeaderOptions onClick={logoutApp} title="Me" avatar="yes" />
            </div>
        </div>
    )
}

export default Header
