import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const style = {
    padding: '7px 15px',
    borderRadius: "11px",
    color: 'white',
    fontWeight: '500'
}
const ActiveLink = ({to, children}) => {
    return (
        <>
            <NavLink style={style} to={to} className={({isActive})=>isActive?'active': 'inactive'}>{children}</NavLink>
        </>
    );
};

export default ActiveLink;