import { RootState } from '..';

const namespace = 'serchArrNotes';

export const searchNotesSelectors = {
	searchNotesSelectors: (state: RootState) => state[namespace].serchArrNotes,
};
