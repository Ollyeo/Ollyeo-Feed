// 편의상, 나중에 액션 생성 함수들을 미리 바인딩해서 내보냄
import { bindActionCreators } from 'redux';
import * as feedActions from './moudles/feed';
import * as feeddetailActions from './modules/feeddetail';
import * as postActions from './modules/post';

import store from './index';

const { dispatch } = store;

export const FeedActions = bindActionCreators(feedActions, dispatch);
export const FeeddetailActions = bindActionCreators(feeddetailActions, dispatch);
export const PostActions = bindActionCreators(postActions, dispatch);