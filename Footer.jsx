import React from 'react'
import '../styles.css'

function Footer() {
    return (
        <p className='footer'>
            copyright by ShapeAI @ {new Date().getFullYear()}
        </p>
    )
}

export default Footer;
