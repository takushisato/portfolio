import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopPage from "./pages/top";
import "../src/index.css";

function App() {
  return (
    <Router basename="/portfolio/">
      <Routes>
        <Route path="/" element={<TopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
