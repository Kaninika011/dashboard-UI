import { RiPieChartLine, RiUpload2Line, RiFileTextLine, RiCalendarLine, RiNotification2Line, RiSettings3Line } from 'react-icons/ri';
import { useAuth0 } from "@auth0/auth0-react";
import './Sidebar.css';
import { useState } from 'react';

const SideBar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth0();

  const navLinks = [
    { icon: <RiPieChartLine />, text: 'Dashboard' },
    { icon: <RiUpload2Line />, text: 'Upload' },
    { icon: <RiFileTextLine />, text: 'Invoice' },
    { icon: <RiCalendarLine />, text: 'Calendar' },
    { icon: <RiNotification2Line />, text: 'Notification' },
    { icon: <RiSettings3Line />, text: 'Settings' },
  ];

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className='sidebar'>
      <div className='sidebar__container'>
        <h1 className="sidebar_text">BASE</h1>

        <ul className="nav__links">
          {navLinks.map((link, index) => (
            <li key={index} className="nav__link">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className={link.text === 'Upload' ? 'active' : ''}
              >
                {link.icon}
                {link.text}
              </a>
            </li>
          ))}
          
        </ul>

        <button className='signOut-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
      </div>
      <div >
        <ul>
        <li className='trigger'>
          hi
        </li>
        </ul>
      </div>
      </div>
);
}

export default SideBar;
