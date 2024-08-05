import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    document.title = "PlayReact"

    return (
        <>
            <main className='flex flex-col h-screen justify-center items-center text-center font-semibold'>
                <h1 className="text-5xl">
                    Welcome to the ReactJS MCQ Game
                </h1>
                <p className='text-lg my-2'>
                    Test your knowledge of ReactJS by answering multiple-choice questions.
                </p>
                <p className='text-lg'>
                    Total Questions: 5 <br />
                    Answer 3 or more to Win 🏆 <br />
                    Good luck!
                </p>
                <Link to="/mcq" className='p-2 px-4 mt-10 text-2xl rounded-lg bg-green-500 hover:bg-green-400 text-white hover:scale-110 ease-in-out duration-300'>
                    Let's Start
                </Link>
            </main>

        </>
    )
}

export default Home