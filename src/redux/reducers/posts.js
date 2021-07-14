import { INIT_STATE } from "../../Constant";
import { createPost, getPosts, getType, updatePost } from "../actions";

export default function postsReducers(state= INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest): // case 'getPostRequest
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostsSuccess): // case 'getPostRequest
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPosts.getPostsFailure): // case 'getPostRequest
      return {
        ...state,
        isLoading: false,
      };

    case getType(createPost.createPostSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case getType(updatePost.updatePostSuccess):
      return {
        ...state,
        data: state.data.map(post => post._id === action.payload._id ? action.payload : post),
      };
    default:
      return state;
  }

}