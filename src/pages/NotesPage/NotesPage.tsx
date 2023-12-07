import { Flexbox, NotesContainer, NotesWrapper, } from "./style";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { INote } from "../../types";
import NoteItem from "../../client/components/NoteItems/NoteItem";
import MyTags from "../../client/components/Mytags/MyTags";
import React from "react";

const NotesPage = () => {
	const AllNotesArr = useTypedSelector((state) => state.allNotes.allNotes);
	const SearchNoteArr = useTypedSelector((state) => state.serchArrNotes.serchArrNotes);

	return (
		<NotesWrapper >
			<Flexbox>
				{SearchNoteArr.length ? (<NotesContainer>{
					SearchNoteArr.map((note: INote) => (
						<NoteItem
							title={note.title}
							text={note.text}
							date={note.date}
							id={note.id}
							key={note.id + note.text} />
					))}</NotesContainer>) : (<NotesContainer>
						{AllNotesArr &&
							AllNotesArr.map((note: INote) => (
								<NoteItem
									title={note.title}
									text={note.text}
									date={note.date}
									id={note.id}
									key={note.id + note.text} />
							))}
					</NotesContainer>)}
				{AllNotesArr.length ? (<MyTags></MyTags>) : (<div></div>)}
			</Flexbox>
		</NotesWrapper>
	);
};

export default NotesPage;
