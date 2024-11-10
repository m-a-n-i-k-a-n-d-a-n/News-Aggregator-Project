import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import countries from "./countries";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import newsLogo from './../assets/logo.png';

function Header({ onLogout }) { // Use onLogout prop for handling logout
  const [active, setActive] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const navigate = useNavigate();

  const category = ["business", "entertainment", "general", "health", "science", "sports", "technology", "politics"];
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const countryDropdownRef = useRef(null);
  const categoryDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navRef.current && !navRef.current.contains(e.target) &&
        hamburgerRef.current && !hamburgerRef.current.contains(e.target) &&
        !countryDropdownRef.current?.contains(e.target) &&
        !categoryDropdownRef.current?.contains(e.target)
      ) {
        setActive(false);
        setShowCategoryDropdown(false);
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    onLogout(); // Use the passed onLogout function from App
    navigate('/login'); // Redirect to the login page
  };

  return (
    <header>
      <nav ref={navRef} className="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-between px-5">
        <div className="flex items-center gap-3">
          <img src={newsLogo} alt="News Logo" className="w-10 h-10" />
          <h3 className="relative heading font-bold text-2xl text-white mb-5 mt-5">Xplore</h3>
        </div>

        <div className="flex items-center gap-6 ml-auto">
          <ul className="nav-ul flex gap-6 justify-start">
            <li>
              <Link className="no-underline font-semibold text-white" to="/" onClick={() => setActive(false)}>
                All News
              </Link>
            </li>
            <li className="dropdown-li" ref={categoryDropdownRef}>
              <Link 
                className="no-underline font-semibold text-white flex items-center gap-2" 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCategoryDropdown(!showCategoryDropdown);
                  setShowCountryDropdown(false);
                }}
              >
                Top-Headlines 
                <FontAwesomeIcon icon={faCircleArrowDown} className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} />
              </Link>
              <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
                {category.map((element, index) => (
                  <li key={index} onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>
                    <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize">{element}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="dropdown-li" ref={countryDropdownRef}>
              <Link 
                className="no-underline font-semibold text-white flex items-center gap-2" 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCountryDropdown(!showCountryDropdown);
                  setShowCategoryDropdown(false);
                }}
              >
                Country 
                <FontAwesomeIcon icon={faCircleArrowDown} className={showCountryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} />
              </Link>
              <ul className={showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
                {countries.map((element, index) => (
                  <li key={index} onClick={() => setShowCountryDropdown(!showCountryDropdown)}>
                    <Link to={"/country/" + element?.iso_2_alpha} className="flex gap-3">
                      <img src={element?.png} srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`} alt={element?.countryName} />
                      <span>{element?.countryName}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div ref={hamburgerRef} className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => setActive(!active)}>
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </div>
      </nav>

      {/* Hamburger Menu Content */}
      <div className={active ? "hamburger-menu open" : "hamburger-menu"}>
        <ul className="hamburger-links">
          <li><Link to="/" className="hamburger-link">Home</Link></li>
          <li><Link to="/trending-videos" className="hamburger-link">Trending Videos</Link></li>
          <li><Link to="/about-us" className="hamburger-link">About Us</Link></li>
          <li>
  <button
    onClick={() => {
      onLogout(); // Call the logout function
      navigate('/login'); // Navigate to the login page
    }}
    className="hamburger-link"
  >
    Sign Out
  </button>
</li>
 {/* Sign Out Button */}
        </ul>
      </div>
    </header>
  );
}

export default Header;
