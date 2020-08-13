import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
    return (
        <div>
            <div class="navbar">

            <label for="togglericon" class="toggler" checked></label>
            <input type="checkbox" id="togglericon" class="toggler" />

            <div class="brand">
            <span class="brand-icon">⚛</span>
            <span class="brand-name">Brand Name</span>
            </div>

            <div class="nav">
            <a href="#">Home</a>
            <a href="#">Enter Your Code</a>    
            <a href="#">Flight List</a>
            <a href="#">Contact</a>
            </div>
            </div>
        </div>
    )
}

export default Navbar

