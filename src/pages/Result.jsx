import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updatePoints, updateQuestions, updateTestState } from '../Redux'

const Result = () => {

    document.title = "Result | PlayReact"

    const points = useSelector(state => state.points)
    // to handle case when user shouldn't be able check result without appearing for the  
    // test we will add a check there as isTestDone
    const isTestDone = useSelector(state => state.isTestDone)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getResult = () => {
        let result;
        switch (points) {
            case 5:
                result = <div>Outstanding <i className="fa-solid fa-trophy"></i></div>
                break;
            case 4:
                result = <div>Good Job <i className="fa-solid fa-medal"></i></div>
                break;
            case 3:
                result = <div>Can Do Better <i className="fa-solid fa-medal"></i></div>
                break;
            case 2:
                result = <div>Need Improvement <i className="fa-regular fa-face-frown"></i></div>
                break;
            default:
                result = <div>Better Luck Next Time <i className="fa-regular fa-face-sad-cry"></i></div>
        }
        return result
    }

    return (
        <>
            <div className='flex flex-col h-screen justify-center items-center'>
                {
                    !isTestDone ?
                        (<div className='flex flex-col items-center text-center'>
                            <h1 className='text-4xl capitalize'>Please complete the test to see your result</h1>
                            <button onClick={() => navigate("/mcq")} className='p-2 px-4 mt-10 text-2xl rounded-lg bg-green-500 hover:bg-green-400 text-white hover:scale-110 ease-in-out duration-300'>
                                Let's Start
                            </button>
                        </div>)
                        :
                        (<div className='text-center flex flex-col items-center bg-white/50 p-6 rounded-xl'>
                            {
                                points >= 3 ? <div className='text-5xl text-green-500'>PASS</div> : <div className='text-5xl text-red-500'>FAIL</div>
                            }
                            <h1 className='text-5xl my-10'>Your Score : {points}</h1>
                            <h1 className='text-3xl'>{getResult()}</h1>
                            <button onClick={() => { dispatch(updatePoints(0)); dispatch(updateQuestions()); dispatch(updateTestState(false)); navigate('/mcq') }} className='p-2 px-4 mt-10 text-2xl rounded-lg bg-green-500 hover:bg-green-400 text-white hover:scale-110 ease-in-out duration-300'>
                                Retake Test
                            </button>
                        </div>)
                }
            </div>
        </>
    )
}

export default Result