import { Route, BrowserRouter, Routes } from 'react-router-dom'; // Updated import statement

import Rootlayout from './Layout/Rootlayout';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import TodoList from './Component/ToDolist';

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter here */}
      <Routes> {/* Use Routes component */}
        <Route path='/' element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='todolist' element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;