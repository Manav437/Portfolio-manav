import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home"
import Stack from './Components/Stack/Stack';
import Project from './Components/Project/Project';
import CursorTrail from './Components/CursorTrail/CursorTrail';
import './App.css'

function App() {
	return (
		<Router>
			<CursorTrail />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/stack" element={<Stack />} />
				<Route path="/project" element={<Project />} />
			</Routes>
		</Router>
	)
}

export default App;
