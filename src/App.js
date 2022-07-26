import "./App.css";
import routes from "./routes";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import { MainRoute } from "./routes";
import Home from "./pages/home";
import Error from "./pages/error";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
