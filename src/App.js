import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import SingleAnimal from "./pages/SingleAnimal";
import AddAnimal from "./pages/AddAnimal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/animals" element={<Animals />}></Route>
        <Route path="/animals/:id" element={<SingleAnimal />}></Route>
        <Route path="/add" element={<AddAnimal />}></Route>
        <Route path="/animals/edit/:id" element={<AddAnimal />}></Route>
      </Routes>
    </div>
  );
}

export default App;
