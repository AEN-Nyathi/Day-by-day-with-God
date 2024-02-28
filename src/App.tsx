import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@Pages/Home';
import { Navbar } from '@Components/index';
import PracticeGames from '@Pages/PracticeGames';

import FindNumberGrade1 from '@Pages/PracticeGames/Games/Maths/FindNumber/Grade1';
import PlaceNumbersInOrderGrade1 from '@Pages/PracticeGames/Games/Maths/PlaceNumbersInOder/Grade1';
import SumAndDiffirence from '@Pages/PracticeGames/Games/Maths/FlashcardFrenzy';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="PracticeGames" element={<PracticeGames />} />
				
				<Route path="/sum-difference/:grade" element={<SumAndDiffirence />} />
				<Route
					path="/games/Grade1/PlaceNumbersInOrderGrade1"
					element={<PlaceNumbersInOrderGrade1 />}
				/>
				<Route
					path="/games/Grade1/FindNumberGrade1"
					element={<FindNumberGrade1 />}
				/>
			
			</Routes>
		</BrowserRouter>
	);
}

export default App;
