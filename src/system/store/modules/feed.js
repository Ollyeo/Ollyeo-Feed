import { createAction, handleActions } from 'redux-actions';
import { Record, List } from 'immutable';

const CLICK_LIKE = 'feed/CLICK_LIKE';
const WRITE_COMMENT = 'feed/WRITE_COMMENT';

export const click_like = () => createAction(CLICK_LIKE);
export const write_comment = () => createAction(WRITE_COMMENT);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  comment_input:'',
  feeds: List()
};

const FeedRecord = Record({
    title: "",
    content: "",
    like: false,
    like_count: 0,
    comments:[]
})

export default handleActions({
  [CLICK_LIKE]: (state, action) => {
    return { number: state.number + 1 };
  },
  // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
  // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시켰습니다.
  [WRITE_COMMENT]: ({ number }) => ({ number: number - 1 })
}, initialState);