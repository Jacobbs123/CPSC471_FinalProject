import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Supply from "./pages/Supply";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/supply" element={<Supply />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update" element={<Update />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
