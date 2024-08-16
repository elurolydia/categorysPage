import React from 'react';
import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import X from '../assets/icons/X.png';
import call from '../assets/icons/call.png';
import logo from '../assets/images/logo.png';
import search from '../assets/icons/search.png';

const Navbar = () => {
  return (
    <div>
      <div className='topNav'>
        <div className='handles'>
          <img src={facebook} alt='' />
          <img src={instagram} alt='' />
          <img src={X} alt='' />
        </div>

        <p>
          Discover top-quality seeds, tools, and supplies for a bountiful
          harvest.
        </p>
        <div className='call'>
          <img src={call} alt='' />
          <span>+1 (850) 344 0 66</span>
        </div>
      </div>
      <div className='middleNav'>
        <img src={logo} alt='' />
        <div className='searchField'>
          <img src={search} alt='' />
          <input type='text' placeholder='Search for your product here ' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
