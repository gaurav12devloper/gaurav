import { Bio } from '../data/Bio';
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footerContainer = "overflow-hidden bg-gray-950 text-cyan-600";
const footerWrapper = `flex flex-col justify-center items-center gap-5 p-4`;
const socialMediaWrapper = `flex justify-center items-center gap-1 mt-5`;
const socialMediaIcon = `ml-4 md:mx-5 hover:text-cyan-400 text-2xl`;
const copyright = ` mb-5 text-light text-amber-500 flex flex-col md:flex-row md:gap-3 justify-center items-center`;

function Footer() {
  return (
    <footer className={footerContainer}>
      <div className={footerWrapper}>
        <div className={socialMediaWrapper}>
          <Link className={socialMediaIcon} to={Bio.github} target='_blank'><FaGithub /></Link>
          <Link className={socialMediaIcon} to={Bio.linkedin} target='_blank'><FaLinkedin /></Link>
          <Link className={socialMediaIcon} to={Bio.youtube} target='_blank'><FaYoutube /></Link>
          <Link className={socialMediaIcon} to={Bio.twitter} target='_blank'><FaTwitter /></Link>
          <Link className={socialMediaIcon} to={Bio.facebook} target='_blank'><FaFacebook /></Link>
          <Link className={socialMediaIcon} to={Bio.instagram} target='_blank'><FaInstagram /></Link>
        </div>
        <div className={copyright}>
          <span>&copy; 2025 </span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;