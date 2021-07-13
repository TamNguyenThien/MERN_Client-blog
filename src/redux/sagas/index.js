import { call, put, takeLatest } from 'redux-saga/effects'

import * as actions from '../actions'
import * as api from '../../api';

function* fetchPostSaga(action) {
  const posts = yield call(api.fetchPosts);
  console.log('**** cc posts', posts);
  yield put(actions.getPosts.getPostSuccess(posts.data))
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)
}

// generate function es6
export default mySaga