import './App.css';
import {Route, Routes} from "react-router-dom";
import TodoList from "./component/TodoList";
import Add from "./component/Add";

function App() {
  return (
      <>
        <Routes>
          <Route path='/' element={<TodoList/>}></Route>
          <Route path='/add' element={<Add/>}></Route>

        </Routes></>
  );
}

export default App;
