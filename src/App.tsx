import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Toaster } from "react-hot-toast";
import { Project } from "./pages/projects";
import { Home } from "./pages/home";

function App() {
	return (
		<>
			<Toaster position="bottom-center" reverseOrder={false} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects/:id" element={<Project />} />
			</Routes>
		</>
	);
}

export default App;
