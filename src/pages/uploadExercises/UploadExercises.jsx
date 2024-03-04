import {useEffect, useState} from 'react';

import './../../App.css'


function UploadExercises() {
    const [ fileContent, setFileContent ] = useState( [] );

    useEffect(() => {
        // console.log('fileContent', fileContent)
    }, [ fileContent ]);

    function handleFileChange(event){
        try {
            // Retrieves the list of files selected by the user.
            const files = event.target.files;
            // console.log('files: ', files);

            // Converts the FileList to an array to facilitate operations like iteration.
            const arrayFromFiles = Array.from(files);
            console.log('arrayFromFiles: ', arrayFromFiles);

            // Loops through each file in the converted array.
            arrayFromFiles.forEach((file) => {
                // Initializes a FileReader to asynchronously read the content of the file.
                const reader = new FileReader();

                // Defines what to do once the file is successfully read.
                // The 'onload' event fires after the read operation completes.
                reader.onload = (e) => {
                    // Updates the component's state to include the newly read file.
                    // Adds an object containing the file's name and its textual content
                    // to the existing list of files in the state.
                    setFileContent(prev => [...prev, { name: file.name, content: e.target.result }]);
                };

                // Starts reading the content of the file as text.
                // The result will be stored in 'e.target.result' and processed in the 'onload' handler.
                reader.readAsText(file);
            });

        } catch (e) {
            // Logs any errors encountered during the file reading process to the console.
            console.error(e);
        }
    };





    return (
        <>
            <article className='default-page'>
            <h1>Upload Exercises page</h1>
            <input
                type='file'
                multiple
                onChange={handleFileChange}
            />
                {fileContent.map(({name, content}, index) => (
                    <section key={name}>
                        <h3>File {index + 1}: {name}</h3>
                        <textarea value={content} readOnly style={{width: "100%", height: "100px"}}/>
                    </section>
                ))}
            </article>
        </>

    );
}

export default UploadExercises;