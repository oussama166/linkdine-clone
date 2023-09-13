import React, { useRef, useState } from "react";
import { Input, Stack, Button, Modal, Sheet, ModalClose, Box } from "@mui/joy";
import { Typography } from "@mui/joy";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../fireBase";
import { Link, redirect } from "react-router-dom";

export const ForgetPass = () => {
  const [isSent, SetIsSent] = useState({ sentTo: "", Error: "" });
  const [emailData, SetEmailData] = useState("");
  const [isOpen, SetOpen] = useState(true);
  // Reset password
  const resetPassword = async (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        SetIsSent((prev) => ({
          ...prev,
          sentTo: `The Reset message was sent to : ${email}`,
          Error: "",
        }));
      })
      .catch((error) => {
        const errorMessage = error.message;
        SetIsSent((prev) => ({
          ...prev,
          sentTo: "",
          Error: errorMessage,
        }));
      });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Stack
        className=" flex flex-col bg-white shadow-lg rounded-lg px-5 py-3 items-start"
        spacing={2}
        display={"flex"}
        flexDirection={"column"}
        backgroundColor={"white"}
        boxShadow={3}
        borderRadius={16}
        p={4}
        maxWidth={400}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "#000",
            textAlign: "center",
            margin: "20px 0",
            fontSize: "2rem",
          }}
        >
          Forget Password?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            textAlign: "center",
            margin: "0px 0px 20px 0px",
          }}
        >
          Reset password in two quick steps
        </Typography>

        <Input
          fullWidth
          variant="outlined"
          placeholder="Email or Phone"
          type={"email" || "tel"}
          required
          onKeyUp={(e) => {
            SetEmailData(e.target.value);
          }}
        />
        <Button
          fullWidth
          size={"lg"}
          variant="solid"
          color={"primary"}
          sx={{
            borderRadius: "2rem",
          }}
          onClick={() => {
            const email = emailData || "";
            resetPassword(email);
          }}
        >
          Reset Password
        </Button>
        <Link to={"/"} className="w-full">
          <Button
            fullWidth
            size={"lg"}
            variant="plain"
            color="neutral"
            sx={{ borderRadius: "2rem" }}
          >
            Back
          </Button>
        </Link>
      </Stack>
      {/* Modal  */}

      <Modal
        aria-labelledby="close-modal-title"
        open={isSent.Error !== "" || isSent.sentTo !== "" ? true : false}
        onClose={(_event) => {
          SetOpen(false);
          SetIsSent({ Error: "", sentTo: "" });
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            minWidth: 300,
            borderRadius: "md",
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: 5,
            }}
          >
            <Link to="/">
              <ModalClose variant="outlined" />
            </Link>
          </Box>
          <Typography
            component="h2"
            id="close-modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
          >
            {isSent.sentTo}
          </Typography>
        </Sheet>
      </Modal>

      {/* End Modal */}
    </div>
  );
};
