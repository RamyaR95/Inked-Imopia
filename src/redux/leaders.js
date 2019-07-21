<<<<<<< HEAD
import * as ActionTypes from './ActionTypes';

export const Leaders = (state  = { isLoading: true,
    errMess: null,
    leaders:[]}, action) => {
switch (action.type) {
case ActionTypes.ADD_LEADERS:
return {...state, isLoading: false, errMess: null, leaders: action.payload};

case ActionTypes.LEADERS_LOADING:
return {...state, isLoading: true, errMess: null, leaders: []}

case ActionTypes.LEADERS_FAILED:
return {...state, isLoading: false, errMess: action.payload};

default:
return state;
}
=======
import * as ActionTypes from './ActionTypes';

export const Leaders = (state  = { isLoading: true,
    errMess: null,
    leaders:[]}, action) => {
switch (action.type) {
case ActionTypes.ADD_LEADERS:
return {...state, isLoading: false, errMess: null, leaders: action.payload};

case ActionTypes.LEADERS_LOADING:
return {...state, isLoading: true, errMess: null, leaders: []}

case ActionTypes.LEADERS_FAILED:
return {...state, isLoading: false, errMess: action.payload};

default:
return state;
}
>>>>>>> 0e6727fd4336c9b5c5867dffae617876b2f43db9
};