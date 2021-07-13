import { INIT_STATE } from "../../Constant";
import { getPosts, getType } from "../actions";

export default function postsReducers(state= INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest): // case 'getPostRequest
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostSuccess): // case 'getPostRequest
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case getType(getPosts.getPostFailure): // case 'getPostRequest
      return {
        ...state,
        isLoading: false ,
      };
    default:
      return state;
  }

}