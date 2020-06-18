import ShopActionTypes from './shop.types';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollctionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
})

export const fetchCollctionsSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap
})

export const fetchCollctionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
})

export const fetchCollctionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollctionStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollctionsSuccess(collectionMap));
      })
      .catch(error => dispatch(fetchCollctionsFailure(error)));

  }
}

