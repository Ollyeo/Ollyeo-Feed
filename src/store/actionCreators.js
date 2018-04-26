// 편의상, 나중에 액션 생성 함수들을 미리 바인딩해서 내보냄
import { bindActionCreators } from 'redux';
import * as feedActions from './modules/feed';
//import * as feeddetailActions from './modules/feeddetail';
import * as postActions from './modules/post';

import store from './index';

const { dispatch } = store;

// Action 생성함수를 미리 Bind
export const FeedActions = bindActionCreators(feedActions, dispatch);
export const PostActions = bindActionCreators(postActions, dispatch);
//export const FeeddetailActions = bindActionCreators(feeddetailActions, dispatch);
