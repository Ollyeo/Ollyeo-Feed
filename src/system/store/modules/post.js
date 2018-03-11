import { createAction, handleActions } from 'redux-actions';
import { Record, List } from 'immutable';

const CREATE = 'post/CREATE';

export const create = createAction(CREATE, post => post);

// Record 함수는 Record 형태 데이터를 만드는 함수를 반환합니다.
// 따라서, 만든 다음에 뒤에 () 를 붙여줘야 데이터가 생성됩니다.
const initialState = Record({
  title: '',
  content: null,
  //like: false
})();

export default handleActions({
  [CREATE]: (state, { payload: text }) => {
    // TodoRecord 를 사용해야 아이템도 Record 형식으로 조회 가능합니다. 
    // 빠져있는 값은, 기본값을 사용하게 됩니다 (checked: false)
    const item = TodoRecord({ id: id++, text }); 
    return state.update('todos', todos => todos.push(item));
  },
}, initialState);