import { BaseActionsWithPayload, INote } from "../../types";

export enum AllNotesTypes {
	ADD_NOTES = 'ADD_NOTES',
	EDIT_NOTES = 'EDIT_NOTES',
	DELETE_NOTES = 'DELETE_NOTES',
}

interface INotesAction {
	addNotes: (note: INote) => BaseActionsWithPayload<AllNotesTypes, INote>;
	editNote: (itemId: number, newTitle: string, newText: string) => BaseActionsWithPayload<AllNotesTypes, { itemId: number, newTitle: string, newText: string }>;
	deleteNote: (noteId: number) => BaseActionsWithPayload<AllNotesTypes, number>;
}

export const allNotesActions: INotesAction = {
	addNotes: (note: INote) => {
		return { type: AllNotesTypes.ADD_NOTES, payload: note };
	},

	editNote: (itemId: number, newTitle: string, newText: string) => {
		return { type: AllNotesTypes.EDIT_NOTES, payload: { itemId, newTitle, newText } };
	},

	deleteNote: (noteId: number) => {
		return { type: AllNotesTypes.DELETE_NOTES, payload: noteId };
	}
};
