import React, { Component } from 'react'
import FeedCardLike from './FeedCardLike';
import FeedCardComment from './FeedCardComment';

import { List } from 'immutable';

import avatar from 'static/image/avatar-test.png'
import cover from 'static/image/cover-test.jpg'

import { Card, Avatar, Input } from 'antd';

const { Meta, Grid } = Card;

// design 참고
// https://ant.design/components/card/

//Card안에 내용을 넣고 싶을 경우 Card컴포넌트 안에

//기본 Meta이외의 데이터를 넣고 싶을때는 Card.Grid를 이용해서 추가해 보자.

class FeedCard extends Component{
    render() {
        const { id,
        title, 
        content,
        my_avatar,
        author_avatar,
        top_comment
        } = this.props;
        
        const comments = top_comment.map(
            ({avatar, comment}) => (
                <Grid style={{width:'100%'}}>
                    <FeedCardComment avatar={avatar} comment={comment}/>
                </Grid>
            )
        );
        
        const coverImg = <img src={cover}/>
        const myAvatarComponent = <Avatar src={my_avatar}/>
        
        console.log("title : " + title)
        console.log("content : " + content)
        
        return (
            <Card id={id}
                cover={coverImg}
                style = {{ width: 300 }}
                actions={[myAvatarComponent, <Input placeholder="댓글을 입력해 주세요."/>, <FeedCardLike />]}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={title}
                    description={content}
                />
                {comments}
            </Card>
        )
    }
}

FeedCard.defaultProps = {
    id:0,
    cover: {cover},
    title: "No Title", 
    content: "No Description",
    my_avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    author_avatar : {avatar},
    top_comment: List()
};

export default FeedCard;