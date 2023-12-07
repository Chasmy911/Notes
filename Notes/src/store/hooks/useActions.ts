import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allNotesActions } from '../AllNotes/AllNotesActions';
import { searchNotesActions } from '../Search/SearchNotesActions';


export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(
		{
			...allNotesActions,
			...searchNotesActions,
		},
		dispatch
	);
};
