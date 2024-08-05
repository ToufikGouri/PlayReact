import { createSlice, configureStore } from "@reduxjs/toolkit";
// No need of seperate folder structure and files for Redux because use cases
// is very small here so handling everything in one file
// IF USE CASES INCREASES HANDLE IN PROPER REDUX STRUCTURE

// MCQ Data, list of 30 Questions
const mcqData = [
    {
        question: "What is ReactJS primarily used for?",
        options: ["Server-side scripting", "Developing user interfaces", "Database management", "Game development"],
        correctAnswer: "Developing user interfaces"
    },
    {
        question: "Which of the following is a feature of ReactJS?",
        options: ["Two-way data binding", "Virtual DOM", "SQL Queries", "RESTful API integration"],
        correctAnswer: "Virtual DOM"
    },
    {
        question: "In React, what is the purpose of using a key in a list?",
        options: ["To uniquely identify a list item", "To handle API calls", "To manage state", "To apply CSS styles"],
        correctAnswer: "To uniquely identify a list item"
    },
    {
        question: "Which method is used to update the state in a React component?",
        options: ["setState", "updateState", "changeState", "modifyState"],
        correctAnswer: "setState"
    },
    {
        question: "What is JSX in React?",
        options: ["A JavaScript XML syntax extension", "A type of database query", "A CSS preprocessor", "A server-side framework"],
        correctAnswer: "A JavaScript XML syntax extension"
    },
    {
        question: "What is the use of props in React?",
        options: ["To store local component state", "To pass data between components", "To handle side effects", "To apply CSS styles"],
        correctAnswer: "To pass data between components"
    },
    {
        question: "What is a React hook?",
        options: ["A lifecycle method", "A function that lets you use state and other React features", "A method for making API calls", "A CSS-in-JS library"],
        correctAnswer: "A function that lets you use state and other React features"
    },
    {
        question: "Which hook would you use to perform side effects in a functional component?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctAnswer: "useEffect"
    },
    {
        question: "What does the useState hook return?",
        options: ["The state value and a function to update it", "The props and a function to update them", "The component and a function to render it", "The DOM node and a function to manipulate it"],
        correctAnswer: "The state value and a function to update it"
    },
    {
        question: "Which tool is commonly used to create a new React application?",
        options: ["Node.js", "Create React App", "Webpack", "Babel"],
        correctAnswer: "Create React App"
    },
    {
        question: "What is the use of the useEffect hook in React?",
        options: ["To manage component state", "To perform side effects in function components", "To handle event listeners", "To directly manipulate the DOM"],
        correctAnswer: "To perform side effects in function components"
    },
    {
        question: "Which of the following is true about React components?",
        options: ["They must be class-based", "They must return JSX", "They cannot have state", "They cannot have props"],
        correctAnswer: "They must return JSX"
    },
    {
        question: "What is the purpose of ReactDOM.render()?",
        options: ["To create a new React component", "To update the state of a component", "To render a React element into the DOM", "To compile JSX code"],
        correctAnswer: "To render a React element into the DOM"
    },
    {
        question: "Which of the following is a correct way to handle events in React?",
        options: ["Directly modifying the DOM", "Using addEventListener in componentDidMount", "Using event handlers in JSX", "Using jQuery"],
        correctAnswer: "Using event handlers in JSX"
    },
    {
        question: "What is a controlled component in React?",
        options: ["A component that controls its own state", "A component that is controlled by another component", "A component that does not have state", "A component that controls the rendering of other components"],
        correctAnswer: "A component that controls its own state"
    },
    {
        question: "Which lifecycle method is called when a component is about to be removed from the DOM?",
        options: ["componentDidMount", "componentWillUnmount", "componentDidUpdate", "shouldComponentUpdate"],
        correctAnswer: "componentWillUnmount"
    },
    {
        question: "What is the purpose of the useReducer hook in React?",
        options: ["To manage component state", "To perform side effects", "To create a context", "To manage complex state logic"],
        correctAnswer: "To manage complex state logic"
    },
    {
        question: "What is the purpose of the React context API?",
        options: ["To manage component state", "To pass data through the component tree without props", "To handle component side effects", "To create reusable components"],
        correctAnswer: "To pass data through the component tree without props"
    },
    {
        question: "Which hook allows you to read the current context value in a functional component?",
        options: ["useContext", "useState", "useEffect", "useReducer"],
        correctAnswer: "useContext"
    },
    {
        question: "What does the useMemo hook do?",
        options: ["Returns a memoized value", "Returns the component's state", "Returns the component's props", "Performs side effects in function components"],
        correctAnswer: "Returns a memoized value"
    },
    {
        question: "What is a higher-order component (HOC) in React?",
        options: ["A component that is higher in the component tree", "A function that takes a component and returns a new component", "A built-in React component", "A method for managing state"],
        correctAnswer: "A function that takes a component and returns a new component"
    },
    {
        question: "Which method is used to create a new context in React?",
        options: ["React.createContext", "React.useContext", "React.useState", "React.useEffect"],
        correctAnswer: "React.createContext"
    },
    {
        question: "What is the purpose of the useRef hook?",
        options: ["To create a reference to a DOM element or class instance", "To manage state in a functional component", "To handle side effects", "To create a context"],
        correctAnswer: "To create a reference to a DOM element or class instance"
    },
    {
        question: "What is the purpose of the useCallback hook?",
        options: ["To memoize a callback function", "To handle side effects", "To create a context", "To manage state in a functional component"],
        correctAnswer: "To memoize a callback function"
    },
    {
        question: "What is the main benefit of using the virtual DOM in React?",
        options: ["Improved performance by minimizing direct DOM manipulation", "Enhanced security", "Simplified server-side rendering", "Better SEO"],
        correctAnswer: "Improved performance by minimizing direct DOM manipulation"
    },
    {
        question: "How can you optimize a React application?",
        options: ["Using the latest version of React", "Avoiding unnecessary re-renders", "Writing more JSX", "Using inline styles"],
        correctAnswer: "Avoiding unnecessary re-renders"
    },
    {
        question: "What is the purpose of React.Fragment?",
        options: ["To wrap multiple elements without adding extra nodes to the DOM", "To create reusable components", "To handle side effects", "To manage state"],
        correctAnswer: "To wrap multiple elements without adding extra nodes to the DOM"
    },
    {
        question: "What is the purpose of the useImperativeHandle hook?",
        options: ["To customize the instance value that is exposed when using ref", "To manage component state", "To handle side effects", "To create a context"],
        correctAnswer: "To customize the instance value that is exposed when using ref"
    },
    {
        question: "What is the purpose of the React.memo function?",
        options: ["To memoize a component and prevent unnecessary re-renders", "To handle side effects", "To manage state in a functional component", "To create a context"],
        correctAnswer: "To memoize a component and prevent unnecessary re-renders"
    },
    {
        question: "Which of the following is a correct way to conditionally render a component in React?",
        options: ["Using if statements inside JSX", "Using ternary operators or logical && inside JSX", "Using switch statements inside JSX", "Using for loops inside JSX"],
        correctAnswer: "Using ternary operators or logical && inside JSX"
    }
];

// Get 5 mcq
const mcqList = () => {
    const nums = []
    let i = 0
    while (i <= 4) {
        const num = Math.floor(Math.random() * 30)  // Generate numbers from 0 to 29
        if (!nums.includes(num)) {
            // nums.push(num)       // adding numbers
            nums.push(mcqData[num])     // adding data
            i++
        }
    }
    return nums
}

// ---------------------------------------------------------------

const initialState = {
    allQuestions: mcqList(),
    points: 0,
    isTestDone: false   // check result page to know details 
}

export const mcqSlice = createSlice({
    name: "mcq",
    initialState,
    reducers: {
        updatePoints: (state, action) => {
            state.points = action.payload
        },
        updateQuestions: (state) => {
            state.allQuestions = mcqList()
        },
        updateTestState: (state, action) => {
            state.isTestDone = action.payload
        }
    }
})
// Export actions
export const { updatePoints, updateQuestions, updateTestState } = mcqSlice.actions

// STORE
export const store = configureStore({
    reducer: mcqSlice.reducer
})
