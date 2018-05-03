import React from 'react';
import { Input } from 'antd';

const PostContent = () => {
    const { TextArea } = Input;
    
    return (
        <TextArea placeholder="Autosize height with minimum and maximum number of lines" 
                    autosize={{ minRows: 2, maxRows: 6 }}/>
    )
}

export default PostContent;