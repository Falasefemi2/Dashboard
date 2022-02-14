import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons"


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Falase</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone />
                        <span className="topIconBag">3</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language />
                        <span className="topIconBag">3</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings />
                    </div>
                    <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="avatar" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}
