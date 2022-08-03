import React from 'react';
import Header from './Components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Todo_list_container from './Components/Todo_list_container';
import Todo_Form from './Components/Todo_Form';
import "./App.css";

// bootstrap


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Todo_list_container/>}></Route>
      <Route path="/add" element={<Todo_Form/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App