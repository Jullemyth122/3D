import './App.css';
import Home from './Philippines/Home';
import Navbar from './Philippines/Navbar';
import History from './Philippines/History';
import './Philippines/css/navbar.css'
import './Philippines/css/home.css'
import './Philippines/css/history.css'
import './Philippines/css/history.scss'

import {BrowserRouter as  Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/history' element={<History></History>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
