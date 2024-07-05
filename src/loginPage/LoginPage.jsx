import classes from "./LoginPage.module.css";
import Image from "../assets/loginPage5.webp";
import {
  Alert,
  AlertTitle,
  AppBar,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState, useEffect, useRef, useContext } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

import ReplayIcon from "@mui/icons-material/Replay";
import userCredentials from "../data/Users";

const LoginPageMain = () => {
  const adminUserName = useRef("");
  const adminPassword = useRef("");
  const [loginRole, setLoginRole] = useState("admin");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const canvasRef = useRef(null);
  const [errorText, setErrorText] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);



  // user login can be handled from here
  // const handleLogin = (e) => {

  //   e.preventDefault();
  //   if( userCredentials.hasOwnProperty(username) && userCredentials[username] === password ){}
  // }



  const generateRandomChar = (min, max) =>
    String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));

  const generateCaptchaText = () => {
    let captcha = "";
    for (let i = 0; i < 3; i++) {
      captcha += generateRandomChar(65, 90);
      captcha += generateRandomChar(97, 122);
    }
    return captcha
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  };

  const drawCaptchaOnCanvas = (ctx, captcha) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const textColors = ["rgb(0,0,0)", "rgb(130,130,130)"];
    const letterSpace = 150 / captcha.length;
    for (let i = 0; i < captcha.length; i++) {
      const xInitialSpace = 25;
      ctx.font = "20px Roboto Mono";
      ctx.fillStyle = textColors[Math.floor(Math.random() * 2)];
      ctx.fillText(
        captcha[i],
        xInitialSpace + i * letterSpace,

        // Randomize Y position slightly
        Math.floor(Math.random() * 16 + 25),
        100
      );
    }
  };

  const initializeCaptcha = (ctx) => {
    setUserInput("");
    const newCaptcha = generateCaptchaText();
    setCaptchaText(newCaptcha);
    drawCaptchaOnCanvas(ctx, newCaptcha);
  };
  const handleCaptchaSubmit = () => {
    if (userInput === captchaText) {
      validateCredentials();
    } else {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      initializeCaptcha(ctx);
    }
  };
  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };



  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    initializeCaptcha(ctx);
  }, []);
  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginCard}>
        <div className={classes.sideImage}></div>
        <div className={classes.rightContainer}>
          <div className={`${classes.cardContent} ${classes.loginCardContent}`}>
            <img
              src={Image}
              style={{
                height: "50px",
              }}
            ></img>
            <TextField
              label="Employee Id"
              variant="outlined"
              placeholder="Enter your Employee Id"
              className={classes.loginInput}
              color="secondary"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            ></TextField>
            <FormControl
              sx={{ m: 1, width: "80%" }}
              variant="outlined"
              color="secondary"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => {
                  adminPassword.current = e.target.value;
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((show) => !show)}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

                <div className={classes.canvasCover}>
              
                <canvas ref={canvasRef} className={classes.loginInput} height='50px'></canvas>
                <div
                  className={classes.reloadIcon2}
                  onClick={() =>
                    initializeCaptcha(canvasRef.current.getContext("2d"))
                  }
                >
                  <IconButton aria-label="reload" size="large">
                    <ReplayIcon fontSize="inherit" />
                  </IconButton>
                </div>

                </div>
              
              <TextField
                type="text"
                label="Enter the Text"
                color="secondary"
                placeholder="Image Text"
                value={userInput}
                onChange={handleUserInputChange}
                className={classes.loginInput}
              ></TextField>
            

            <Button
              onClick={handleLogin}
              variant="contained"
              color="secondary"
              style={{
                width: "40%",
              }}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageMain;
