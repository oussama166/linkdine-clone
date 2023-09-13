import React from "react";
import { Modal, ModalDialog, Typography } from "@mui/joy";

export const Loading = ({ open }) => {
  return (
    <React.Fragment>
      <Modal open={open}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <Typography id="basic-modal-dialog-title" level="h2">
            Create new project
          </Typography>
          <Typography id="basic-modal-dialog-description">
            Fill in the information of the project.
          </Typography>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
};
