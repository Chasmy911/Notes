import React from "react";
import { StyledTitle, TagBox, TagContainer, TagDiv } from "./style";
import { tagFn } from "../../../pages/NotesPage/helper";
import { useActions } from "../../../store/hooks/useActions";
import { Button } from "@mui/material";

const Tags = () => {
	const tagArr = tagFn();
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		tagFn();
	};
	const { searchNotes } = useActions()

	return (
		<TagContainer onLoad={() => handleChange}>
			<StyledTitle> Sort by tags:</StyledTitle>
			<TagBox>
				{tagArr && tagArr.map(item => <Button onClick={() => searchNotes(item)} key={item}>{item} </Button>)}
			</TagBox>
			{tagArr.length ? (<TagBox><Button color='error' onClick={() => window.location.reload()}>Cancel</Button></TagBox>) : (<div></div>)}
		</TagContainer>
	);
};

export default Tags;
