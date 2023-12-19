import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import styles from "./styles";
import TaskItem from "../TaskItem";

const useStyles = makeStyles(() => ({
  ...styles(),
}));

function TaskList(props) {
  const { status, taskFittered } = props;
  const classes = useStyles();
  return (
    <Grid item md={4} sm={4} key={status.value}>
      <div style={{ marginBottom: "16px" }}>
        <div className={classes.status}>{status.label}</div>
      </div>
      <div className={classes.wrapperListTask}>
        {taskFittered.map((task, index) => {
          return <TaskItem key={index} status={status} task={task} />;
        })}
      </div>
    </Grid>
  );
}

export default TaskList;
