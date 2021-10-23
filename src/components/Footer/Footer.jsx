import { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';

// Selected Menu Images
import SelectedFirstTab from "../../assets/selected_tab_1.png";
import SelectedSecondTab from "../../assets/selected_tab_2.png";
// import SelectedThirdTab from "../../assets/selected_tab_3.png";
import SelectedFourthTab from "../../assets/selected_tab_4.png";
import SelectedFifthTab from "../../assets/selected_tab_5.png";

// UnSelected Menu Images
import UnSelectedFirstTab from "../../assets/unselected_tab_1.png";
import UnSelectedSecondTab from "../../assets/unselected_tab_2.png";
import UnSelectedThirdTab from "../../assets/unselected_tab_3.png";
import UnSelectedFourthTab from "../../assets/unselected_tab_4.png";
import UnSelectedFifthTab from "../../assets/unselected_tab_5.png";

import { makeStyles } from '@mui/styles';
import "./Footer.css";

const useStyles = makeStyles(theme => ({
    tabsRoot: {
      width: "20px",
      height: "20px"
    },
  }));

const Footer = ({ getComponent }) => {
    const classes = useStyles();
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        getComponent(newValue);
    };

    return (
        <footer>
            <div className="wrapper">
                <TabContext value={value}>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <TabList
                            TabIndicatorProps={{
                                style: {
                                    display: "none",
                                },
                            }}
                            value={value}
                            onChange={handleChange}
                            centered>
                            <Tab icon={<Avatar src={value == 1 ? SelectedFirstTab : UnSelectedFirstTab} style={{ height: '25px', width: '25px' }} />} value="1" className={classes.tabsRoot} />
                            <Tab icon={<Avatar src={value == 2 ? SelectedSecondTab : UnSelectedSecondTab} style={{ height: '25px', width: '25px' }} />} value="2" className={classes.tabsRoot} />
                            <Tab icon={<Avatar src={value == 3 ? SelectedFirstTab : UnSelectedThirdTab} style={{ height: '25px', width: '25px' }} />} value="3" className={classes.tabsRoot} />
                            <Tab icon={<Avatar src={value == 4 ? SelectedFourthTab : UnSelectedFourthTab} style={{ height: '25px', width: '25px' }} />} value="4" className={classes.tabsRoot} />
                            <Tab icon={<Avatar src={value == 5 ? SelectedFifthTab : UnSelectedFifthTab} style={{ height: '25px', width: '25px' }} />} value="5" className={classes.tabsRoot} />
                        </TabList>
                    </Box>
                </TabContext>
            </div>
        </footer>
    );
}

export default Footer;