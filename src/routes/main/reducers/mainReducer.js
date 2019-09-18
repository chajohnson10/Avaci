import * as Actions from "../actions/mainActions";

export default function mainReducer(state = {}, action) {
    switch (action.type) {
        case Actions.MAIN_SEARCH_SUCCESS:
            return{...state, results: action.data};
        case Actions.MAIN_DELETE_SUCCESS:
            return{...state, results: [
                ...state.results.filter(res => !Actions.MAIN_DELETE_SUCCESS.includes(res.id))
            ]};
        default:
            return state;
    }
}