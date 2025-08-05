import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/home';
// import Projects from './pages/ProjectsPage';
import Resume from './components/Resume';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
