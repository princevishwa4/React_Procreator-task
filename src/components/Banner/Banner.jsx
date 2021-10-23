import { useState } from 'react';
import "./Banner.css";

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

import Search from "../Content/Search/Search";

// Images
import Button from "../../assets/buttons_small.png";
import MenuIcon from "../../assets/Combined Shape.png"
import { Avatar } from '@mui/material';

const Banner = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <section className="banner">
            <div className="wrapper">
                <h1>Hello Jessie,</h1>
                <p>at the moment you have</p>
                <div className="progress_bar_group">
                    <div className="available_space">
                        <p><strong>32,5 GB</strong> of 100 GB free</p>
                        <img src={Button} alt="button" />
                    </div>
                    <div className="progress_bar">
                        <span style={{ width: "75%" }}></span>
                    </div>
                </div>
            </div>
            <div className="main_section">
                <div className="wrapper">
                    <Search />
                    <TabContext value={value}>
                        <Box sx={{ width: '100%', bgcolor: 'background.paper' }} m={3}>
                            <TabList value={value} onChange={handleChange} centered>
                                <Tab label="FILES" value="1" />
                                <Tab label="FOLDERS" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: 120, minHeight: 120, bgcolor: "#f5f7fc", borderRadius: "20px" }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 16, color: "#000" }} gutterBottom>
                                                The next big thing
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                12f . 2.1 gb
                                            </Typography>
                                            <Avatar src={MenuIcon} />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: 120, minHeight: 120, bgcolor: "#f5f7fc", borderRadius: "20px" }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 16, color: "#000" }} gutterBottom>
                                                Top Secret
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                7f . 523 mb
                                            </Typography>
                                            <Avatar src={MenuIcon} />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: 120, minHeight: 120, bgcolor: "#f5f7fc", borderRadius: "20px" }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 16, color: "#000" }} color="text.secondary" gutterBottom>
                                                Freebie project
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                3f . 192 mb
                                            </Typography>
                                            <Avatar src={MenuIcon} />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: 120, minHeight: 120, bgcolor: "#f5f7fc", borderRadius: "20px" }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 16, color: "#000" }} color="text.secondary" gutterBottom>
                                                London meetup
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                453 f . 1.7 gb
                                            </Typography>
                                            <Avatar src={MenuIcon} />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value="2">
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: 120, minHeight: 120, bgcolor: "#f5f7fc", borderRadius: "20px" }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 16, color: "#000" }} gutterBottom>
                                                The next big thing
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                12f . 2.1 gb
                                            </Typography>
                                            <Avatar src={MenuIcon} />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: 120, minHeight: 120, bgcolor: "#f5f7fc", borderRadius: "20px" }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 16, color: "#000" }} gutterBottom>
                                                Top Secret
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                7f . 523 mb
                                            </Typography>
                                            <Avatar src={MenuIcon} />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: 120, minHeight: 120, bgcolor: "#f5f7fc", borderRadius: "20px" }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 16, color: "#000" }} color="text.secondary" gutterBottom>
                                                Freebie project
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                3f . 192 mb
                                            </Typography>
                                            <Avatar src={MenuIcon} />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: 120, minHeight: 120, bgcolor: "#f5f7fc", borderRadius: "20px" }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 16, color: "#000" }} color="text.secondary" gutterBottom>
                                                London meetup
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                453 f . 1.7 gb
                                            </Typography>
                                            <Avatar src={MenuIcon} />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </TabContext>
                </div>
            </div>
        </section>
    );
}

export default Banner;