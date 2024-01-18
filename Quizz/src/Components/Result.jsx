import React from 'react';
import "../App.css"
import { Link } from 'react-router-dom';

const Result = ({ Correctanswers,answered }) => {
  
  return (
    <div className="result-container">
      <h1>Quiz Results</h1>
      <p>Congratulations!</p>
      <p>You've answered {Correctanswers} correctly!</p>
      <p>You have answered {answered} questions</p>
      {/* <div className="blast-animation"></div> */}
      <Link to={"/ "}><button>Back</button></Link>
    </div>
  );
};

export default Result;
