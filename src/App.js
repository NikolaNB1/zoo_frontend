import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import SingleAnimal from "./pages/SingleAnimal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/animals" element={<Animals />}></Route>
        <Route path="/animals/:id" element={<SingleAnimal />}></Route>
      </Routes>
    </div>
  );
}

export default App;
