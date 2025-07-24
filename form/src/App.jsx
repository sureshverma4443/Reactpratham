import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SampleForm from './components/SampleForm';
import TodoList from './components/todoList';
import Formpractice from './components/Formpractice';
import Forms from './components/Forms';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
        
            <Link to="/">Sample Form</Link>
            <Link to="/formpractice">Formpractice</Link>
            <Link to="/form">Form</Link>
          
        
            <Link to="/todolist">Todo List</Link>
          
        
            <Link to="/controlled">Controlled Form</Link>
          
        
            <Link to="/uncontrolled">Uncontrolled Form</Link>
          
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<SampleForm />} /> */}
        <Route path='/' element={<Formpractice />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/forms" element={<Forms />} />
        {/* <Route path="/controlled" element={<ControlledForm />} />
        <Route path="/uncontrolled" element={<UncontrolledForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
