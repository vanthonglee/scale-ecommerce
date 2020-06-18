import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import {
  fetchCollctionsSuccess,
  fetchCollctionsFailure
} from './shop.actions'

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  yield console.log('Fired')

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollctionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollctionsFailure(error))
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync);

}