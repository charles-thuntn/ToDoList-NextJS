import { FETCH_TASK, STATUS_CODE } from "../Constants/task";
import { getList } from "../apis/task";
import {
  fetchListTaskSuccess,
  fetchListTaskFailed,
  fetchListTask,
} from "../actions/task";
import {
  call,
  take,
  fork,
  put,
  delay,
  takeLatest,
  select,
} from "redux-saga/effects";
import { offLoading, onLoading } from "../actions/loading";
import { FILTER_TASK } from "../Constants/filter";
import { filterListTaskSuccess } from "../actions/filter";
import { toastSuccess } from "../common/helper/notification";

function* watchFetchListTaskAction() {
  while (true) {
    yield take(FETCH_TASK);
    yield put(onLoading());
    const response = yield call(getList);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(500);
    yield put(offLoading());
  }
}

function* filterListTask({ payload }) {
  yield delay(1000);
  const { keyword } = payload;
  const listTask = yield select((state) => state.task.listTask);
  console.log("🚀 ~ file: index.js:42 ~ function*filterListTask ~ listTask:", listTask)

  console.log("🚀 ~ file: index.js:44 ~ function*filterListTask ~ keyword:", keyword)
  if (keyword) {
    const data = listTask.filter((task) =>
      (task.title.trim().toLowerCase().includes(keyword.toLowerCase().trim()) || task.description.trim().toLowerCase().includes(keyword.toLowerCase().trim()))
    );
    console.log("function*filterListTask -> data", data);

    yield put(filterListTaskSuccess(data));
  }
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(FILTER_TASK, filterListTask);
}
export default rootSaga;
