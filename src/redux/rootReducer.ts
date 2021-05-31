import {combineReducers} from 'redux';
import {reducer as dataReducer} from './data';

export type RootState = {
  data: ReturnType<typeof dataReducer>;
};
const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
