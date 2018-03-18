import React, { Component } from 'react'
import { FeedCardLike } from './FeedCardLike';
import { FeedCardComment } from './FeedCardComment';
import { Card, Avatar, Input } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// TODO ::
import  * as feedActions from 'store/modules/feed';

const { Meta, Grid } = Card;

// design 참고
// https://ant.design/components/card/

//Card안에 내용을 넣고 싶을 경우 Card컴포넌트 안에

//기본 Meta이외의 데이터를 넣고 싶을때는 Card.Grid를 이용해서 추가해 보자.

class FeedCard extends Component{
    render() {
        const { cover, 
        title, 
        description,
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
        
        return (
            <Card
                loading
                cover={cover}
                style = {{ width: 300 }}
                actions={[<Avatar src={{my_avatar}}/>, <Input placeholder="댓글을 입력해 주세요."/>, <FeedCardLike />]}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={title}
                    description={description}
                />
                {comments}
            </Card>
        )
    }
}

export default connect(
    // state 를 비구조화 할당
    
    // https://velopert.com/3533
    // mapDispatchToProps를 사용하지않고 state를 미리 할당하는 방법 보기
    
    ({ feed }) => ({
        cover: feed.get('cover'),
        title: feed.get('title'),
        description: feed.get('description'),
        my_avatar: feed.get('my_avatar'),
        author_avatar: feed.get('author_avatar'),
        top_comment: feed.get('top_comment')// 전체comment에서 3개만 가져와
    }),
    (dispatch) => ({
        FeedActions: bindActionCreators(feedActions, dispatch)
    })
)(FeedCard);