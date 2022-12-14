import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Projects from './Projects';
import Blogs from './Blogs';
import Resume from './Resume';
import NickActivities from './NickActivities'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/resume' element={<Resume />}/>
          <Route path='/nickactivities' element={<NickActivities />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
