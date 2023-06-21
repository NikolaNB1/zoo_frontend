import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Animals from "./pages/Animals";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/animals" element={<Animals />}></Route>
      </Routes>
    </div>
  );
}

export default App;
