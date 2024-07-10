// import React from 'react';
// import classes from "./Header.module.css";
// import logo from "../assets/logo.png";
// import SearchIcon from "@mui/icons-material/Search";
// import IconButton from "@mui/material/IconButton";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import { NavLink, useNavigate } from 'react-router-dom';
// import useMediaQuery from '@mui/material/useMediaQuery';
// // import IconButton from '@mui/material/IconButton';a

// const Header = () => {
//     const nav = useNavigate();
//     const mobile = useMediaQuery('(max-width:600px)');
//     return (
//         <>
//             <nav className={classes.header}>
//                 {!mobile && <div >
//                     <NavLink to="/">
//                         <img src={logo} alt="SBIG Logo" />
//                     </NavLink>
                    
//                 </div>}

//                 <div>
//                     <FormControl
//                         sx={{
//                             m: 1,
//                             borderRadius: '100px',
//                             width: '50ch',
//                             backgroundColor: 'white',
//                             '& .MuiOutlinedInput-root': {
//                                 backgroundColor: 'white',
//                             },
//                         }}
//                         variant="outlined"
//                         size="small"
//                     >
//                         <OutlinedInput
//                             id="outlined-adornment-search"
//                             placeholder="Search"
//                             sx={{
//                                 maxWidth: '100%'
//                             }}
//                             endAdornment={
//                                 <InputAdornment position="end">
                                    
//                                     <IconButton aria-label="search" edge="end" sx={{width:'15px' , marginRight:'10px'}} onClick={() => {
//                                         nav('/directSearch');
//                                     }}>
//                                         <SearchIcon/>
//                                     </IconButton>
//                                 </InputAdornment>
//                             }
//                         />
//                     </FormControl>
//                 </div>

//                 <div>
//                     <IconButton size="large" sx={{width:'15px' , marginRight:'10px'}}>
//                         <AccountCircleIcon fontSize="large" />
//                     </IconButton>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Header;


import React from 'react';
import classes from "./Header.module.css";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { NavLink, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';
// import IconButton from '@mui/material/IconButton';a
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveDrawer from '../responsiveSideDrawer/ResponsiveDrawer';

const Header = () => {
    const nav = useNavigate();
    const mobile = useMediaQuery('(max-width:600px)');
    return (
        <Box sx={{
            width: {
                xs:'100vw',
                sm:'100vw',
                md:'100vw',
                lg:'100vw',
                xl:'100vw',
            }
        }}>
            <nav className={classes.header}>
                {!mobile && <div >
                    <NavLink to="/">
                        <img src={logo} alt="SBIG Logo" />
                    </NavLink>
                    
                </div>}
                {mobile && <ResponsiveDrawer></ResponsiveDrawer>}

                <div>
                    <FormControl
                        sx={{
                            m: 1,
                            borderRadius: '100px',
                            width: '50ch',
                            backgroundColor: 'white',
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white',
                            },
                        }}
                        variant="outlined"
                        size="small"
                    >
                        <OutlinedInput
                            id="outlined-adornment-search"
                            placeholder="Search"
                            sx={{
                                maxWidth: '100%'
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                    
                                    <IconButton aria-label="search" edge="end" sx={{width:'15px' , marginRight:'10px'}} onClick={() => {
                                        nav('/directSearch');
                                    }}>
                                        <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>

                <div>
                    <IconButton size="large" sx={{width:'15px' , marginRight:'10px'}}>
                        <AccountCircleIcon fontSize="large" />
                    </IconButton>
                </div>
            </nav>
        </Box>
    );
};

export default Header;