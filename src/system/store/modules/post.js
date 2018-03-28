import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const OPEN = 'post/OPEN';
const CLOSE = 'post/CLOSE';

const CHANGE_TITLE = 'post/CHANGE_TITLE';
const CHANGE_CONTENT = 'post/CHANGE_CONTENT';
const UPLOAD_IMAGE = 'post/UPLOAD_IMAGE'

export const open = createAction(OPEN);
export const close = createAction(CLOSE);
export const changeTitle = createAction(CHANGE_TITLE);
export const changeDescription = createAction(CHANGE_CONTENT);
export const uploadImage = createAction(UPLOAD_IMAGE);

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
  [OPEN]: (state, action) => { return state.update('visible', visible => true) },
  
  // OPEN과 같은 동작을 하지만 나중에 다른 기능이 추가 될 수도 있으니..
  [CLOSE]: (state, action) => { return state.update('visible', visible => false)},
  
  /* TODO */
  [CHANGE_TITLE]: (state, {payload: title}) => { return state.set('title', title)},
  
  [CHANGE_CONTENT]: (state, {payload: content}) => { return state.set('content', content)},
  
  [UPLOAD_IMAGE]: (state, action) => { return state.set('img', img => img)},
  
}, initialState);
