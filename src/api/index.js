import axios from 'axios'

const URL = 'https://dev-culi.herokuapp.com';

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) => axios.post(`${URL}/posts/update`, payload);