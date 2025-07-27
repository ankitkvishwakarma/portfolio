import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default App;