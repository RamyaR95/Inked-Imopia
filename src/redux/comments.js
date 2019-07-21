<<<<<<< HEAD
import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_COMMENTS:
        return {...state, errMess: null, comments: action.payload};
  
      case ActionTypes.COMMENTS_FAILED:
        return {...state, errMess: action.payload};
  
      case ActionTypes.ADD_COMMENT:
          var comment = action.payload;
          return { ...state, comments: state.comments.concat(comment)};
  
      default:
        return state;
    }
=======
import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_COMMENTS:
        return {...state, errMess: null, comments: action.payload};
  
      case ActionTypes.COMMENTS_FAILED:
        return {...state, errMess: action.payload};
  
      case ActionTypes.ADD_COMMENT:
          var comment = action.payload;
          return { ...state, comments: state.comments.concat(comment)};
  
      default:
        return state;
    }
>>>>>>> 0e6727fd4336c9b5c5867dffae617876b2f43db9
  };