import React, { useEffect, useState } from "react";
// SVG Compoments
import Logo from "/public/SVG/Login/LinkdineLogo.svg";
// Material UI
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Stack,
  Typography,
  Input,
  Button,
  Divider,
  Chip,
  Autocomplete,
} from "@mui/joy";
import { InfoOutlined } from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";
// React Router
import { Link } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { setInitialData, setPersonalInfo } from "../REDUCERS/SiginUpReducer";

export const SignUp = () => {
  const [emailError, SetEmailError] = useState(false);
  const [email, setEmail] = useState("");
  const [passwordError, SetPasswordError] = useState(false);
  const [password, setPassword] = useState("");
  const [firstNameError, SetFirstNameError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastNameError, SetLastNameError] = useState(false);
  const [lastName, setLastName] = useState("");

  const [counter, SetCounter] = useState(0);
  const [ariaHidden, SetAriaHidden] = useState({});
  const [data, setData] = useState([]); // Initialize data as a state variable
  const [dataCities, SetDataCities] = useState([]);
  const [dataState, SetDataState] = useState([]);
  const [selectedData, SetSelectedData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json"
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch data. Status code: ${response.status}`
          );
        }
        const dataRes = await response.json();
        setData(dataRes); // Update the state with fetched data
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [data]);

  // Fcuntion
  const handlerCitites = () => {
    data.map((elem) => {
      SetDataCities((prev) => [...prev, elem.name]);
    });
  };
  const handlerState = (country) => {
    data.filter((idCountry) => {
      if (idCountry.name === country) {
        return idCountry.states ;
      }
    });
  };

  // ⁡⁢⁢⁣Redux Utis⁡
  const dispatach = useDispatch();

  const handleNext = (name) => {
    SetCounter((prevCounter) => {
      SetAriaHidden((prevAriaHidden) => ({
        ...prevAriaHidden,
        [name]: prevCounter,
      }));
      return prevCounter + 1;
    });
  };

  // Material UI

  return (
    <div className="flex flex-col items-center justify-start min-h-[780px] h-screen gap-5 overflow-hidden pb-10">
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
              textTransform: "capitalize",
              fontSize: "1rem",
            }}
            variant="outlined"
          >
            Join Now
          </Button>

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
          >
            Sign In
          </Button>
        </div>
        {/* Button of sign in and up */}
      </nav>
      ⁡⁣⁢⁢⁡⁢⁣⁢{/* 𝗦𝘁𝗮𝗿𝘁 𝗠𝗮𝗶𝗻 𝗖𝗼𝗻𝘁𝗲𝗻𝘁 */}⁡
      <Stack
        direction="column"
        justifyContent="start"
        alignItems="center"
        spacing={5}
      >
        <Typography level="h1">
          Make the most of your professional life
        </Typography>
        ⁡⁣⁢⁢{/* Start First Step */}⁡
        <Box
          sx={{
            width: "25rem",
            background: "white",
            p: "2rem",
            borderRadius: "1rem",
            boxShadow: "0px 0px 10px 0px #0000000a",
            display: Object.hasOwn(ariaHidden, "first") ? "none" : "",
          }}
          aria-hidden={Object.hasOwn(ariaHidden, "first")}
        >
          <Stack
            direction="column"
            justifyContent="start"
            alignItems="center"
            spacing={2}
          >
            <FormControl
              color={!emailError ? "neutral" : "danger"}
              sx={{
                width: "100%",
              }}
            >
              <FormLabel>
                <Typography variant="h1">Entrer votre mail</Typography>
              </FormLabel>
              <Input
                label={"Email"}
                type={"email"}
                variant="outlined"
                onBlur={(e) => {
                  SetEmailError(e.target.value.trim() !== "" ? false : true);
                  setEmail(e.target.value.trim());
                }}
                onChange={(e) => {
                  setEmail(e.target.value.trim());
                }}
                required
              />
              {emailError ? (
                <FormHelperText>
                  <InfoOutlined fontSize="1rem" />
                  <Typography color={!emailError ? "neutral" : "danger"}>
                    Votre mail est un valide
                  </Typography>
                </FormHelperText>
              ) : (
                ""
              )}
            </FormControl>

            <FormControl
              color={!passwordError ? "neutral" : "danger"}
              sx={{
                width: "100%",
              }}
            >
              <FormLabel>
                <Typography variant="h1">Entrer votre mots de passe</Typography>
              </FormLabel>
              <Input
                label={"password"}
                type={"password"}
                variant="outlined"
                onBlur={(e) => {
                  SetPasswordError(e.target.value.trim() !== "" ? false : true);
                  setPassword(e.target.value.trim());
                }}
                onChange={(e) => {
                  setPassword(e.target.value.trim());
                }}
                required
              />
              {passwordError ? (
                <FormHelperText color={!passwordError ? "neutral" : "danger"}>
                  <InfoOutlined fontSize="1rem" />
                  <Typography color={!passwordError ? "neutral" : "danger"}>
                    Mots de passe invalide
                  </Typography>
                </FormHelperText>
              ) : (
                ""
              )}
            </FormControl>

            <Button
              size="lg"
              variant="solid"
              type="submit"
              sx={{
                width: "100%",
                borderRadius: "1rem",
              }}
              onClick={() => {
                if (email !== "" || password !== "") {
                  dispatach(
                    setInitialData({
                      email: email,
                      password: password,
                    })
                  );
                  handleNext("first");
                }
              }}
            >
              Agree & Join
            </Button>
            <Divider
              sx={{
                m: "1rem 0 1rem 0",
              }}
            >
              <Chip size="lg" variant="plain">
                or
              </Chip>
            </Divider>

            <Button
              variant="outlined"
              size="lg"
              sx={{ width: "100%", borderRadius: "2rem" }}
              startDecorator={<FcGoogle />}
            >
              Connect with google account
            </Button>

            <Typography level="title-md">
              Already on Linkdine?{" "}
              <Link to="Login">
                <Typography
                  level="title-md"
                  color="primary"
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </Stack>
        </Box>
        ⁡⁣⁢⁢{/* Start First Step */}
        ⁡⁢⁣⁢ {/* Start Second Step */}⁡⁡
        <Box
          sx={{
            width: "25rem",
            background: "white",
            p: "2rem",
            borderRadius: "1rem",
            boxShadow: "0px 0px 10px 0px #0000000a",
            display: Object.hasOwn(ariaHidden, "Second") ? "none" : "",
          }}
          aria-hidden={Object.hasOwn(ariaHidden, "Second")}
        >
          <Stack
            direction="column"
            justifyContent="start"
            alignItems="center"
            spacing={2}
          >
            <FormControl
              color={!firstNameError ? "neutral" : "danger"}
              sx={{
                width: "100%",
              }}
            >
              <FormLabel>
                <Typography variant="h1">Entrer Nom</Typography>
              </FormLabel>
              <Input
                label={"Name"}
                type={"text"}
                variant="outlined"
                onBlur={(e) => {
                  SetFirstNameError(
                    e.target.value.trim() !== "" ? false : true
                  );
                  setFirstName(e.target.value.trim());
                }}
                onChange={(e) => {
                  setEmail(e.target.value.trim());
                }}
                required
              />
              {firstNameError ? (
                <FormHelperText>
                  <InfoOutlined fontSize="1rem" />
                  <Typography color={!firstNameError ? "neutral" : "danger"}>
                    Veuillez Saisir votre Nom
                  </Typography>
                </FormHelperText>
              ) : (
                ""
              )}
            </FormControl>

            <FormControl
              color={!lastNameError ? "neutral" : "danger"}
              sx={{
                width: "100%",
              }}
            >
              <FormLabel>
                <Typography variant="h1">Entrer Prenom</Typography>
              </FormLabel>
              <Input
                label={"Prenom"}
                type={"text"}
                variant="outlined"
                onBlur={(e) => {
                  SetLastNameError(e.target.value.trim() !== "" ? false : true);
                  setLastName(e.target.value.trim());
                }}
                onChange={(e) => {
                  setEmail(e.target.value.trim());
                }}
                required
              />
              {lastNameError ? (
                <FormHelperText>
                  <InfoOutlined fontSize="1rem" />
                  <Typography color={!lastNameError ? "neutral" : "danger"}>
                    Veuillez Saisir votre Prenom
                  </Typography>
                </FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
            <Button
              size="lg"
              color="primary"
              sx={{
                width: "100%",
                borderRadius: "1rem",
              }}
              onClick={() => {
                if (!firstName || !lastName) {
                  SetFirstNameError(true);
                  SetLastNameError(true);
                  return;
                }
                dispatach(
                  setPersonalInfo({
                    lastName: lastName,
                    firstName: firstName,
                  })
                );
                handleNext("Second");
                handlerCitites();
              }}
            >
              Continue
            </Button>
          </Stack>
        </Box>
        ⁡⁢⁣⁢{/* 𝗘𝗡𝗗 𝗦𝗲𝗰𝗼𝗻𝗱 𝗦𝘁𝗲𝗽 */}⁡ ⁡⁢⁢
        ⁢{/* START 𝗧𝗵𝗶𝗿𝘁𝗵 𝗦𝘁𝗲𝗽 */}⁡
        <Box
          sx={{
            width: "25rem",
            background: "white",
            p: "2rem",
            borderRadius: "1rem",
            boxShadow: "0px 0px 10px 0px #0000000a",
            display: Object.hasOwn(ariaHidden, "thirth") ? "none" : "",
          }}
          aria-hidden={Object.hasOwn(ariaHidden, "thirth")}
        >
          <Stack
            direction="column"
            justifyContent="start"
            alignItems="center"
            spacing={2}
          >
            <FormControl
              color={!lastNameError ? "neutral" : "danger"}
              sx={{
                width: "100%",
              }}
            >
              <FormLabel>
                <Typography variant="h1">Pays/Region</Typography>
              </FormLabel>
              <Autocomplete
                options={dataCities}
                onChange={(event, value) => {
                  SetSelectedData(value);
                  SetDataState(handlerState(value));
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Label"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
              {lastNameError ? (
                <FormHelperText>
                  <InfoOutlined fontSize="1rem" />
                  <Typography
                    color={!lastNameError ? "neutral" : "danger"}
                  ></Typography>
                </FormHelperText>
              ) : (
                ""
              )}
            </FormControl>

            <FormControl
              color={!lastNameError ? "neutral" : "danger"}
              sx={{
                width: "100%",
              }}
            >
              <FormLabel>
                <Typography variant="h1">Pays/Region</Typography>
              </FormLabel>
              <Autocomplete options={dataState} />
              {lastNameError ? (
                <FormHelperText>
                  <InfoOutlined fontSize="1rem" />
                  <Typography
                    color={!lastNameError ? "neutral" : "danger"}
                  ></Typography>
                </FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </Stack>
        </Box>
        ⁡⁢⁢⁢{/* 𝗘𝗡𝗗 𝗧𝗵𝗶𝗿𝘁𝗵 𝗦𝘁𝗲𝗽 */}⁡
      </Stack>
      ⁡⁢⁣⁢ {/* 𝗘𝗡𝗗 𝗠𝗮𝗶𝗻 𝗖𝗼𝗻𝘁𝗲𝗻𝘁 */}⁡
    </div>
  );
};
