import logo from './logo.svg';
import './App.css';
import {Link,Routes,Route,useParams,useNavigate} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Form from './component/form'
import Display from './component/display';
import NotFound from './component/notfound';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/:type/:id" element={<Display/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
