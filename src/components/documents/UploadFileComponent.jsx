import {useState} from "react";
import Header from "../header/Header";

const UploadFileComponent = () =>  {

    const [file, setFile] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const uploadFileData = (event) => {
        event.preventDefault();
        setMsg('');

        let data = new FormData();
        data.append('file', file);

        fetch('http://localhost:8080/upload', {
            method: 'POST',
            body: data
        }).then(response => {
            setMsg("File successfully uploaded");
        }).catch(err => {
            setError(err);
        });

    }

    return (
        <>
            <Header/>
            <div id="container">
                <h1>File Upload Example using React</h1>
                <h3>Upload a File</h3>
                <h4>{msg}</h4>
                <input onChange={onFileChange} type="file"/>
                <button disabled={!file} onClick={uploadFileData}>Upload</button>
            </div>
        </>
    )
}

export default UploadFileComponent;