
import { BaseActionsWithPayload, INote } from "../../types";
import { SearchNotesTypes } from "./SearchNotesActions";

type defaultStateType = {

	serchArrNotes: INote[];
};
const saved = localStorage.getItem("noteArr");
const AllNotes = JSON.parse(saved!);

const defaultState: defaultStateType = {

	serchArrNotes: [],
};

export const searchNotesReducer = (
	state = defaultState,
	action: BaseActionsWithPayload<SearchNotesTypes, string>
) => {
	switch (action.type) {
		case SearchNotesTypes.SEARCH_NOTE:
			console.log('item')
			return {
				...state,
				serchArrNotes: AllNotes.filter((item: INote) => item.text.includes(action.payload) || item.title.includes(action.payload))
			};

		default:
			return state;
	}
};
