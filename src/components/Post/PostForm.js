import React, { Component } from 'react';
import { Modal, Form, Icon, Upload, Input } from 'antd'

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
        const { visible, onCancel, onCreate, form } = this.props;
        const { handleTitle, handleContent, handleImageFile } = this.props;
        const { getFieldDecorator, getFieldError } = form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { sapn: 14 },
        };
      
        return (
            <Modal
                visible={visible}
                title="Create a new Feed"
                okText="Post"
                onCancel={onCancel}
                onOk={onCreate}
            >
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
                        (<Input />)
                    }
                </FormItem>
                <FormItem label="Description">
                    {getFieldDecorator('description')
                    (<TextArea placeholder="Autosize height with minimum and maximum number of lines" 
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
                            <Upload.Dragger name='files' action='/upload.do'>
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>
                        )}
                    </div>
                </FormItem>
            </Form>
        </Modal>
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
        console.log(changedFields);
        //if(changedFields.title.value !== undefined)
        //props.titleChange(changedFields.title.value);
    },
    
    mapPropsToFields(props){
        console.log("mapPropsToFields");
        console.log(props);
        return {
            
        }
    },
    
    onValuesChange(props, values){
        console.log("onValuesChange");
        console.log(values);
        props.titleChange(values.title);
        //props.titleChange(values.title);
    }
    
})(PostForm);
 