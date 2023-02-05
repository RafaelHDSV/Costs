import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/company'>Company</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/newproject'>NewProject</Link>
        </div>

        <Routes>
          <Container>
            <Route exact path='/' element={<Home />} />
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newproject' element={<NewProject />} />
          </Container>
        </Routes>

        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
