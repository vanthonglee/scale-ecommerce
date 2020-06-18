import { call, all } from 'redux-saga/effects';

import { fetchCollectionStart } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
export default function* rootSaga() {
  yield all([
    call(fetchCollectionStart),
    call(userSagas)
  ]);
}