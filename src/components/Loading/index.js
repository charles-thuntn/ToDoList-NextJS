import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import styles from "./styles";
import { Dialog, DialogContent } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  ...styles(),
}));

function Loading(props) {
  const classes = useStyles();
  const { onLoading } = props;
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // });

  // const handleClose = () => {
  //   // setIsLoading(false);
  // };
  return (
    <>
      <Dialog
        className={classes.root}
        open={onLoading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <img
            src="/img/loading2.gif"
            alt="Loading"
            className={classes.iconLoading}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Loading;
