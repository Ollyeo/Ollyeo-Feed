// react-logger, redux-thunk, redux-pender

import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// 1. Action 이름 짓기
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
// 2. Action 함수 정의하기
export const change_comment = () => createAction(CHANGE_COMMENT);
export const write_comment = () => createAction(WRITE_COMMENT);
export const delete_comment = () => createAction(DELETE_COMMENT)

export const click_like = () => createAction(CLICK_LIKE);
export const add_feed = () => createAction(ADD_FEED);
export const remove_feed = () => createAction(DELETE_FEED);

// 모듈의 초기 상태를 정의합니다.
const initialState = Map({
  feed_id: 0,
  comment_input:'',
  feeds: List()
});

const Feed = Map({
    id: 0,
    author: "",
    title: "",
    content: "",
    img: "",
    like: false,
    like_count: 0,
    comments: List(),
    comment_id: 0,
})

const Comment = Map({
  id: 0,
  author: "",
  comment: "",
  create_at: new Date()
})

// 3. Action 함수 핸들링 하기
export default handleActions({
  // OK
  [CLICK_LIKE]: (state, {payload : index}) => state.updateIn(['feeds', index, 'like'], like => !like),
  
  // OK
  [ADD_FEED]: (state, action) => {
    const { author, title, content, img } = action.payload;
    const { feed_id } = state.get('feed_id');
    
    const feed = Feed({
      id: feed_id+1, 
      author, 
      title, 
      content,
      img
    });
    
    return state.update('feed_id', id => id++)
                .update('feeds', feeds => feeds.push(feed)) 
  },
  
  // OK
  [DELETE_FEED]: (state, {payload: id}) => {
    const index = state.get('feeds').findIndex(item => item.get('id') === id);
    
    state.deleteIn(['feeds', index])
  },
  
  // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
  // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시켰습니다.
  // OK
  [CHANGE_COMMENT]: (state, {payload: input}) => state.set('comment_input', input),
  
  // TODO:: Feed의 아이디를 찾아서 Comment 대입
  // OK
  [WRITE_COMMENT]: (state, action) => {
    const { feed_id, author, text } = action.payload;
    const comment_id = state.getIn(['feeds', feed_id, 'comment_id']);
    
    const item = Comment({
      id: comment_id+1,
      author,
      text
    });
    
    return state.updateIn(['feeds', feed_id, 'comment_id'], id => id++)
                .updateIn(['feeds', feed_id, 'comments'], comments => comments.push(item)) 
  },
  
  // TODO:: Feed의 아이디를 찾아서 Comment 대입
  // OK
  [DELETE_COMMENT]: (state, action) => {
    const { feed_id, comment_id } = action.payload;
    
    const fi = state.get('feeds').findIndex(item => item.get('feed_id') === feed_id)
    const ci = state.getIn(['feeds', fi, 'comments']).findIndex(item => item.get('comment_id') === comment_id)
    
    state.deleteIn(['feeds', fi, 'comments', ci]);
  },

}, initialState);