import {LOAD_POSTS} from '../types'
const initiallState = {
  allPosts: [],
  bookedPosts: [],
};
export const postReducer = (state = initiallState, action) => {
  switch (action.type) {
    case LOAD_POSTS: {
      return {
        ...state,
        allPosts:action.payload,
        bookedPosts:action.payload.filter(p=>p.booked)
      };
    }
    default:
      return state;
  }
};
