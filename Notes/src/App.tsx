import React, { useEffect, useState } from 'react';
import Layout from './client/Layout/Layout';

import NotesPage from './pages/NotesPage/NotesPage';

import { useTypedSelector } from './store/hooks/useTypedSelector';
import MyTags from './client/components/Mytags/MyTags';



function App() {

	const [AllNotesLocalArr, setAllNotesLocalArr] = useState(() => {
		const saved = localStorage.getItem("noteArr");
		const initialValue = JSON.parse(saved!);
		return initialValue || [];
	});

	return (
		<div onLoad={setAllNotesLocalArr}>
			<Layout />
			<NotesPage ></NotesPage>
		</div>

	);
}
export default App;
