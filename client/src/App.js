import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Supply from "./pages/Supply";
import Cart from "./pages/Cart";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserAuthentication } from "./Authentication/UserAuthentication";

import "./style.css";
function App() {
  return (
    <div className="App">
      <UserAuthentication>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/supply" element={<Supply />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </UserAuthentication>
    </div>
  );
}

export default App;
