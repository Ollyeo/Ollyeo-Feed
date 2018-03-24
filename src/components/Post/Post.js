import React, { Component } from 'react';
import PostForm from './PostForm';
import PostButton from './PostButton';

import { connect } from 'react-redux';

import { FeedActions, PostActions } from 'system/store/actionCreators';

class Post extends Component {
 
  showModal = () => {
    PostActions.open().then( () => console.log('success'))
    .catch( () => console.log('error'));
  }
  handleCancel = () => {
    PostActions.close();
  }
  
  handleCreate = () => {
    const { author, title, img, content } = this.props;
    
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      FeedActions.add_feed(({author, title, content, img}))
      form.resetFields();
      PostActions.close();
    });
  }
  
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  
  render() {
    const { showModal, saveFormRef, handleCancel, handleCreate } = this;
    const { visible } = this.props;
    
    return (
      <div>
        <PostButton onClick={() => { showModal }}/>
        <PostForm
          wrappedComponentRef={saveFormRef}
          visible={visible}
          onCancel={handleCancel}
          onCreate={handleCreate}
        />
      </div>
    );
  }
}

export default connect(
    /*

    */
    ({post}) => ({
      author: post.get('author'),
      title: post.get('title'),
      files: post.get('files'),
      content: post.get('content'),
      visible: post.get('visible'),
    }),
)(Post);