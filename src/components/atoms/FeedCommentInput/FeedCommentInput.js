import React from 'react'
import { Input, Avatar } from 'antd';

const FeedCommentInput = ({avatar, onPressEnter}) => {
    return(
        <div>
            <Avatar src={avatar}/>
            <Input placeholder=" Enter the comment " onPressEnter={onPressEnter}/>
        </div>
    )
}

export default FeedCommentInput;