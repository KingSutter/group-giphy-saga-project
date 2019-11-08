import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* watcherSaga() {
    yield takeEvery('GET_SEARCH', getSearchSaga);
    yield takeEvery('GET_FAVORITES', getFavSaga);
    yield takeEvery('POST_FAVORITES', postFavSaga);
}

// GET request to server at /giphy to tell server to make an api call with the params passed.
function* getSearchSaga(action) {
    try {
        const giphyResponse = yield axios.get('/giphy', {
            params: action.payload,
        });
        yield put({ type: 'SET_SEARCH', payload: giphyResponse.data });
    } catch (error) {
        console.log('error fetching search results', error);
    }
}

// GET request to server to make pg call to database to retrieve favorites
function* getFavSaga() {
    try {
        const favResponse = yield axios.get('/favorites');
        yield put({ type: 'SET_FAVORITES', payload: favResponse.data });
    } catch (error) {
        console.log('error fetching favorites', error);
    }
}

// POST request to server to make pg call to databse to add new favorite
fuction * postFavSaga(action) {
    try {
        yield axios.post('/favorites', action.payload);
        yield put({ type: 'GET_FAVORITES' });
    } catch (error) {
        console.log('error posting favorite');
    }
}

export default watcherSaga;