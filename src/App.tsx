import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from '@Components/index';
import Games from '@Pages/PracticeGames/Games';
import MissingNumber from '@Pages/PracticeGames/Games/Maths/MissingNumber';
import PlaceValues from '@Pages/PracticeGames/Games/Maths/PlaceValues';
import Fraction from '@Pages/PracticeGames/Games/Maths/Fractions';
import Exponents from '@Pages/PracticeGames/Games/Maths/Exponents';
import Topic from '@Pages/PracticeGames/Pages/Topic';
import Grades from '@Pages/PracticeGames/Pages/Grades';
import Geometry from '@Pages/PracticeGames/Games/Maths/Geometry2D';

const Home = lazy(() => import('@Pages/Home'));
const PracticeGames = lazy(() => import('@Pages/PracticeGames'));
const PlaceNumbersInOrderGrade1 = lazy(
	() => import('@Pages/PracticeGames/Games/Maths/PlaceNumbersInOder/Grade1')
);
const Arithmetic = lazy(() => import('@Pages/PracticeGames/Games/Maths/Arithmetic'));
const FindNumberGrade1 = lazy(() => import('@Pages/PracticeGames/Games/Maths/FindNumber'));
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Suspense
				fallback={
					<main>
						<article className='w-full'>
							<h2>Loading...</h2>
							<p>Please Wait</p>
						</article>
					</main>
				}>
				<Routes>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='/Geometry'
						element={<Geometry />}
					/>
					<Route
						path='/PracticeGames'
						element={<PracticeGames />}>
						<Route
							index
							path='Topics'
							element={<Topic />}
						/>
						<Route
							path='Grades'
							element={<Grades />}
						/>
					</Route>
					<Route
						path='/Game/:Subject'
						element={<Games />}>
						<Route
							path='Fraction/:StudentGrade'
							element={<Fraction />}
						/>

						<Route
							path='Exponents/:StudentGrade'
							element={<Exponents />}
						/>
						<Route
							path='Arithmetic/:StudentGrade'
							element={<Arithmetic />}
						/>
						<Route
							path='FindNumber/Grade-1'
							element={<FindNumberGrade1 />}
						/>
						<Route
							path='MissingNumber/:StudentGrade'
							element={<MissingNumber />}
						/>
						<Route
							path='PlaceValues/:StudentGrade'
							element={<PlaceValues />}
						/>
						<Route
							path='PlaceNumbersInOrder/:StudentGrade'
							element={<PlaceNumbersInOrderGrade1 />}
						/>
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
