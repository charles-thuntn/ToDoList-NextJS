import React from "react";
import PropTypes from "prop-types";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

function searchBox(props) {
  const classes = useStyles();
  const { handleChange } = props;
  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      style={{ marginBottom: 10 }}
    >
      <TextField
        autoComplete="off"
        placeholder="Search"
        className={classes.textFiled}
        onChange={handleChange}
        margin="normal"
      />
    </form>
  );
}

searchBox.propTypes = {};

export default searchBox;
