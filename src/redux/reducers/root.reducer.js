import { combineReducers } from 'redux';

const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return action.payload;
        default:
            return state;
    }
}

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return action.payload;
        default:
            return state;
    }
}


const allReducers = combineReducers({
    searchReducer,
    favoritesReducer,
});

export default allReducers;