<<<<<<< HEAD
import * as ActionTypes from './ActionTypes';

export const Promotions = (state  = { isLoading: true,
    errMess: null,
    promotions:[]}, action) => {
switch (action.type) {
case ActionTypes.ADD_PROMOS:
return {...state, isLoading: false, errMess: null, promotions: action.payload};

case ActionTypes.PROMOS_LOADING:
return {...state, isLoading: true, errMess: null, promotions: []}

case ActionTypes.PROMOS_FAILED:
return {...state, isLoading: false, errMess: action.payload};

default:
return state;
}
=======
import * as ActionTypes from './ActionTypes';

export const Promotions = (state  = { isLoading: true,
    errMess: null,
    promotions:[]}, action) => {
switch (action.type) {
case ActionTypes.ADD_PROMOS:
return {...state, isLoading: false, errMess: null, promotions: action.payload};

case ActionTypes.PROMOS_LOADING:
return {...state, isLoading: true, errMess: null, promotions: []}

case ActionTypes.PROMOS_FAILED:
return {...state, isLoading: false, errMess: action.payload};

default:
return state;
}
>>>>>>> 0e6727fd4336c9b5c5867dffae617876b2f43db9
};