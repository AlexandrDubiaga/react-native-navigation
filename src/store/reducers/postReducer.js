import { LOAD_POSTS, TOOGLE_BOOKED ,DELETE_POST,ADD_POST} from "../types";


const initiallState = {
  allPosts: [],
  loadings:true
};
export const postReducer = (state = initiallState, action) => {
  switch (action.type) {
    case LOAD_POSTS: {
      return {
        ...state,
        allPosts: action.payload,
        loadings:false
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
    case ADD_POST:{
     //console.log(action.payload)
      return{
        ...state,
        allPosts: [{...action.payload},...state.allPosts]
      }
    }


    
    default:
      return state;
  }
};
