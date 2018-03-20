import React, { Component } from 'react';
import { FeedCard } from 'components/'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import  * as feedActions from 'system/store/modules/feed';

// static
import avatar from 'static/image/avatar-test.png'
import cover from 'static/image/cover-test.jpg'

class FeedContainer extends Component {
    render(){
        const { feed_id, comment_input, feeds } = this.props;
        
        const feedItems = feeds.map(
            ({cover, title, description, my_avatar}) => (
                <FeedCard 
                    cover={cover} 
                    title={title} 
                    description={description} 
                    my_avatar={avatar}
                />
            )
        )
        
        return(
            { feedItems }
        )
    }
}

export default connect(
    // state 를 비구조화 할당
    
    // https://velopert.com/3533
    // mapDispatchToProps를 사용하지않고 state를 미리 할당하는 방법 보기
    
    // feed -> feed redux의 state
    // 이름을 똑같이 지정해줘
    ({ feed }) => ({
        feed_id: feed.get('feed_id'),
        comment_input: feed.get('comment_input'),
        feeds: feed.get('feeds')
    }),
    (dispatch) => ({
        FeedActions: bindActionCreators(feedActions, dispatch)
    })
)(FeedContainer);