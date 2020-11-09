import React from 'react'
import Icon from '@material-ui/core/Icon'
import './Header.css'

function Header() {
    return (
        <div className="header__container">
            <form>
                <Icon style={{ fontSize: 30 }} className="icon location">location_on</Icon>
                <input type="text" name="" id="" placeholder="Search your city.." />
                <Icon style={{ fontSize: 30 }} className="icon search">search</Icon>
            </form>
        </div>
    )
}

export default Header
