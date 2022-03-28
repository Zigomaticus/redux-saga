import { put, call, takeEvery } from "redux-saga/effects";
// Actions
import {
  USER_POSTS_FETCH_REQUESTED,
  USER_POSTS_FETCH_SUCCEEDED,
  USER_POSTS_FETCH_FAILED,
} from "./actions";
// Api
import { getUserPosts } from "../api/posts";

function* fetchUserPost(action) {
  try {
    const userPosts = yield call(getUserPosts, action.payload.userId);
    yield put({
      type: USER_POSTS_FETCH_SUCCEEDED,
      payload: {
        data: userPosts,
      },
    });
  } catch (error) {
    yield put({
      type: USER_POSTS_FETCH_FAILED,
      payload: {
        message: error.message,
      },
    });
  }
}

export function* saga() {
  yield takeEvery(USER_POSTS_FETCH_REQUESTED, fetchUserPost);
}
