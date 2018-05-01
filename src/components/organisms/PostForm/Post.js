import React, { Component } from 'react';
import PostForm from './PostForm';
import PostButton from './PostButton';

import { connect } from 'react-redux';
import { FeedActions, PostActions } from 'system/store/actionCreators';

class Post extends Component {
 
  showModal = () => {
    PostActions.open();
  }
  
  handleCancel = () => {
    PostActions.close();
  }
  
  handleCreate = () => {
    const { author, title, content, img } = this.props;
    
    console.log(title, content)
    
    const form = this.formRef.props.form;
    /*
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);

    });*/
    
    FeedActions.add_feed(({author, title, content, img}))
    
    form.resetFields();
    PostActions.close();
  }
  
  handleTitle = (text) => {
    PostActions.changeTitle(text);
    console.log(this.props.title)
  }
  
  handleContent = (text) => {
    PostActions.changeContent(text);
    console.log(this.props.content)
  }
  
  handleImageFile = (file) => {
    PostActions.uploadImageFile(file);
  }
  
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  
  render() {
    const { showModal, saveFormRef, handleCancel, handleCreate, handleTitle, handleContent, handleImageFile} = this;
    const { visible, author, title, img, content } = this.props;
    
    return (
      <div>
        <PostButton onClick={showModal}/>
        <PostForm
          wrappedComponentRef={saveFormRef}
          visible={visible}
          onCancel={handleCancel}
          onCreate={handleCreate}
          titleChange={handleTitle}
          contentChange={handleContent}
          upload={handleImageFile}
          author={author}
          title={title}
          img={img}
          content={content}
        />
      </div>
    );
  }
}

export default connect(
    ({post}) => ({
      author: post.get('author'),
      title: post.get('title'),
      img: post.get('img'),
      content: post.get('content'),
      visible: post.get('visible'),
    })
)(Post);