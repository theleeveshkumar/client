import React from 'react';
import '../index.css';

const Navbar = () => {
     return (
          <nav>
               <div className="logo">
                    <img src="/logo.png" alt="Logo" />
                    <span>Podcast Hub</span>
               </div>
               <div className="saved-link">
                    <a href="/saved">Saved Podcasts</a>
               </div>
          </nav>
     );
};

export default Navbar;