import { call, all } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
  yield all([
    call(shopSagas),
  ]);
}