import React, { useCallback } from 'react'
import { Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

// component
import Header from '../components/Header';
import PostList from '../components/PostList';

// styles
import useStyles from './styles'
import { showModal } from '../redux/actions';
import { useDispatch } from 'react-redux';
import CreatePostModal from '../components/CreatePostModal';

export default function Homepage() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const openCreatePostModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <Header />
      <PostList />
      <CreatePostModal />

      <Fab
        color='primary'
        className={classes.fab}
        onClick={openCreatePostModal}>
        <AddIcon />
      </Fab>
    </Container>
  );
}
