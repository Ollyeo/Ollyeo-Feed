import React, { Component } from 'react';
import { PostButton, PostContent, PostHeader, PostImageDropBox,
        PostModal, PostTitle } from 'components';

import { Modal, Form, Icon, Input } from 'antd';

//import { createForm, createFormField } from 'rc-form';

const FormItem = Form.Item;
const { TextArea } = Input;

class PostForm extends Component {

    normFile = (e) => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }

    render() {
        const { visible, onCancel, onCreate, form, title } = this.props;
        const { handleTitle, handleContent, handleImageFile } = this.props;
        const { getFieldDecorator, getFieldError } = form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { sapn: 14 },
        };
      
        return (
            <PostModal visible={visible}
                        onCancel={onCancel} 
                        onOk={onCreate}>
                <Form layout="vertical">
                    <FormItem label="Title">
                        {
                            getFieldDecorator('title', {
                                rules: [
                                            { 
                                                required: true, 
                                                message: 'Please input the title of collection!' 
                                            }
                                        ],
                            })
                            (<PostTitle />)
                        }
                    </FormItem>
                    <FormItem label="content">
                        {getFieldDecorator('content')
                        (<PostContent placeholder="Autosize height with minimum and maximum number of lines" 
                                    autosize={{ minRows: 2, maxRows: 6 }}
                                   />)}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="Dragger"
                    >
                        <div className="dropbox">
                            {getFieldDecorator('dragger', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                            })(
                                <PostImageDropBox/>
                            )}
                        </div>
                    </FormItem>
                </Form>
            </PostModal>
        );
    }
}

PostForm.defaultProps = {
    author: 'Anonymous',
    title: 'Null Title',
    img: null,
    content: 'Null Content',
    visible: false,
};

export default Form.create({
    onFieldsChange(props, changedFields){
        console.log(changedFields)
        
        if(changedFields.title !== undefined)
        {
            props.titleChange(changedFields.title.value);
        }
        
        if(changedFields.content !== undefined)
        {
            props.contentChange(changedFields.content.value);
        }   
        //if (changedFields.dragger != undefined)
        //    props.titleChange(changedFields.dragger.value);
    },
    
    mapPropsToFields(props){
        const title = props.title;
        const content = props.content;
        //const title = props.title;
        
        return {
            title : Form.createFormField({ value : title }),
            content : Form.createFormField({ value : content }), 
        };
    },
    
    onValuesChange(props, values){

    }
    
})(PostForm);
 