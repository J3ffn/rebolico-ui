import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Login from "components:pages/Login/Login";
import "./app.css";

const App: React.FC = () => {
  return (
    // <h1>learn react</h1>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
