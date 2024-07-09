import React, { useState } from "react";
import classes from "./ManageSurveyMain.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Add from "@mui/icons-material/Add";
import { NavLink, useNavigate } from "react-router-dom";
import man1 from '../assets/images/man1.jpg';
import man2 from '../assets/images/man2.jpg';
import man3 from '../assets/images/man3.jpg';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';





function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


const ManageSurveyMain = () => {
  const [count, setCount] = useState(0);
  const [displayIcon, setDisplayIcon] = useState(true);

  const addDiv = () => {
    setCount(count + 1);
    setDisplayIcon(false);
  };
  const deleteDiv = () => {
    setCount(count - 1);
  };

  const navigate = useNavigate();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
};

const handleChangeIndex = (index) => {
    setValue(index);
};

  return (
    <>
      <div className={classes.main}>
      <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            centered
        >
            <Tab label="Form " {...a11yProps(0)} />
           
            <Tab label="Supporting Documents" {...a11yProps(1)} />
        </Tabs>



        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0} >
            <div className={classes.form_div}>
          <form action="" className={classes.form}>
            <h3>Pin Details</h3>
            <div className={classes.form_div1}>
              <label>PIN Number*:</label>
              {/* <select name="" id="">
                  <option value="">Select Inward Type</option>
                  <option>Proposal</option>
                  <option>Miscellaneous</option>
                  <option>Endorsement</option>
                  <option>Replenishment</option>
                </select> */}
              <input type="number" />

              <label>Decision* : </label>
              <select name="" id="">
                <option value="">select</option>
                <option value="">Case Recommended</option>
                <option value="">Case Rejected</option>
                <option value="">Extra KM Requested</option>
              </select>

              <label>Remarks*:</label>
              <input type="text" />

              <label>Documents Uploaded*:</label>
              <select name="" id="">
                <option value="">select product</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <label>Inspection Type*:</label>
              <input type="text" />

              <label>Inspect Date*</label>
              <input type="date" />

              <label>Document File*</label>
              <input type="file" />
            </div>
            <div></div>
            <h3>Vehicle Details</h3>





            {/* //********************************************************************** * */}
            <div className={classes.form_div1}>
              <label>Vehicle Classification*:</label>
              <input type="text" />
              <label>Make*:</label>
              <input type="text" />

              <label>Model*:</label>
              <input type="text" />
            

              <label>Vehicle Subtype*:</label>
              <input type="text" />
              
              <label>Registration Number*</label>
              <input type="text" />

              <label>Registration Number Format*</label>
              <select name="" id="">
                  <option value="">Select Format</option>
                  <option>Diplomat</option>
                  <option>New</option>
                  <option>Specific</option>
                  <option>Bharat</option>
                  <option >Others</option>
                </select>
                <label>Engine Number*</label>
              <input type="text" />
              <label>Chasis Number*</label>
              <input type="text" />
              <label>Manuafacture Year*</label>
              <input type="text" />
              
            </div>
            
      

            <div className={classes.buttonDiv}>
              {/* <div className={classes.form_div5}>
                    <label >Proposal Signed Date</label>
                    <input type="date" />
                </div>
 
                <div className={classes.form_div5}>
                    <label >CKYC Available?</label>
                    <input type="radio" name="ckyc" />
                    <label >Yes</label>
                    <input type="radio" name="ckyc"/>
                    <label >No</label>
                </div>
 
                <div className={classes.form_div5}>
                    <label >Date of Birth</label>
                    <input type="date" />
                </div> */}
              <button
                type="button"
                className={classes.nextBtn}
                onClick={(index) => {
                //   navigate("/inwardForm2");
                setValue(1);
                }}
              >
                Next
              </button>
            </div>
          </form>
        </div>
                


            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <div className={classes.InstrumentDetails}
                >
                     <div>
                    <img src={man1} alt="" />
                    <img src={man2} alt="" />
                    <img src={man3} alt="" />
                </div>




                </div>
            </TabPanel>
        
        </SwipeableViews>

   
      </div>
    </>
  );
};

export default ManageSurveyMain;
