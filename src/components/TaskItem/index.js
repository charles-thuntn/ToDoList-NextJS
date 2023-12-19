import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Fab,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import styles from "../TaskItem/styles";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(() => ({
  ...styles(),
}));

function TaskItem(props) {
  const { status, task } = props;
  const classes = useStyles();
  return (
    <Card key={task.id} className={classes.card}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item md={8}>
            <Typography component="h2">{task.title}</Typography>
          </Grid>
          <Grid
            item
            md={4}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            {status.label}
          </Grid>
        </Grid>
        <p>{task.description}</p>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Fab color="primary" aria-label="add" size="small">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit" size="small">
          <EditIcon />
        </Fab>
      </CardActions>
    </Card>
  );
}

TaskItem.propTypes = {};

export default TaskItem;
