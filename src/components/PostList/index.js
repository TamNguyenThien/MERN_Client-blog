import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Post from './Post'

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import {postState$} from '../../redux/selectors'


export default function PostList() {
  const disPatch = useDispatch()

  const posts = useSelector(postState$);
  console.log('**** cclist posts', posts);

  useEffect(() => {
    disPatch(actions.getPosts.getPostsRequest())
  },[disPatch])

  return (
    <Grid container spacing={2} alignItems='stretch'>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} key={post._id}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
