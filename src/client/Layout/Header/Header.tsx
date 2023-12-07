import React from 'react';
import { StyledHeader } from './styles';
import { useActions } from '../../../store/hooks/useActions';
import { INote } from '../../../types';
import { Button, } from '@mui/material';




const Header = () => {
	const { addNotes } = useActions();

	const addNoteFn = () => {
		const date = new Date;
		const day = date.toLocaleString()
		const note: INote = {
			title: 'Title',
			text: "Text",
			date: day,
			id: Date.now(),
		}
		addNotes(note);
		const saved = localStorage.getItem("noteArr");
		const parcedSave = JSON.parse(saved!) || []
		parcedSave.push(note)
		localStorage.setItem('noteArr', JSON.stringify(parcedSave));
	}


	return (
		<StyledHeader>
			Notes
			<Button size='large' variant="outlined" onClick={() => addNoteFn()}>Add note </Button>
		</StyledHeader>
	);
};

export default Header;
