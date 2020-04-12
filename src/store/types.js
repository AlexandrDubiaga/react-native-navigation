import { DATA } from "../data";

export const LOAD_POSTS = "LOAD_POSTS";
export const TOOGLE_BOOKED = "TOOGLE_BOOKED";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST = "ADD_POST";



export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA,
  };
};

export const toogleBooked = (id) => {
  return {
    type: TOOGLE_BOOKED,
    payload: id,
  };
};
export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    payload: id,
  };
};
export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

