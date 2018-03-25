import React, { Component } from 'react';
import { FeedCard } from 'components/'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import  * as feedActions from 'system/store/modules/feed';

// static
class FeedContainer extends Component {
    render(){
        const { feed_id, comment_input, feeds } = this.props;
        
        const feedItems = feeds.toJS().map(
            ({cover, 
            title, 
            description, 
            my_avatar,
            author_avatar}, key) => (
                console.log(title),
                <FeedCard 
                    key={key}
                    cover={cover} 
                    title={title} 
                    description={description} 
                    my_avatar={my_avatar}
                    author_avatar={author_avatar}
                />
            )
        );
        
        return(
            <div>
                {feedItems}
            </div>
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