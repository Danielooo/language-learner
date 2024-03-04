/* eslint-disable no-unused-vars */
import './HomePage.css'

import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import testFile from './../../assets/testExercises.json';
import {ExercisesContext} from "../../context/ExercisesContext.jsx";


// TODO: Next en ShowAnswer op true op keystroke 1, 2

function HomePage() {
    const { exerciseFiles, setExerciseFiles } = useContext( ExercisesContext );

    const [ fileContent, setFileContent ] = useState( [] );
    const [ exerciseIndex, setExerciseIndex ] = useState( 0 );

    const [ answer, setAnswer ] = useState( '' );
    const [ showAnswer, setShowAnswer ] = useState( false )

    const [ showOutcome, setShowOutcome ] = useState( false )
    const [ outcome, setOutcome ] = useState( '' );
    const [ showAfterAnswered, setShowAfterAnswered ] = useState( false )

    // button states
    const [ prevButtonDisabled, setPrevButtonDisabled ] = useState( exerciseIndex === 0 ? true : false)
    const [ nextButtonDisabled, setNextButtonDisabled ] = useState(false )

    const textShowOrHideAnswer = { show: 'Show answer', hide: 'Hide answer'}
    const [ buttonTextShowOrHideAnswer, setButtonTextShowOrHideAnswer ] = useState(textShowOrHideAnswer.show)



    useEffect( () => {
        // Loads exercise content on component mount
        setFileContent( testFile );
    }, [] );


    useEffect(() => {
        // Adjusts button disabled states based on the current exercise index
        if (fileContent.length > 0) {
            if (exerciseIndex <= 0) {
                setPrevButtonDisabled(true)
            } else if (prevButtonDisabled === true) {
                setPrevButtonDisabled(false)
            }


            if (exerciseIndex >= fileContent.length - 1) {
                setNextButtonDisabled(true)
            } else if (nextButtonDisabled === true) {
                setNextButtonDisabled(false)
            }
        }
    }, [ exerciseIndex, fileContent ]);

    useEffect(() => {
        // Sets up keyboard shortcuts for navigation and showing answers
        function handleShortcuts(e) {
            if (e.ctrlKey && e.key === 'l') {
                e.preventDefault();
                handleNextQuestion();
            }

            if (e.ctrlKey && e.key.toLowerCase() === 'p') {
                e.preventDefault()
                handlePrevQuestion()
            }

            if (e.ctrlKey && e.key.toLowerCase() === 'a') {
                e.preventDefault();
                handleShowAnswer()
            }
        }

            window.addEventListener('keydown', handleShortcuts)

            return () => {
                window.removeEventListener('keydown', handleShortcuts)
            }

    }, [fileContent, exerciseIndex, showAnswer ])


    // Handler functions
    function handleClickInput() {
        // Checks if the provided answer is correct.
        console.log('handleClickinput invoked')
        if ( answer === fileContent[ exerciseIndex ].correct_answer ) {
            setOutcome( `'${answer}' is correct` );
            setShowAfterAnswered( true )
        } else {
            setOutcome( `'${answer}' is wrong` );
            setShowAfterAnswered( true )
        }

        setShowOutcome( true )
    }

    function handlePrevQuestion() {
        // Navigates to the previous question
        if (exerciseIndex > 0 ) {
            setExerciseIndex( exerciseIndex - 1 )

            setOutcome(false )
            setShowAnswer( false )
            setAnswer('' )
            setShowAfterAnswered( false )
        }

        if ( exerciseIndex === 0 ) {
            setPrevButtonDisabled( true )
        }
    }

    function handleNextQuestion() {
        // Navigates to the next question
        if (exerciseIndex < fileContent.length - 1) {
            setExerciseIndex( exerciseIndex + 1 )

            setOutcome(false )
            setShowAnswer( false )
            setAnswer('' )
            setShowAfterAnswered( false )
        } else {
            setNextButtonDisabled( true )
        }
    }


    function handleShowAnswer() {
        // Toggles the visibility of the correct answer
        setShowAnswer( !showAnswer )
        if ( buttonTextShowOrHideAnswer === textShowOrHideAnswer.show ) {
            setButtonTextShowOrHideAnswer( textShowOrHideAnswer.hide )
        } else {
            setButtonTextShowOrHideAnswer( textShowOrHideAnswer.show )
        }
    }


    return (
        <>
            <header>
                <h1>Exercises</h1>
            </header>
            <section className='outer-container'>
                {fileContent.length > 0 && (
                    <>
                        <h3>{exerciseIndex + 1} / {fileContent.length}</h3>
                        <p>{fileContent[ exerciseIndex ].sentence}</p>
                        <input
                            type='text'
                            value={answer}
                            onChange={( e ) => setAnswer( e.target.value )}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleClickInput();
                                }
                            }}
                        />
                        <button
                            type='button'
                            onClick={handleClickInput}

                        >
                            Check answer
                        </button>
                    </>
                )}
                {showOutcome && (
                    <>
                        <p>{outcome}</p>
                    </>
                )}

                <section className='exercise-action-buttons'>
                    <button
                        type='button'
                        onClick={handlePrevQuestion}
                        disabled={prevButtonDisabled}
                    >
                        Previous
                    </button>
                    <button
                        type='button'
                        onClick={handleNextQuestion}
                        disabled={nextButtonDisabled}
                    >
                        Next
                    </button>
                    <button
                        type='button'
                        onClick={handleShowAnswer}
                    >
                        { buttonTextShowOrHideAnswer }
                    </button>
                </section>

                {showAnswer && (
                    <>
                        <p>The answer is: </p>
                        <p>{fileContent[ exerciseIndex ].correct_answer}</p>
                    </>
                )}
            </section>
        </>
    )
        ;
}

export default HomePage;