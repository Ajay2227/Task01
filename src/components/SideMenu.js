import React from "react"
import logo from "../assests/logo/h-logo.png";





const SideMenu = (props)  => {
    return (
        <div className= "side-menu">
          <div className="top-section">
            <div className="logo">
              <img src={logo} alt="h-logo.png" />
            </div>
            
          </div>
    
          <div className="search-controller">
            <button className="search-btn">Search Folder...
            </button>
    
            <input type="text" placeholder="search" />
          </div>
    
          <div className="divider"></div>  


          <div className="main-menu">
          <ul>
            <li>
                <a className="menu-item">
                    <div className="menu-icon">
                    <i class="bi bi-collection">
                        Library
                    </i>
                    </div>
                </a>
            </li>
            <li>
                <a className="menu-item">
                    <div className="menu-icon">
                    <i class="bi bi-clock-history">
                        History
                    </i>
                    </div>
                </a>
            </li>
            <li>
                <a className="menu-item">
                    <div className="menu-icon">
                    <i class="bi bi-pen">A.I Writer 5.0</i>
                    </div>
                </a>
            </li>
            <li>
                <a className="menu-item">
                    <div className="menu-icon">
                    <i class="bi bi-badge-vo">
                        Brand Voice
                    </i>
                    </div>
                </a>
            </li>
            <li>
                <a className="menu-item">
                    <div className="menu-icon">
                    <i class="bi bi-robot">Botsonic</i>
                    </div>
                </a>
            </li>
            <li>
                <a className="menu-item">
                    <div className="menu-icon">
                    <i class="bi bi-chat-left">
                        ChatSonic
                    </i>
                    </div>
                </a>
            </li>
            <li>
                <a className="menu-item">
                    <div className="menu-icon">
                    <i class="bi bi-image">
                        PhotoSonic
                    </i>
                    </div>
                </a>
            </li>
            <li>
                <a className="menu-item">
                    <div className="menu-icon">
                    <i class="bi bi-building-lock">Bulk Generate</i>
                    </div>
                </a>
            </li>
            </ul>
            </div>
         </div> 


         );

};


export default SideMenu;
    
