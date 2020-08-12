import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={{margin:'10px'}}> MS Research</h1>
            <Link style={linkStyle} to="/">Feed</Link> | 
            <Link style={linkStyle} to="/interest">Interests</Link>
        </header>
    )
}

const headerStyle = {
    background: '#444',
    color: '#fff',
    textAlign:'center',
    padding: '10px'
}

const linkStyle ={
    color: '#fff',
    textDecoration: 'none',
    padding: '10px',
    margin: '10px'

}
export default Header;