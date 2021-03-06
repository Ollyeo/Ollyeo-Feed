import React from 'react';
import { Icon } from 'antd';

const FeedLike = ({haslike}) => {
    const type_name = haslike ? "heart-o" : "heart";
    
    return (
        <Icon type={{type_name}} style={{ fontsize: 16, color: "#08c"}} />
    )
}

export default FeedLike;