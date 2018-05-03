import React from 'react';
import { Modal } from 'antd';

const PostModal = ({visible, onCancel, onCreate}) => {
    return(
        <Modal  visible={visible}
                title="Create a new Feed"
                okText="Post"
                onCancel={onCancel}
                onOk={onCreate}/>
    )
}

export default PostModal;