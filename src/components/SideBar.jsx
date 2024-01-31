import { RiPieChartLine, RiUpload2Line, RiFileTextLine, RiCalendarLine, RiNotification2Line, RiSettings3Line } from 'react-icons/ri';
import '../pages/Dashboard.css';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react'; 

const SideBar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); 
  const { logout } = useAuth0();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const navLinks = [
    { icon: <RiPieChartLine />, text: 'Dashboard' },
    { icon: <RiUpload2Line />, text: 'Upload' },
    { icon: <RiFileTextLine />, text: 'Invoice' },
    { icon: <RiCalendarLine />, text: 'Calendar' },
    { icon: <RiNotification2Line />, text: 'Notification' },
    { icon: <RiSettings3Line />, text: 'Settings' },
  ];

  return (
    <div className={`sidebar__container ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <h1 className="sidebar_text">BASE</h1>

      {/* Hamburger menu button */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div></div>
        <div></div>
        <div></div>
      </div>

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
              {isSidebarCollapsed ? null : link.text} 
            </a>
          </li>
        ))}
      </ul>
      <button className='signOut-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    </div>
  );
}

export default SideBar;
