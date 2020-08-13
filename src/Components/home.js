import React from 'react';
import img from '../images/appbar.jpg'

const Home = () => {
    return (
        < div className="image-container">
            <img src={img} className="landing-image"/>
        </div>
    );
}

export default Home;