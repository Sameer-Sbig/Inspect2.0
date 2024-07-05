import "./Login.css";
import Image from "../assets/loginPage.jpg";
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

const LoginPage = () => {
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

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    initializeCaptcha(ctx);
  }, []);

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <div className="sideImage"></div>
        <div className="rightContainer">
          {/* <div className='iconContainer'>
      <CoffeeIcon sx={{color: 'purple'}} fontSize='large'></CoffeeIcon>
      </div> */}
          <div className="cardContent loginCardContent">
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
              className="loginInput"
              color="secondary"
              onChange={(e) => {
                adminUserName.current = e.target.value;
              }}
            />

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
            <Button
              onClick={() => {
                setShowCaptcha(true);
              }}
              variant="contained"
              color="secondary"
              style={{
                width: "40%",
              }}
            >
              Log In
            </Button>
            {/* <div className='moreInfo'>
            <span onClick={() => {
              setPage('Register');
            }}>Register now</span>
            <span>Forgot Password</span>
            </div> */}
            {error && (
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setError(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                <AlertTitle>{errorText}</AlertTitle>
                Check your username or password
              </Alert>
            )}
            <div
              className="captchaContainer"
              style={{
                display: showCaptcha ? "block" : "none",
              }}
            >
              <AppBar
                sx={{
                  position: "relative",
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  background: "purple",
                }}
              >
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={() => {
                      setShowCaptcha(false);
                    }}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    sx={{ ml: 2, flex: 1 }}
                    variant="h6"
                    component="div"
                  >
                    Captcha Verify
                  </Typography>
                </Toolbar>
              </AppBar>
              <div className="container">
                <div className="wrapper">
                  <canvas ref={canvasRef} width="190" height="60"></canvas>
                  {/* <div className='reloadIcon' onClick={
                      () => initializeCaptcha(
                        canvasRef.current.getContext('2d'))
                    } style={{
                      alignSelf: 'center'
                    }} >
                    <ReplayIcon></ReplayIcon>
                    </div> */}
                  <div
                    className="reloadIcon2"
                    onClick={() =>
                      initializeCaptcha(canvasRef.current.getContext("2d"))
                    }
                  >
                    <IconButton aria-label="reload" size="large">
                      <ReplayIcon fontSize="inherit" />
                    </IconButton>
                  </div>
                  {/* <Button onClick={
                      () => initializeCaptcha(
                        canvasRef.current.getContext('2d'))
                    } variant='contained' color='secondary'>
                      Reload
                    </Button> */}
                  {/* <button id="reload-button" onClick={
                        () => initializeCaptcha(
                            canvasRef.current.getContext('2d'))}>
                        Reload
                    </button>  */}
                </div>
                <TextField
                  type="text"
                  label="Enter the Text"
                  color="secondary"
                  placeholder="Image Text"
                  value={userInput}
                  onChange={handleUserInputChange}
                ></TextField>
                {/* <input
                    type="text"
                    id="user-input"
                    placeholder="Enter the text in the image"
                    value={userInput}
                    onChange={handleUserInputChange}/>  */}
                <div className="captchaSubmit">
                  <Button
                    onClick={handleCaptchaSubmit}
                    color="secondary"
                    variant="contained"
                    sx={{
                      width: "80%",
                    }}
                  >
                    Submit
                  </Button>
                </div>
                {/* <button id="submit-button"
                    onClick={handleCaptchaSubmit}>
                    Submit
                </button>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
