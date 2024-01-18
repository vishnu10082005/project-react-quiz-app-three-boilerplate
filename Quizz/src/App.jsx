import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quzzmain from './Components/Quzzmain';
import Result from './Components/Result';
import Question from './Components/Question';

function App() {
  const [Correctanswers, setCorrectanswers] = useState(0);
  const [answered, setAnswered]=useState(0)
  return (
    <Router>
      <>
        {/* <Quzzmain /> */}
        <Routes>
          <Route path="/" element={<Quzzmain />} />
          <Route path="/Quzzmain" element={<Quzzmain />} />
          <Route path="/Question" element={<Question answered={answered} Correctanswers={Correctanswers} setCorrectanswers={setCorrectanswers}  setAnswered={setAnswered} />} />
          <Route path="/Result" element={<Result answered={answered} Correctanswers={Correctanswers} setAnswered={setAnswered} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;


