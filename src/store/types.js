import { DB } from "../db";
import * as FileSystem from "expo-file-system";
export const LOAD_POSTS = "LOAD_POSTS";
export const TOOGLE_BOOKED = "TOOGLE_BOOKED";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST = "ADD_POST";

export const loadPosts = () => {
  return async (dispatch) => {
    const posts = await DB.getPosts();
    dispatch({
      type: LOAD_POSTS,
      payload: posts,
    });
  };
};

export const toogleBooked = (post) => async (dispatch) => {
 
  await DB.updatePost(post)

  dispatch({
    type: TOOGLE_BOOKED,
    payload: post.id,
  });
};
export const deletePost = (id) => async (dispatch) => {
  await DB.removePost(id)
  dispatch({
    type: DELETE_POST,
    payload: id,
  });
};

export const addPost = (post) => {
  const fileName = post.img.split("/").pop();
  const newPath = FileSystem.documentDirectory + fileName;
  try {
    FileSystem.moveAsync({
      to: newPath,
      from: post.img,
    });
  } catch (e) {
    console.log("Error" + e);
  }

  return async (dispatch) => {
    const payload = { ...post, img: newPath };
    const id = await DB.createPost(payload);
    payload.id = id;
    dispatch({
      type: ADD_POST,
      payload,
    });
  };
};
