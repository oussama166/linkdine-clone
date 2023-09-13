import React, { useEffect, useState } from "react";
// SVG
import Logo from "/public/SVG/Login/LinkdineLogo.svg";
// Icons
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
// Material UI
import { Button, Stack, Input, Typography, Divider } from "@mui/joy";
import { createTheme } from "@mui/material";
// Firebase
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../fireBase";
// React router
import { Link, useNavigate } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { connectError, isConnect } from "../REDUCERS/registerReducer";
import { setLoading } from "../API/Loading";
import Load from "./utils/Load";

const theme = createTheme({
  palette: {
    buttonSign: {
      priamry: "#000000bf",
      secondary: "",
    },
  },
});

function Login() {
  // Using dispatch
  const dispatch = useDispatch();
  const isOnline = useSelector((state) => state.login.isOnline);
  const typeError = useSelector((state) => state.login.typeError["name"]);
  const [showPass, setShowPass] = useState(false);
  const isLoading = useSelector((state) => state.loading.isLoading);

  // SignIn
  // SigIn with email and password
  const handleSingIn = async (email, password) => {
    const connect = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          isConnect({
            uid: user.uid,
            userName: email.split("@")[0],
            email: email,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code.split("/")[1].replaceAll("-", " ");
        console.log(errorCode);
        switch (errorCode) {
          case "wrong password":
            dispatch(
              connectError({
                name: errorCode,
                description:
                  "Les informations de connexion que vous avez fournies sont incorrectes. Veuillez vérifier votre nom d'utilisateur et votre mot de passe, puis réessayez.",
                field: ["password"],
              })
            );
            break;
          case "invalid email":
            dispatch(
              connectError({
                name: errorCode,
                description:
                  "Les informations de connexion que vous avez fournies sont incorrectes. Veuillez vérifier votre nom d'utilisateur et votre mot de passe, puis réessayez.",
                field: ["email"],
              })
            );
            break;
          case "user not found":
            dispatch(
              connectError({
                name: errorCode,
                description:
                  "Utilisateur introuvable,veuillez career un compte",
                field: ["email", "password"],
              })
            );
            break;
          default:
            dispatch(
              connectError({
                name: errorCode,
                description: "",
                field: "",
              })
            );
            break;
        }
      });
    console.log(connect);
  };
  //
  const [handleData, setHandleData] = useState({ email: "", password: "" });

  // Login With google using firebase popup
  const handleSignInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        if (user !== "") {
          dispatch(
            isConnect({
              uid: user.uid,
              userName: user.displayName,
              email: user.email,
            })
          );
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorCode, errorCode, email, credential);
      });
  };

  // Initialize the navigate object
  const history = useNavigate();

  // This assures if is connected not back to login page
  useEffect(() => {
    // If the user isOnline (connected), navigate to the '/home' route
    if (isOnline) {
      history("/home");
    }
    // Simulate loading completion after 2 seconds (replace with your actual loading logic)
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, [isOnline, history, dispatch]);

  return (
    <>
      {isLoading ? (
        <Load />
      ) : (
        <div className="flex flex-col items-center justify-start min-h-[780px] h-full gap-12 bg-white">
          {/* NavBar Login */}
          <nav className="flex flex-row items-center justify-between w-full py-7 px-16">
            <div className="flex flex-row items-center  w-1/2 h-full">
              <Logo className={`w-32`} />
            </div>

            {/* Button of sign in and up */}
            <div className={`flex flex-row gap-5 items-start justify-center`}>
              <Button
                sx={{
                  width: "7rem",
                  height: "3rem",
                  borderRadius: "3rem",
                  fontWeight: "600",
                  color: "#000000bf",
                  background: "",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  "&:hover": {
                    color: "#000000e6",
                    background: "#0000000a",
                  },
                }}
                color="buttonSign.primary"
              >
                Join Now
              </Button>

              <Button
                sx={{
                  width: "7rem",
                  height: "3rem",
                  borderRadius: "3rem",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                }}
                variant="outlined"
              >
                Sign In
              </Button>
            </div>
            {/* Button of sign in and up */}
          </nav>
          <main className="w-full h-full flex flex-row gap-3">
            <div className=" flex flex-col gap-5 w-1/2 h-full px-16">
              <h1 className="text-6xl text-[#8f5849] w-[44.375rem] font-light">
                Find jobs through your community
              </h1>
              <form method="post">
                <Stack spacing={1} width={"25rem"}>
                  <Typography>Email or phone</Typography>
                  <Input
                    placeholder=""
                    variant="outlined"
                    type="email"
                    required
                    onKeyUp={(e) => {
                      setHandleData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }));
                    }}
                  />
                  <Typography>Password</Typography>
                  <Input
                    placeholder=""
                    variant="outlined"
                    type={showPass ? "text" : "password"}
                    required
                    endDecorator={
                      showPass ? (
                        <BsEye
                          onClick={() => setShowPass(!showPass)}
                          className="cursor-pointer"
                        />
                      ) : (
                        <BsEyeSlash
                          onClick={() => setShowPass(!showPass)}
                          className="cursor-pointer"
                        />
                      )
                    }
                    onKeyUp={(e) => {
                      setHandleData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }));
                    }}
                  />
                  <Typography
                    sx={{
                      paddingBlock: ".8rem",
                      color: "#185ea5",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    <Link to="/Forget" style={{ textDecoration: "none" }}>
                      Forget Password?
                    </Link>
                  </Typography>
                  <Button
                    type="button"
                    size="lg"
                    sx={{
                      color: "white",
                      background: "#0a66c2",
                      borderRadius: "2rem",
                    }}
                    onClick={(e) =>
                      handleSingIn(handleData.email, handleData.password)
                    }
                  >
                    Sign in
                  </Button>
                  <Divider>or</Divider>
                  <Button
                    variant="outlined"
                    size="lg"
                    sx={{ borderRadius: "2rem" }}
                    startDecorator={<FcGoogle />}
                    onClick={() => {
                      handleSignInWithGoogle();
                    }}
                  >
                    Connect with google account
                  </Button>

                  <Link to="SignUp" className="w-full">
                    <Button
                      variant="outlined"
                      size="lg"
                      sx={{
                        width: "100%",
                        border: "1px solid rgba(0,0,0,.2)",
                        borderRadius: "2rem",
                        "&:hover": {
                          background: "#0000000a",
                          transition: "all .5s ease-in-out",
                        },
                        "&:active": {
                          background: "rgba(0,0,0,.4)",
                        },
                      }}
                      color="buttonSign.primary"
                    >
                      New to LinkedIn? Join now
                    </Button>
                  </Link>
                </Stack>
              </form>
            </div>
            <div className="bg-hero-login w-1/2 background "></div>
          </main>
        </div>
      )}
    </>
  );
}

export default Login;
