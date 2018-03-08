import { createAction, handleActions } from 'redux-actions';

// 액션 타입을 정의해줍니다.
const CLICK_LIKE = 'card/CLICK_LIKE';
const WRITE_COMMENT = 'card/WRITE_COMMENT';

// 액션 생성 함수를 만듭니다.
// 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
export const click_like = createAction(CLICK_LIKE);
export const write_comment = createAction(WRITE_COMMENT);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  title: "",
  content: "",
  like: false,
  like_count: 0,
  comments:[]
};

/*
// 리듀서를 만들어서 내보내줍니다.
export default function reducer(state = initialState, action) {
  // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환합니다.
  // state = initialState 이렇게 하면 initialState 가 기본 값으로 사용됩니다.
  switch(action.type) {
    case CLICK_LIKE:
      return { number: state.number + 1 };
    case WRITE_COMMENT:
      return { number: state.number - 1 };
    default:
      return state; // 아무 일도 일어나지 않으면 현재 상태를 그대로 반환합니다.
  }
}*/

export default handleActions({
    [CLICK_LIKE] : (state, action) => {
        return { 
            if(state.like === false){
                state.like = true
                state.like_count += 1;
                // server에 like가 추가됬다는걸 보내라.
            }else{
                state.like = false
                state.like_count -= 1
            }
    },
})