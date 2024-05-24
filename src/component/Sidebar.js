import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import '../common/static/css/sidebar.css';
import { menuItems } from './menuItems';
import { FaAngleLeft, FaAngleDown, FaAngleUp, FaBars } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import thread from '../common/static/image/thread.png'

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubsubMenu, setOpenSubsubMenu] = useState(null);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    setOpenSubMenu(null);
    setOpenSubsubMenu(null);
  };

  const toggleSubMenu = (index) => {
    const menuItem = menuItems[index];
    if (menuItem.submenus) {
      setOpenSubMenu(openSubMenu === index ? null : index);
      setOpenSubsubMenu(null);
    } else {
      window.location.href = menuItem.path;
    }
  };

  const toggleSubsubMenu = (index) => {
    setOpenSubsubMenu(openSubsubMenu === index ? null : index);
  };

  const [themeMode, setThemeMode] = useState("light");

  return (
    <div className={`grid-container ${themeMode === "dark" ? "dark-theme" : ""}`}>
      <header className="header"></header>
      <section className={`sidebar  ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-content" style={{ width: "250px" }}>
          <div className="toggle">
            <FaAngleLeft style={{ color: "white" }} onClick={toggleSidebar} />
          </div>
        </div>
        <div className="sidebar-content-items">
          <div className="logo-container" style={{ display: "flex", gap: "20px", margin: "25px 0 0 10px", alignItems: "center" }}>
            {/* <span className="image">
              <img src={thread} alt="logo" style={{ width: "40px", height: "40px" }} />
            </span> */}
            <div className="text hidden-text">
              <span className="name" style={{fontWeight:'800', color:'#135D66', marginBottom:'20px'}}>WEAVEIT APP</span>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="menu-bar">
              <div className="menus">
                <ul className="menu">
                  {menuItems.map((item, index) => (
                    <li className="main-link" key={index}>
                      <div className="menu-item">
                        <Link to={item.path} className="menu-link">
                          <i className="menu-icon">{item.icon}</i>
                          <span className="hidden-text">{item.title}</span>
                          {item.submenus && (
                            <span className="submenu-toggle" style={{ marginLeft: 'auto' }}>
                              {openSubMenu === index ? <FaAngleUp /> : <FaAngleDown />}
                            </span>
                          )}
                        </Link>
                        {item.submenus && openSubMenu === index && (
                          <ul className="submenu">
                            {item.submenus.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link to={subItem.path} className="submenu-link">
                                  <span>{subItem.icon}</span>
                                  <span className="hidden-text">{subItem.title}</span>
                                  {subItem.submenus && (
                                    <span className="subsubmenu-toggle" style={{ marginLeft: 'auto' }} onClick={() => toggleSubsubMenu(subIndex)}>
                                      {openSubsubMenu === subIndex ? <FaAngleUp /> : <FaAngleDown />}
                                    </span>
                                  )}
                                </Link>
                                {subItem.submenus && openSubsubMenu === subIndex && (
                                  <ul className="subsubmenu">
                                    {subItem.submenus.map((subSubMenu, subSubIndex) => (
                                      <li key={subSubIndex}>
                                        <Link to={subSubMenu.path} className="subsubmenu-link">
                                          <span>{subSubMenu.icon}</span>
                                          <span className="hidden-text">{subSubMenu.title}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bottom-content">
              <ul>
                <li>
                  <Link to="#" className="logout-link">
                    <HiOutlineLogout className="logout-icon" />
                    <span className="hidden-text">Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar-toggle-btn">
          <FaBars onClick={toggleSidebar} />
        </div>
      </section>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}

export default Sidebar;