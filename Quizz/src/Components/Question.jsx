import React, { useState } from 'react';
import discreteMathQuestions from './questions';
import "../App.css"
import { Link } from 'react-router-dom';

const Question = (props) => {
    // const [Correctanswers, setCorrectanswers] = useState(0);
    const { Correctanswers, setCorrectanswers } = props;
    const { answered, setAnswered } = props;
    // const {, setCorrectanswers}= props;
    const [Result, setResult] = useState(false)
    const [qno, setQno] = useState(0)
    const Check = (option) => {

        if (qno < discreteMathQuestions.length - 1)
            setQno(qno + 1)
        if (option.isCorrect == true) {
            alert("Your option is correct")
            setCorrectanswers(Correctanswers + 1)

        }
        else {
            alert("Your option is wrong")
        }
        setAnswered(answered + 1)

        console.log(answered)
    }

    const next = () => {
        if (qno < discreteMathQuestions.length - 1) {
            setQno(qno + 1);
        }
        if (qno == 5) {
            setResult(true)
        }
    }
    const previous = () => {
        if (qno > 0) {
            setQno(qno - 1)
        }
    }
    return (
        <div className='questionmain'>
            <div>{discreteMathQuestions[qno].text}</div>

            <div className="buttons">
                {discreteMathQuestions[qno].options.map((option, index) => (
                    <button key={index} onClick={() => Check(option)}>
                        {option.text}
                    </button>
                ))}
            </div>


            <div className='endbuttons'>

                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
                <Link to={"/Quzzmain"} onClick={() => {
                    alert("Sure to quick")
                }}><button>Quit</button></Link>
                <Link to={"/Result"}><button Correctanswers={Correctanswers} Answered={answered} onClick={() => {
                    alert("Do you want to finish the quizz")
                }}>Finish</button></Link>
            </div>
            <div className='res'>
                {qno === discreteMathQuestions.length - 1 && (
                    <Link to={"/Result"}> <button classname="results" Correctanswers={Correctanswers} >Results</button></Link>
                )}
            </div>
        </div>
    );
};

export default Question;
