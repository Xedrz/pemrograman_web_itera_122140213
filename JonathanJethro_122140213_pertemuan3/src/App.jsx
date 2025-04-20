// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Stats } from './pages/Stats/Stats'
import { BookProvider } from './context/BookContext'
import './Style.css'

function App() {
  return (
    <BookProvider>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stats">Statistics</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BookProvider>
  )
}

export default App
