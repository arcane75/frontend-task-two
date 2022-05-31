import { Box, Container, Grid, Paper, Typography, Button, Modal, List, ListItem, ListItemButton, ListItemText, ListItemIcon, ListSubheader, Collapse } from '@mui/material';
import React, { useState } from 'react';
import './explore.css';
import img1 from '../../assets/images/aboutUs.jpg';
import img2 from '../../assets/images/Become-our-client.jpg';
import img3 from '../../assets/images/product-service.jpg';
import img4 from '../../assets/images/download-min.jpg';
import SendIcon from '@mui/icons-material/Send';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Explore = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Box sx={{ mb: 5 }}>
                <Container>
                    <Box className="explore" >
                        <h1 >Explore</h1>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <Paper elevation={3} sx={{}}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${img1})`,
                                        height: '160px', width: { xs: '100%', },
                                        backgroundSize: 'cover',
                                        borderRadius: 2,
                                    }}
                                >
                                </Box>
                            </Paper>
                            <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold', my: 2, color: '#FF6F00' }}>About Us</Typography>
                            <Box>
                                <nav aria-label="main mailbox folders">
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SendIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Capital Profile" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SendIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Mission & Vision" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SendIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Board of Directors" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SendIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Management" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SendIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Circulation" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SendIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Career Opportunity" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </nav>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Paper elevation={3} sx={{}}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${img2})`,
                                        height: '160px', width: { xs: '100%', },
                                        backgroundSize: 'cover',
                                        borderRadius: 2,
                                    }}
                                >

                                </Box>
                            </Paper>
                            <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold', my: 2, color: '#FF6F00' }}>Become a Client</Typography>

                            <Box>
                                <nav aria-label="main mailbox folders">
                                    <List >

                                        <ListItemButton onClick={handleClick}>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Issue Management" />
                                            {open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemIcon>
                                                        <SendIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Prospectus" />
                                                </ListItemButton>
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemIcon>
                                                        <SendIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Abridged Version" />
                                                </ListItemButton>
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemIcon>
                                                        <SendIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="IPO Result" />
                                                </ListItemButton>
                                            </List>
                                        </Collapse>


                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SendIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Client facilities" />
                                            </ListItemButton>
                                        </ListItem>

                                    </List>
                                </nav>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Paper elevation={3} sx={{}}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${img3})`,
                                        height: '160px', width: { xs: '100%', },
                                        backgroundSize: 'cover',
                                        borderRadius: 2,
                                    }}
                                >

                                </Box>
                            </Paper>
                            <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold', my: 2, color: '#FF6F00' }}>Product & Service</Typography>

                            <Box>
                                <nav aria-label="main mailbox folders">
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SendIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Bangladeshi Individuals" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SendIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Bangladeshi Institutions" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SendIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Foreign Investors" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SendIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="NRBs" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SendIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Daily Market Commentary" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SendIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Research" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </nav>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Paper elevation={3} sx={{}}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${img4})`,
                                        height: '160px', width: { xs: '100%', },
                                        backgroundSize: 'cover',
                                        borderRadius: 2,
                                    }}
                                >

                                </Box>
                            </Paper>
                            <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold', my: 2, color: '#FF6F00' }}>Downloads</Typography>

                            
                            <Box>
                                <nav aria-label="main mailbox folders">
                                    <List >

                                        <ListItemButton onClick={handleClick}>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Forms" />
                                            {open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemIcon>
                                                        <SendIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="All Forms" />
                                                </ListItemButton>
                                            
                                            </List>
                                        </Collapse>


                                        <ListItemButton onClick={handleClick}>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Notice/Circular" />
                                            {open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemIcon>
                                                        <SendIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="BSEC" />
                                                </ListItemButton>
                                              
                                            </List>
                                        </Collapse>


                                    </List>
                                </nav>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Explore;