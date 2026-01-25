import { pageLinks, socialLinks } from '../data';
import logo from '../images/logo.svg';
import PageLink from './PageLink';
import SocialLinks from './SocialLink'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        {/* nav-header */}
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='nav-logo' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fa-solid fa-bars'></i>
          </button>
        </div>
        {/* end of nav-header */}

        {/* nav links */}
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <PageLink
                key={id}
                href={href}
                text={text}
                itemClass={'nav-link'}
              />
            );
          })}
        </ul>
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
