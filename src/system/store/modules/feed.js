// react-logger, redux-thunk, redux-pender

import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CLICK_LIKE = 'feed/CLICK_LIKE';
const ADD_FEED = 'feed/ADD_FEED';
const DELETE_FEED = 'feed/DELETE_FEED';

const CHANGE_COMMENT = 'comment/CHANGE_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const WRITE_COMMENT = 'comment/WRITE_COMMENT';

/*
이런식으로 하면 그 파라미터의 값이 index가 될 지 뭐가 될 지 모른다.
그렇기 때문에, 파라미터로 전달받은 값을 액션의 payload 값으로 설정해준다.
따라서 click_like가 실행된다면
{
  type:'feed/CLICK_LIKE',
  payload:1
}

*/

/*
{
  type:'feed/CLICK_LIKE',
  payload:(index)
}
*/
export const change_comment = () => createAction(CHANGE_COMMENT);
export const write_comment = () => createAction(WRITE_COMMENT);
export const delete_comment = () => createAction(DELETE_COMMENT)

export const click_like = () => createAction(CLICK_LIKE);
export const add_feed = () => createAction(ADD_FEED);
export const remove_feed = () => createAction(DELETE_FEED);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  feed_id: 0,
  comment_input:'',
  feeds: List()
};

const FeedRecord = Map({
    id: initialState.feed_id++,
    author: "",
    title: "",
    content: "",
    like: false,
    like_count: 0,
    comments: List()
})

const CommentRecord = Map({
  id: 0,
  author: "",
  comment: "",
  create_at: new Date()
})

export default handleActions({
  [CLICK_LIKE]: (state, action) => {
    const index = action.payload;
    const feed = state.get('feeds', index);
    
    feed.update('like_count',  value => feed.like ? value - 1: value + 1),
    feed.update('like', value => !feed.like);
  },
  
  [ADD_FEED]: (state, action) => {
    const { id, author, title, content } = action.payload;
    const feed = FeedRecord({id: id++, author, title, content});
    
    state.update('feeds', feeds => feeds.push(feed)) 
  },
  
  [DELETE_FEED]: (state, {payload: id}) => {
    const index = state.get('feeds').findIndex(item => item.get('id') === id);
    
    state.deleteIn(['feeds', index])
  },
  
  // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
  // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시켰습니다.
  [CHANGE_COMMENT]: (state, action) => state.set('comment_input', action.payload),
  
  // TODO:: Feed의 아이디를 찾아서 Comment 대입
  [WRITE_COMMENT]: (state, action) => {
    const { feed_id, author, text } = action.payload;
    const item = CommentRecord({id: feed_id.comments.length()+1, author, text});
    
    state.updateIn(['feeds', feed_id, 'comments'], comments => comments.push(item)) 
  },
  
  // TODO:: Feed의 아이디를 찾아서 Comment 대입
  [DELETE_COMMENT]: (state, action) => {
    const fi = state.get('feeds').findIndex(item => item.get('feed_id') === action.payload.feed_id).fromJS()
    const ci = state.getIn(['feeds', fi, 'comments']).findIndex(item => item.get('comment_id') === action.payload.comment_id).fromJS()
    
    state.deleteIn(['feeds', fi, 'comments', ci]);
  },

}, initialState);