import { LOAD_POSTS, TOOGLE_BOOKED ,DELETE_POST} from "../types";
const initiallState = {
  allPosts: []
};
export const postReducer = (state = initiallState, action) => {
  switch (action.type) {
    case LOAD_POSTS: {
      return {
        ...state,
        allPosts: action.payload
      };
    }
    case TOOGLE_BOOKED: {
      return {
        ...state,
        allPosts: state.allPosts.map((currentPost) => {
          if (currentPost.id === action.payload) {
            return {
              ...currentPost,
              booked: currentPost.booked ? false : true,
            };
          }
          return currentPost;
        })
      };
    }
    case DELETE_POST:{
      return{
        ...state,
        allPosts: state.allPosts.filter(p=>p.id!==action.payload)
      }
    }
    default:
      return state;
  }
};
