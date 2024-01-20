import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from '@Pages/Home';
import { Navbar } from '@Components/index';
import { useStore } from '@Backend/hooks/useStore';


function App() {
	const  state  = useStore();
	console.log('state at App', state);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
