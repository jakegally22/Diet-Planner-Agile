import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Food from "./components/Food";
import Exercise from "./components/Exercise";

const App = () => {
    return (
        <Router>
            <Nav />
            <main className="px-10 max-w-[900px] m-auto">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/exercise" element={<Exercise />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
