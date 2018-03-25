import React from 'react';
import { Button, Icon } from 'antd';

const PostButton = ({onClick}) => {
    console.log({onClick});
    return (
        <Button type="primary"
                shape="circle" 
                icon="plus-circle" 
                size='small'
                onClick={onClick}/>
    )    
};

export default PostButton;
