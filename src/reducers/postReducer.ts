// Import all actions
import * as actions from '../actions/postActions';
type action = {
    payload: object,
    type: string
}
export const initialState = {
    posts:[],
    loading: false,
    hasError: false
}
export default function postReducer(state = initialState, action:action){
    switch(action.type){
        case actions.GET_POSTS:
            return { ...state, loading: true }
          case actions.GET_POSTS_SUCCESS:
            return { posts: action.payload, loading: false, hasErrors: false }
          case actions.GET_POSTS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
          default:
            return state
    }
}