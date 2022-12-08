// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import Test from './components/Test'
import Todo from './Todo';
import Test2 from './components/Test2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Todo/>} />
          <Route path="/test" element={<Test2/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
