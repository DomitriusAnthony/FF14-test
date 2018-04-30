import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
    textDecoration: 'none',
    margin: '5px'
}

export default function Nav () {
    return (
        <ul>
            <NavLink style={navStyle} to="/">Home</NavLink>
            <NavLink style={navStyle} to="/items">Items</NavLink>
            <NavLink style={navStyle} to="/characters">Enemies</NavLink>
        </ul>
    )
}

