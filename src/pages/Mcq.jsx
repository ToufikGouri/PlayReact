import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updatePoints, updateQuestions, updateTestState } from '../Redux'

const Mcq = () => {

    document.title = "MCQ | PlayReact"

    const points = useSelector(state => state.points)
    const allQuestions = useSelector(state => state.allQuestions)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // States
    const [qNo, setQNo] = useState(0)
    const [nextBtn, setNextBtn] = useState(false)       // to toggle Next button and prevent user clicking any other option after choosing one


    const handleSelect = (val) => {

        setNextBtn(true)

        const currentOpt = document.getElementById(`Q-${qNo}-O-${val}`)

        // If current option is not right
        if (currentOpt.classList.contains(`Q-${qNo}-wrong`)) {
            currentOpt.classList.add("bg-red-500")
            return
        }

        // If it is right
        document.querySelector(`.Q-${qNo}-Ans`).classList.add("bg-green-500")
        dispatch(updatePoints(points + 1))
    }

    const handleNext = () => {
        if (qNo > 3) {
            dispatch(updateTestState(true))     // check result page to know more
            navigate("/result")
        } else {
            setNextBtn(false)
            setQNo(qNo + 1)
        }
    }


    return (
        <>
            {/* Top displays */}
            <div className='absolute top-2 left-2 md:text-xl md:left-10'>
                <div className='cursor-pointer' onClick={() => { dispatch(updatePoints(0)); dispatch(updateQuestions()); navigate('/') }}> {/* Reset points & questions when going back to home */}
                    <i className="fa-solid fa-chevron-left"></i> Back to home
                </div>
            </div>
            <div className='absolute top-2 right-2 md:text-xl md:right-10'>
                <p>Correct Answers {points}/5</p>
            </div>

            <h1 className='text-4xl absolute top-16 md:top-2 left-[50%] translate-x-[-50%]'>Question {qNo + 1}</h1>

            <div className='flex flex-col h-screen justify-center items-center'>
                <div className=''>
                    {/* Question */}
                    <p className='text-2xl text-center mb-5'>{allQuestions[qNo].question}</p>

                    {/* Options */}
                    <p id={`Q-${qNo}-O-${0}`}
                        className={`cursor-pointer my-1 p-2 opt rounded ${allQuestions[qNo].options[0] === allQuestions[qNo].correctAnswer ? `Q-${qNo}-Ans` : `Q-${qNo}-wrong`}`}
                        onClick={() => !nextBtn && handleSelect(0)}>
                        A) {allQuestions[qNo].options[0]}
                    </p>
                    <p id={`Q-${qNo}-O-${1}`}
                        className={`cursor-pointer my-1 p-2 opt rounded ${allQuestions[qNo].options[1] === allQuestions[qNo].correctAnswer ? `Q-${qNo}-Ans` : `Q-${qNo}-wrong`}`}
                        onClick={() => !nextBtn && handleSelect(1)}>
                        B) {allQuestions[qNo].options[1]}
                    </p>
                    <p id={`Q-${qNo}-O-${2}`}
                        className={`cursor-pointer my-1 p-2 opt rounded ${allQuestions[qNo].options[2] === allQuestions[qNo].correctAnswer ? `Q-${qNo}-Ans` : `Q-${qNo}-wrong`}`}
                        onClick={() => !nextBtn && handleSelect(2)}>
                        C) {allQuestions[qNo].options[2]}
                    </p>
                    <p id={`Q-${qNo}-O-${3}`}
                        className={`cursor-pointer my-1 p-2 opt rounded ${allQuestions[qNo].options[3] === allQuestions[qNo].correctAnswer ? `Q-${qNo}-Ans` : `Q-${qNo}-wrong`}`}
                        onClick={() => !nextBtn && handleSelect(3)}>
                        D) {allQuestions[qNo].options[3]}
                    </p>
                </div>

                <button onClick={handleNext} className={`${nextBtn === false ? "invisible" : ""} p-2 px-4 mt-10 text-2xl rounded-lg bg-green-500 hover:bg-green-400 text-white`}>
                    {qNo < 4 ? "Next" : "Submit"}
                </button>
            </div>

        </>
    )
}

export default Mcq