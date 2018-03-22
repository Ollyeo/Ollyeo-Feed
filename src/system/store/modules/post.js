import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const OPEN = 'post/OPEN';
const CLOSE = 'post/CLOSE';

export const open = () => createAction(OPEN);
export const close = () => createAction(CLOSE);

// Record 함수는 Record 형태 데이터를 만드는 함수를 반환합니다.
// 따라서, 만든 다음에 뒤에 () 를 붙여줘야 데이터가 생성됩니다.
const initialState = Map({
  author: '',
  title: '',
  img: null,
  content: '',
  visible: false
});

export default handleActions({
  [OPEN]: (state, action) => { return state.update('visible', visible => !visible)},
  
  // OPEN과 같은 동작을 하지만 나중에 다른 기능이 추가 될 수도 있으니..
  [CLOSE]: (state, action) => { return state.update('visible', visible => !visible)},
  
}, initialState);
