import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, TextField, Modal, Grid, Box } from "@material-ui/core";
import styles from "./styles";
import theme from "../../common/theme";
import { hideModal } from "../../actions/modal";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  ...styles(theme),
}));

export default function FormDialog(props) {
  const title = useSelector((state) => state.modal.title);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { open, setOpen } = props;

  const onClose = () => {
    dispatch(hideModal());
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.modalStyles}>
        <div className={classes.header}>
          <span className={classes.title}>{title}</span>
          <Button onClick={onClose} className={classes.title}>
            Close
          </Button>
        </div>
        <form>
          <Grid container className={classes.content}>
            <Grid item md={12}>
              <TextField
                fullWidth
                id="standard-name"
                label="Title"
                className={classes.textField}
                margin="normal"
              ></TextField>
            </Grid>
            <Grid item md={12}>
              <TextField
                fullWidth
                id="standard-name"
                label="Description"
                className={classes.textField}
                margin="normal"
                multiline
              ></TextField>
            </Grid>
            <Grid item md={12}>
              <Box mt={1} display="flex" justifyContent="flex-end">
                <Box mr={1}>
                  <Button variant="contained" color="primary">
                    ADD
                  </Button>
                </Box>
                <Button variant="contained" onClick={onClose}>
                  CANCEL
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </div>
    </Modal>
  );
}
