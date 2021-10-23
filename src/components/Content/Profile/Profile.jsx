import { BrowserRouter, Link } from 'react-router-dom';

import EditImage from "../../../assets/profile_icons_nav bar.png";
import ProfileDetail from "../../../assets/User details.png";
import MoreDetail from "../../../assets/Stroke 1.png";

import "./Profile.css";

import Switch from '@mui/material/Switch';

const Profile = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    
    return (
        <section className="profile">
            <div className="wrapper">
                <div className="profile_heading">
                    <h2>Profile</h2>
                    <img src={EditImage} />
                </div>
                <figure className="profile_detail">
                    <img src={ProfileDetail} />
                </figure>
                <div className="progress_bar_group">
                    <div className="available_space">
                        <p><strong>32,5 GB</strong> of 100 GB free</p>
                    </div>
                    <div className="progress_bar">
                        <span style={{ width: "75%" }}></span>
                    </div>
                </div>
                <div className="button_container">
                    <button>Increase storage space</button>
                </div>
                <div className="profile_setting">
                    <Link exact to="/storage_management">
                        <div>
                            <p>Storage management</p>
                            <img src={MoreDetail} />
                        </div>
                    </Link>
                    <div>
                        <div className="multiple_options">
                            <p>Storage management</p>
                            <span>iPhone, Macbook, iPad</span>
                        </div>
                        <img src={MoreDetail} />
                    </div>
                    <div>
                        <p>Camera uploads</p>
                        <Switch {...label} defaultChecked />
                    </div>
                    <div>
                        <p>Use data for file transfer</p>
                        <Switch {...label} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;