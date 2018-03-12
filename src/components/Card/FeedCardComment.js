import React  from 'react'
import { Input } from 'antd'

const FeedCardComment = ({profile, comment, onChange}) => {
    return (
        <Input placeholder="댓글을 남겨주세요." onChange={onChange}>
        </Input>
    )
}

export default FeedCardComment;