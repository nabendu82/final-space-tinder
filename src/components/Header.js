import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'

const Header = () => {

    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/en/7/7c/Final_Space_Logo.png" alt="header" />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header