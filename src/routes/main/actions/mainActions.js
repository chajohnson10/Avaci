import API from "global/services/api";

export const MAIN_SEARCH_SUCCESS = 
    "MAIN_SEARCH_SUCCESS";

export const MAIN_DELETE_SUCCESS =
    "MAIN_DELETE_SUCCESS";

export function searchSuccess(data) {
    return {type: MAIN_SEARCH_SUCCESS, data};
}

export function deleteSuccess(ids) {
    return {type: MAIN_DELETE_SUCCESS, ids};
}

export function doSearch(data, onSuccess, onError){
    return function(dispatch) {
        let request = "url"
        return API.get(request)
        .then(res => {
            dispatch(searchSuccess(res.data));
            onSuccess(res);
        })
        .catch(err => {
            onError(err);
        });
    };
}

export function deleteMain(ids, onSuccess, onError){
    return function (dispatch) {
        return API.delete("url", {data: JSON.stringify(ids)})
        .then(res => {
            dispatch(deleteSuccess(ids));
            onSuccess(res);
        })
        .catch(err => {
            onError(err);
        })
    }
}