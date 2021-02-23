import { Avatar } from '@material-ui/core'
import React from 'react'
import './HeaderOptions.css'

function HeaderOptions({Icon, title, avatar, onClick}) {
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && <Avatar className="headerOption__icon" />}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
