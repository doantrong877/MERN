import logo from './logo.svg';
import './App.css';
import {Link,Routes,Route,useParams} from 'react-router-dom';

const Home = (props) => {
  return (
    <h1>Welcome</h1>
  )
}

const Number = (props) => {
  const {input} = useParams();
  if(isNaN(input)){
    return (
      <h1>The world is: {input}</h1>
    )
  }
  else {
    return (
    <h1>The number is: {input}</h1>
  )
    }
}

const Css = (props) => {
  const {input, letterColor, backGround} = useParams();
  const style = {
    color: letterColor, 
    backgroundColor: backGround
  }
  return (
    <h1 style={style}>The world is: {input}</h1>
  )
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:input" element={<Number/>}/>
        <Route path="/:input/:letterColor/:backGround" element={<Css/>}/>
      </Routes>
    </div>
  );
}

export default App;
