import { useState } from 'react';
import { pageLinks, socialLinks } from '../data';
import logo from '../images/logo.svg';
import PageLink from './PageLink';
import SocialLinks from './SocialLink';
import { useRef } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const linkContainer = useRef(null)
  const links = useRef(null)
  // console.log(links.current.getBoundingClientRect().height);

  const linkStyle = {
    height: showNavbar
      ? `${links.current.getBoundingClientRect().height}px`
      : '0px',
  };
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        {/* nav-header */}
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='nav-logo' />
          <button type='button' className='nav-toggle' id='nav-toggle' onClick={()=> setShowNavbar(!showNavbar)}>
            <i className='fa-solid fa-bars'></i>
          </button>
        </div>
        {/* end of nav-header */}

        {/* nav links */}
        <div className='nav-container' ref={linkContainer} style={linkStyle}>
          <ul className='nav-links' id='nav-links' ref={links}>
            {pageLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <PageLink
                  key={id}
                  href={href}
                  text={text}
                  itemClass={'nav-link'}
                  showNavbar={showNavbar}
                  setShowNavbar={setShowNavbar}
                />
              );
            })}
          </ul>
        </div>

        {/* end of nav links */}

        {/* nav-icons */}
        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return (
              <SocialLinks key={link.id} {...link} itemClass={'nav-icon'} />
            );
          })}
        </ul>

        {/* end of nav-icons */}
      </div>
      {/* end of navbar */}
    </nav>
  );
};
export default Navbar;
