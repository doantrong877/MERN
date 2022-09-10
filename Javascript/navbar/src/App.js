import logo from './logo.svg';
import './App.css';
import Form from './Components/Input'
import Nav from './Components/Nav'
import Wrapper, {WrapperProvider} from './Wrapper';
function App() {
  return (
    <div className="App">
      <WrapperProvider>
      <Nav/>
      <Form/>
      </WrapperProvider>
      
    </div>
  );
}

export default App;
