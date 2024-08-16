import React from 'react';
import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import X from '../assets/icons/X.png';
import call from '../assets/icons/call.png';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <div>
      <div className='topNav'>
        <div>
          <img src={facebook} alt='' />
          <img src={instagram} alt='' />
          <img src={X} alt='' />
        </div>

        <p>
          Discover top-quality seeds, tools, and supplies for a bountiful
          harvest.
        </p>
        <div>
          <img src={call} alt='' />
          <span>+1 (850) 344 0 66</span>
        </div>
      </div>
      <img src={logo} alt='' />
    </div>
  );
};

export default Navbar;
