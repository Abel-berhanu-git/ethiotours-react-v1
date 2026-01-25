import { pageLinks, socialLinks } from '../data';
import PageLink from './PageLink';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLink';

const Footer = () => {
  return (
    <footer className='section footer'>
      {/* <!-- footer links --> */}

      <PageLinks parentClass={'footer-links'} itemClass={'footer-link'} />
      {/* or */}
      {/* <ul className='footer-links'>
        {pageLinks.map((link) => {
          return <PageLink key={link.id} {...link} itemClass={'footer-link'} />;
        })}
      </ul> */}
      {/* <!-- end of footer links --> */}

      {/* <!-- footer-icons --> */}
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return (
            <SocialLinks key={link.id} {...link} itemClass={'footer-icon'} />
          );
        })}
      </ul>
      {/* <!-- end of footer-icons --> */}

      <p className='copyright'>
        copyright &copy; EthioTours travel tour company ethiopia
        <span> {new Date().getFullYear()}</span>. all rights reserved
      </p>
      <p className='creator'>
        created by : <span> Abel Berhanu</span>
      </p>
    </footer>
  );
};
export default Footer;
