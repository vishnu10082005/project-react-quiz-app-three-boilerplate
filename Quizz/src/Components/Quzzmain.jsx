import React from 'react'
import { Link } from "react-router-dom"
import "../App.css"
// import Question from "./Question"
import Question from './Question'

const Quzzmain = () => {
    return (

        <>
            <div className="top">
                <img className="Kalvium_logo" src="https://kalvium.com/wp-content/uploads/2023/05/Kalvium-OG.webp" alt="" />
                <h2 className="Welcome">Welcome to Konfident Quizz</h2>
                <img className="Quiz_logo" src="https://t3.ftcdn.net/jpg/05/69/96/48/360_F_569964847_Wa3tNpPYRGABpplPGSFT3LLB7E2wU0jb.jpg" alt="" />
            </div>
<div className="main">
            <Link to="/Question">
                <button>Play</button>
            </Link></div>
        </>
    )
}

export default Quzzmain
