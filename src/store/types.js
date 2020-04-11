import { DATA } from "../data";

export const LOAD_POSTS = "LOAD_POSTS";

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA,
  };
};
