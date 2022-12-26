import {
    SET_MOVIES_TO_SECTION,
    SET_SEARCH_RESULTS,
    SET_CURRENT_MOVIE,
} from './types';

const initialState = {
    popular: [],
    top_rated: [],
    upcoming: [],
    searchResult: [],
    currentMovie: {},
};

const movies = (state = initialState, action) => {
    switch (action.type) {

        case SET_MOVIES_TO_SECTION: {
            let newState = { ...state };
            const { section, result } = action.payload;

            newState[section] = result;

            return { ...newState }
        }

        case SET_SEARCH_RESULTS: {
            let newState = { ...state };
            const result = action.payload;
            console.log(result)
            newState.searchResult = result;
            return { ...newState }
        }

        case SET_CURRENT_MOVIE: {
            let newState = { ...state };

            newState.currentMovie = action.payload;

            return { ...newState }
        }

        default:
            return state
    }
}

export { movies };