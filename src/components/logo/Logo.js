import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    
    return(
   /* margin 4, margin-top:0;*/      
    <div className='ma4 mt0'> 
        <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner">
                 <img  src={brain} alt="logo" />
                 </div>
        </Tilt>
    </div>
    )
}

export default Logo;