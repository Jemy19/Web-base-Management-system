import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
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
                <img src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_750/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.webp" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
