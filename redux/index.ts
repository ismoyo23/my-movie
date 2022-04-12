import {combineReducers} from 'redux';
// =============================================
// import from reducers auth

import filmReducers from '@redux/reducer/FilmReducers';

// export combine reducers
export default combineReducers({
  filmData: filmReducers,
});
