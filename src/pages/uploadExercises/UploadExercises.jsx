import { useState } from 'react';


function UploadExercises() {
    const [ fileContent, setFileContent ] = useState( '' );
    
    const handleFileChange = ( event ) => {
        const file = event.target.files[ 0 ];
        if ( file ) {
            const reader = new FileReader();
            reader.onload = ( e ) => {
                setFileContent( e.target.result );
            };
            reader.readAsText( file );
        }
    };
    
    return (
        <>
            <h1>Upload Exercises page</h1>
            <input
                type='file'
                onChange={handleFileChange}
            />
            <pre>{fileContent}</pre>
        </>
    
    );
}

export default UploadExercises;