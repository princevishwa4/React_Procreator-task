import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import "./StorageManagement.css";

import BackImage from "../../../assets/icons_raw_edit.png";
import PieChartImage from "../../../assets/pie_chart.png";
import MenuGalleryImage from "../../../assets/icons_with background_category (1).png"
import MenuArchieveImage from "../../../assets/icons_with background_category (2).png"
import MenuVideoImage from "../../../assets/icons_with background_link.png"
import MenuIcon from "../../../assets/Combined Shape.png"

// Material UI
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const StorageManagement = () => {
    const [value, setValue] = useState('1');
    const history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <section className="storage_management">
            <div className="wrapper">
                <div className="storage_management_heading">
                    <figure onClick={() => history.goBack()} className="go_back">
                        <img src={BackImage} />
                    </figure>
                    <h4>Storage management</h4>
                </div>
                <figure className="pie_chart">
                    <img src={PieChartImage} />
                </figure>
                <ul className="categories">
                    <li>
                        <div className="color"></div>
                        <p>Music</p>
                    </li>
                    <li>
                        <div className="color"></div>
                        <p>Images</p>
                    </li>
                    <li>
                        <div className="color"></div>
                        <p>Archives</p>
                    </li>
                    <li>
                        <div className="color"></div>
                        <p>Documents</p>
                    </li>
                    <li>
                        <div className="color"></div>
                        <p>Videos</p>
                    </li>
                </ul>
                <TabContext value={value}>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <TabList value={value} onChange={handleChange} centered>
                            <Tab label="LEAST USED" value="1" />
                            <Tab label="LARGEST" value="2" />
                            <Tab label="LATEST ACCESSED" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <ul className="storage_management_content_container">
                            <li>
                                <figure>
                                    <img src={MenuVideoImage} />
                                </figure>
                                <div className="storage_management_content">
                                    <h6>TikTok dance</h6>
                                    <p>mov · 1 time</p>
                                </div>
                                <figure className="menu_icon">
                                    <img src={MenuIcon} />
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src={MenuGalleryImage} />
                                </figure>
                                <div className="storage_management_content">
                                    <h6>Selfie withhout beard</h6>
                                    <p>jpg · 2 times</p>
                                </div>
                                <figure className="menu_icon">
                                    <img src={MenuIcon} />
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src={MenuArchieveImage} />
                                </figure>
                                <div className="storage_management_content">
                                    <h6>University lectures</h6>
                                    <p>jpg · 2 times</p>
                                </div>
                                <figure className="menu_icon">
                                    <img src={MenuIcon} />
                                </figure>
                            </li>
                        </ul>
                    </TabPanel>
                    <TabPanel value="2">
                        <ul className="storage_management_content_container">
                            <li>
                                <figure>
                                    <img src={MenuVideoImage} />
                                </figure>
                                <div className="storage_management_content">
                                    <h6>TikTok dance</h6>
                                    <p>mov · 1 time</p>
                                </div>
                                <figure className="menu_icon">
                                    <img src={MenuIcon} />
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src={MenuGalleryImage} />
                                </figure>
                                <div className="storage_management_content">
                                    <h6>Selfie withhout beard</h6>
                                    <p>jpg · 2 times</p>
                                </div>
                                <figure className="menu_icon">
                                    <img src={MenuIcon} />
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src={MenuArchieveImage} />
                                </figure>
                                <div className="storage_management_content">
                                    <h6>University lectures</h6>
                                    <p>jpg · 2 times</p>
                                </div>
                                <figure className="menu_icon">
                                    <img src={MenuIcon} />
                                </figure>
                            </li>
                        </ul>
                    </TabPanel>
                    <TabPanel value="3">
                        <ul className="storage_management_content_container">
                            <li>
                                <figure>
                                    <img src={MenuVideoImage} />
                                </figure>
                                <div className="storage_management_content">
                                    <h6>TikTok dance</h6>
                                    <p>mov · 1 time</p>
                                </div>
                                <figure className="menu_icon">
                                    <img src={MenuIcon} />
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src={MenuGalleryImage} />
                                </figure>
                                <div className="storage_management_content">
                                    <h6>Selfie withhout beard</h6>
                                    <p>jpg · 2 times</p>
                                </div>
                                <figure className="menu_icon">
                                    <img src={MenuIcon} />
                                </figure>
                            </li>
                            <li>
                                <figure>
                                    <img src={MenuArchieveImage} />
                                </figure>
                                <div className="storage_management_content">
                                    <h6>University lectures</h6>
                                    <p>jpg · 2 times</p>
                                </div>
                                <figure className="menu_icon">
                                    <img src={MenuIcon} />
                                </figure>
                            </li>
                        </ul>
                    </TabPanel>
                </TabContext>
            </div>
        </section>
    );
}

export default StorageManagement;