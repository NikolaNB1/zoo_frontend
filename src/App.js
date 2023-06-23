import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import SingleAnimal from "./pages/SingleAnimal";
import AddAnimal from "./pages/AddAnimal";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./shared/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/animals" element={<Animals />}></Route>
        <Route path="/animals/:id" element={<SingleAnimal />}></Route>
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddAnimal />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/animals/edit/:id"
          element={
            <ProtectedRoute>
              <AddAnimal />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
