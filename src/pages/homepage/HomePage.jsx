/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import testFile from './../../assets/testExercises.json';


function HomePage() {
    const [ fileContent, setFileContent ] = useState( '' );
    const [ exerciseIndex, setExerciseIndex ] = useState( 0 );
    const [ answer, setAnswer ] = useState( '' );
    const [ showOutcome, setShowOutcome ] = useState( '' );
    
    useEffect( () => {
        setFileContent( testFile );
    }, [] );
    
    useEffect( () => {
        console.log( 'fileContent: ', fileContent );
    }, [ fileContent ] );
    
    function handleClick() {
        if ( answer === fileContent[ exerciseIndex ].correct_answer ) {
            setShowOutcome( 'Answer is correct' );
        } else {
            setShowOutcome( 'answer is wrong' );
        }
    }
    
    
    return (
        <>
            <h1>Hier komt de Homepage</h1>
            {fileContent && (
                <>
                    <p>{fileContent[ exerciseIndex ].sentence}</p>
                    <input
                        type='text'
                        value={answer}
                        onChange={( e ) => setAnswer( e.target.value )}
                    />
                    <button
                        type='button'
                        onClick={handleClick}
                    >
                        Check answer
                    </button>
                </>
            )}
            {showOutcome && (
                <>
                    <p>{showOutcome}</p>
                </>
            )}
        </>
    )
        ;
}

export default HomePage;