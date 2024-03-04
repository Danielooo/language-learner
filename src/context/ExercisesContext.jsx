/* eslint-disable no-undef */
import { createContext, useState } from "react";


export const ExercisesContext = createContext({});

const test = 5;

function ExercisesContextProvider( { children } ) {
    const [ exerciseFiles, setExerciseFiles ] = useState({})

    const ExercisesDataAndFunctions = {
        exerciseFiles,
        setExerciseFiles,
    }

    return (
        <ExercisesContext.Provider value={ExercisesDataAndFunctions}>
            { children }
        </ExercisesContext.Provider>

    )

}

export default ExercisesContextProvider;