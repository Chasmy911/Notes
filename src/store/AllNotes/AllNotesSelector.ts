import { RootState } from '..';

const namespace = 'allNotes';

export const allNotesSelectors = {
	getAllNotesSelector: (state: RootState) => state[namespace].allNotes,
};
