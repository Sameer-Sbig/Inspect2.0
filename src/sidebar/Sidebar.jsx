
import { Close, FormatAlignJustify, Notes } from "@mui/icons-material";
import classes from "./Sidebar.module.css";
import { useContext, useState } from "react";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Link, NavLink, useNavigate } from "react-router-dom";
// import Select from "react-dropdown-select";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AuthContext } from "../App";
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    const [sidebarClosed, setSidebarclosed] = useState(false);
    // const [age, setAge] = useState('')
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    // const handleChange = (event) => {
    //     setAge(event.target.value);
    //     console.log(event.target.value)
    //     if (event.target.value == 1) {

    //         navigate('/');

    //     }
    //     else if (event.target.value == 2) {

    //         navigate('/inwardForm');

    //     }
    // };
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [nameSelect , setNameSelect] = useState('Prposal');
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (route) => {
        navigate(route);
        handleClose();
        // if(route == '/'){
        //     setNameSelect('DashBoard');

        // }
        // if(route == '/inwardForm'){
        //     setNameSelect ('New Inward');

        // }
       
    };
    



    return <>
            <div className={classes.sidebar} style={{ width: sidebarClosed ? '40px' : '17%' }}>
                <div
                    onClick={() => setSidebarclosed(prev => !prev)}
                    className={classes.sidebarMenuIcon}
                >
                    {sidebarClosed ? <Notes /> : <CloseIcon sx={{ paddingLeft: '0px' }} />}
                </div>
                <ul className={classes.sidebarList}>
                    {/* <li>
                        
                        <Notes/>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{color:'white' , padding:'0px' , margin:'0px',justifyContent:'left'}}
                            endIcon={<KeyboardArrowDownIcon />}
                            // startIcon={<Notes />}
                            
                        >   
                            {nameSelect}
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => handleMenuItemClick('/')}>DashBoard</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick('/inwardList')}>Inward List</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick('/inwardForm')}>New Inward</MenuItem>
                            <MenuItem onClick={() => handleMenuItemClick('/searchInward')}>Search</MenuItem>
                            
                           
                        </Menu>

                    </li> */}
                   


                    <li onClick={() => {handleMenuItemClick('/dashboard')}} ><Notes />Dashboard</li>
                    <li  onClick={() => {handleMenuItemClick('/report')}}><Notes />Report</li>
                    <li  onClick={() => {
                        authContext.logout();
                    }}><LogoutIcon />Logout</li>
                    {/* <li onClick={() => {handleMenuItemClick('/manageSurvey')}}><Notes />Manage Survey</li> */}
                </ul>
            </div>
        </>

};

export default Sidebar;




{/* <Notes/>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Inward</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Inward"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>DashBoard</MenuItem>
                                <MenuItem value={2}>New Inward</MenuItem>
                                
                            </Select>
                        </FormControl> */}