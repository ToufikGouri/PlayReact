import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mcq from './pages/Mcq'
import Result from './pages/Result'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mcq' element={<Mcq />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

// Develop a captivating ReactJS MCQ game app with one-question-per-screen navigation, 
// user-friendly design, and a final score display upon completing the questions. 
// Only share the Github and hosted link of following assignment.