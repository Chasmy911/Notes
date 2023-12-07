import { Input } from '@mui/material';
import styled from 'styled-components';

export const NoteContainer = styled('div')`
display: flex;
justify-content: space-around;
flex-direction: column;
background-color: #FAEBD7;
width: 220px;
min-height: 250px;
padding: 15px;
color: black;
border-radius: 10px;`;

export const StyledInput = styled(Input)`
padding: 5px 10px;`;

export const StyledTextarea = styled.textarea`
padding: 10px;
max-width: 100%;
line-height: 1.1;
min-height: 100px;
border-radius: 5px;
border: 1px solid #ccc;
box-shadow: 1px 1px 1px #999;
resize: none;
background-color: rgba(0, 125, 215, 0.1);
resize: none;`

export const StyledSpan = styled.span`
color: red;`

export const ButtonContainer = styled.div`
display: flex;
justify-content: flex-end;`

export const TextDiv = styled.div`
word-break: break-all;
max-width: 80%;`

export const TitleDiv = styled.div`
word-break: break-all;
font-weight: 800;
max-width: 80%;`



