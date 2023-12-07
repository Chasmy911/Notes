
import { BaseActionsWithPayload, INote } from "../../types";
import { AllNotesTypes } from "./AllNotesActions";

type defaultStateType = {
	allNotes: INote[]
};
const saved = localStorage.getItem("noteArr");
const AllNotes = JSON.parse(saved!);

const defaultState: defaultStateType = {
	allNotes: AllNotes as INote[] || []
};

export const allNotesReducer = (
	state = defaultState,
	action: BaseActionsWithPayload<AllNotesTypes, any[] | any | string>
) => {
	switch (action.type) {
		case AllNotesTypes.ADD_NOTES:

			return {
				...state,
				allNotes: [...state.allNotes, { ...action.payload as INote }]
			};

		case AllNotesTypes.EDIT_NOTES:

			return {
				...state,
				allNotes: state.allNotes.map((note) => note.id === action.payload.itemId ? { ...note, title: action.payload.newTitle, text: action.payload.newText } : note)
			};

		case AllNotesTypes.DELETE_NOTES:
			return {
				...state,

				allNotes: state.allNotes.filter(
					(note) => (note.id !== action.payload)
				),

			};

		default:
			return state;
	}
};
