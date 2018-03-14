import { createAction, handleActions } from 'redux-actions';
import { Record, List } from 'immutable';

const CLICK_LIKE = 'feed/CLICK_LIKE';
const WRITE_COMMENT = 'feed/WRITE_COMMENT';
const ADD_FEED = 'feed/ADD_FEED';
const REMOVE_FEED = 'feed/REMOVE_FEED';

export const click_like = () => createAction(CLICK_LIKE);
export const write_comment = () => createAction(WRITE_COMMENT);
export const add_feed = () => createAction(ADD_FEED);
export const remove_feed = () => createAction(REMOVE_FEED);

let feed_id = 0; // feed 아이템에 들어갈 고유 값

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  comment_input:'',
  feeds: List()
};

const FeedRecord = Record({
    id: feed_id++,
    author: "",
    title: "",
    content: "",
    like: false,
    like_count: 0,
    comments: List()
})

const CommentRecord = Record({
  id: 0,
  author: "",
  comment: "",
  create_at: new Date()
})

export default handleActions({
  [CLICK_LIKE]: (state, action) => {
    return { 
      like_count: state.update('like_count' ,  value => value+ 1) 
    };
  },
  // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
  // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시켰습니다.
  [WRITE_COMMENT]: (state, action) => {
    const { id, author, text } = action.payload;
    const item = CommentRecord({id: id++, author, text});
    state.update('comments', comments => comments.push(item)) 
  },
  
  // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
  // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시켰습니다.
  [ADD_FEED]: (state, action) => {
    const { id, author, title, content } = action.payload;
    const feed = FeedRecord({id: id++, author, title, content});
    state.update('feeds', feeds => feeds.push(feed)) 
  },
  
  // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
  // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시켰습니다.
  [REMOVE_FEED]: (state, {payload: id}) => {
    const index = state.get('feeds'.findIndex(item => item.get('id') === id));
    state.deleteIn(['feeds', index])
  }
}, initialState);