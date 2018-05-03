import React from 'react';
import { Button } from 'antd';

const PostButton = ({onClick}) => {
    return (
        <Button type="primary"
                shape="circle" 
                icon="plus-circle" 
                size='small'
                onClick={onClick}/>
    )    
};

export default PostButton;
