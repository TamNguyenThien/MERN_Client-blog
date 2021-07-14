import React, { useCallback, useState } from 'react'
import FileBase64 from 'react-file-base64'
import { Modal, TextField, TextareaAutosize, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { modalState$ } from '../../redux/selectors'
import {createPost, hideModal} from '../../redux/actions'
import useStyles from './styles'

export default function CreatePostModal() {
  const { isShow } = useSelector(modalState$)
  const [data, setData] = useState({
    title: '',
    content: '',
    attachment: ''
  })
  const dispatch = useDispatch()
  const classes = useStyles()
  const onClose = useCallback(() => {
    dispatch(hideModal())
    setData({
      title: '',
      content: '',
      attachment: '',
    });
  },[dispatch])

  const onSubmit = useCallback(() => {
    dispatch(createPost.createPostRequest(data));
    onClose()
  }, [data, dispatch]);

  const body = (
    <div className={classes.paper} id='simple-modal-title'>
      <h2>Create New Post</h2>
      <form noValidate autoComplete='off' className={classes.form}>
        <TextField
          required
          label='Title'
          value={data.title}
          className={classes.title}
          onChange={(event) => setData({ ...data, title: event.target.value })}
        />
        <TextareaAutosize
          rowsMin={10}
          rowsMax={15}
          value={data.content}
          placeholder='Content...'
          className={classes.textarea}
          onChange={(event) =>
            setData({ ...data, content: event.target.value })
          }
        />
        <FileBase64
          accept='image/*'
          multiple={false}
          type='file'
          value={data.attachment}
          onDone={({ base64 }) => setData({...data, attachment: base64})}
        />
        <div className={classes.footer}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
            >
            Create
          </Button>
        </div>
      </form>
    </div>
  );


  return (
    <div>
      <Modal open={isShow} onClose={onClose} >
        {body}
      </Modal>

    </div>
  )
}
