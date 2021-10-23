import { useState } from 'react';

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

import Search from "../Search/Search";
import "./HomeContent.css";


const HomeContent = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            
            <section className="homeContent">
                <div className="wrapper">
                    <Search />
                    <TabContext value={value}>
                        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            <TabList value={value} onChange={handleChange} centered>
                                <Tab label="FILES" value="1" />
                                <Tab label="FOLDERS" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: 140, bgcolor: "#f5f7fc", borderRadius: "20px" }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Word of the Day
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                                benevolent
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                adjective
                                            </Typography>
                                            <Typography variant="body2">
                                                well meaning and kindly.
                                                <br />
                                                {'"a benevolent smile"'}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: 140, bgcolor: "#f5f7fc", borderRadius: "20px" }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Word of the Day
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                                benevolent
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                adjective
                                            </Typography>
                                            <Typography variant="body2">
                                                well meaning and kindly.
                                                <br />
                                                {'"a benevolent smile"'}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>  
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: 140, bgcolor: "#f5f7fc", borderRadius: "20px" }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Word of the Day
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                                benevolent
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                adjective
                                            </Typography>
                                            <Typography variant="body2">
                                                well meaning and kindly.
                                                <br />
                                                {'"a benevolent smile"'}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ minWidth: 140, bgcolor: "#f5f7fc", borderRadius: "20px" }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Word of the Day
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                                benevolent
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                adjective
                                            </Typography>
                                            <Typography variant="body2">
                                                well meaning and kindly.
                                                <br />
                                                {'"a benevolent smile"'}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>                                                              
                            </Grid>
                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                    </TabContext>
                </div>
            </section>
        </>
    );
}

export default HomeContent;