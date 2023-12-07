import { useState } from "react";
import { ButtonContainer, NoteContainer, StyledTextarea, TextDiv, TitleDiv } from "./style";
import { INote } from "../../../types";
import { useActions } from "../../../store/hooks/useActions";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import React from "react";
import { IconButton, Input } from "@mui/material";
import { Delete, EditNote } from "@mui/icons-material";


const NoteItem = (item: INote) => {
	const AllNotesArr = useTypedSelector((state) => state.allNotes.allNotes);

	React.useEffect(
		() => {
			localStorage.setItem('noteArr', JSON.stringify(AllNotesArr));
		},
		[AllNotesArr]
	);

	const [openMenu, setOpenMenu] = useState(false);
	const [inputOne, setInputOne] = useState(item.title);
	const [inputTwo, setInputTwo] = useState(item.text);
	const { deleteNote, editNote } = useActions();

	const deleteNoteFn = (note: INote) => {
		deleteNote(note.id);
		const saved = localStorage.getItem("noteArr");
		const AllNotes = JSON.parse(saved!);
		const AllNotesarr = AllNotes.filter((item: INote) => item.id !== note.id)
		localStorage.setItem('noteArr', JSON.stringify(AllNotesarr));
		window.location.reload();

	}

	const editNoteFn = (item: INote) => {
		editNote(item.id, inputOne, inputTwo);
		localStorage.setItem('noteArr', JSON.stringify(AllNotesArr));
		window.location.reload();
		setOpenMenu((prevState) => {
			return !prevState;
		});

	}

	const handleBtnClick = () => {
		setOpenMenu((prevState) => {
			return !prevState;
		});
	};


	return (
		<div>
			<div>
				{openMenu ? (
					<NoteContainer>
						<Input
							type="text"
							name='input1'
							value={inputOne}
							onChange={(event) => setInputOne(event.target.value)}
						/>
						<StyledTextarea
							name='input2'
							value={inputTwo}
							onChange={(event) => setInputTwo(event.target.value)}
						/>
						<IconButton onClick={() => editNoteFn(item)}>Save</IconButton>
						<TextDiv> {item.date}</TextDiv></NoteContainer>) :
					(<NoteContainer>
						<TitleDiv> {item.title} </TitleDiv>

						<TextDiv>{item.text}</TextDiv>
						<ButtonContainer><IconButton onClick={() => deleteNoteFn(item)}> <Delete /> </IconButton>
							<IconButton color="primary" onClick={() => handleBtnClick()}> <EditNote></EditNote></IconButton></ButtonContainer>
						<div> {item.date}</div>
					</NoteContainer>)
				}
			</div>
		</div>

	);
};

export default NoteItem;
