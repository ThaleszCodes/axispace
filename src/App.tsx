import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Dashboard from './modules/Dashboard';
import Tasks from './modules/Tasks';
import Projects from './modules/Projects';
import Activity from './modules/Activity';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
