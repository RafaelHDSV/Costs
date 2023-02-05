import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>Home</li>
          <li>Contato</li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<NewProject />} />
        </Routes>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
