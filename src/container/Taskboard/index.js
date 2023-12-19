import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Button, makeStyles, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { STATUSES } from "../../Constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import { fetchListTask, fetchListTaskRequest } from "../../actions/task";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBox from "../../components/SearchBox";
import { filterListTask } from "../../actions/filter";
import { changeModelTitle, showModal } from "../../actions/modal";
import ToastTmp from "../../components/toastTmp";
import { testFalse, testHaveData, testTrue } from "../../Tmp/actions";

const useStyles = makeStyles(() => ({
  ...styles(),
}));

function Taskboard(props) {
  const listTask = useSelector((state) => state.task.listTask);
  const onLoading = useSelector((state) => state.loading.onLoading);
  const showDialog = useSelector((state) => state.modal.showModal);
  const truefalse = useSelector((state) => state.test.testTrueFalse);
  
  const data = useSelector((state) => state.test.testHaveData);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleClick = () => {
    dispatch(showModal());
    dispatch(changeModelTitle("Thêm mới công việc"));
  };

  useEffect(() => {
    dispatch(fetchListTask());
  }, []);

  const handleLoadData = () => {
    /**dùng thunk */
    //dispatch(fetchListTaskRequest());
    /**dùng saga */
    dispatch(fetchListTask());
  };

  const handleFilter = (e) => {
    const { value } = e.target;
    console.log("🚀 ~ file: index.js:52 ~ handleFilter ~ value:", value)
    dispatch(filterListTask(value));
  };

  const handleTestTrue = () => {
    const action = testTrue();
    dispatch(action);
  };
  const handleTestFalse = () => {
    const action = testFalse();
    dispatch(action);
  };
  const handleTestHaveData = () => {
    const action = testHaveData("<---Test data data data---->");
    dispatch(action);
  };

  return (
    <div className={classes.taskBoard}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      {onLoading && <Loading onLoading={onLoading} />}
      <Button
        style={{ marginRight: "8px" }}
        onClick={handleLoadData}
        variant="contained"
        color="secondary"
      >
        Load Data
      </Button>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        <AddIcon /> Add new activities
      </Button>
      {showDialog && <TaskForm open={showDialog} />}
      <SearchBox handleChange={handleFilter} />
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFittered = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList key={index} taskFittered={taskFittered} status={status} />
          );
        })}
      </Grid>
      {/* <Grid container>
        <Button variant="contained" onClick={handleTestTrue}>
          Test True
        </Button>
        <Button variant="contained" onClick={handleTestFalse}>
          Test False
        </Button>
        <Button variant="contained" onClick={handleTestHaveData}>
          Test Have Data
        </Button>
      </Grid> */}
      {/* <ToastTmp /> */}
    </div>
  );
}

export default Taskboard;
