import React,{useState} from 'react'
import "./Navbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import Dropdown from './Dropdown'

function Navbar() {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Harmony Hills Subdivision</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                <NotificationsNone />
               <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                <Language />
               <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                <Settings />
                </div>
                <div onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
                <img src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_750/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.webp" alt="" onClick={closeMobileMenu}className="topAvatar" />{dropdown && <Dropdown />}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar