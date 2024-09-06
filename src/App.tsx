import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/index";

function App() {
  return (
    <Router basename="/portfolio/">
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </Router>
  );
}

export default App;
