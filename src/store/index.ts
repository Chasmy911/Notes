
import { applyMiddleware, combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { allNotesReducer } from './AllNotes/AllNotesReducer';
import { searchNotesReducer } from './Search/SearchNotesReducer';


const rootReducers = combineReducers({
	allNotes: allNotesReducer,
	serchArrNotes: searchNotesReducer,
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducers>;
