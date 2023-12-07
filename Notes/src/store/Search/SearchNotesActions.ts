import { BaseActionsWithPayload } from "../../types";

export enum SearchNotesTypes {
	SEARCH_NOTE = 'SEARCH_NOTE',
}

interface INotesAction {
	searchNotes: (tagStr: string) => BaseActionsWithPayload<SearchNotesTypes, string>;
}

export const searchNotesActions: INotesAction = {
	searchNotes: (tagStr: string) => {
		return { type: SearchNotesTypes.SEARCH_NOTE, payload: tagStr };
	},

};
