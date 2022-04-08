import {useState} from "react";
import Header from "../header/Header";
import LocalStorage from "../../storage/LocalStorage";
import ApiService from "../../api/ApiService";

const UploadFileComponent = () =>  {

    const [filePrepared, setFilePrepared] = useState('');
    const [msg, setMsg] = useState('');

    const onFileChange = (event) => {
        setFilePrepared(event.target.files[0]);
    }

    const uploadFileData = (event) => {
        event.preventDefault();
        setMsg('');

        let data = new FormData();
        data.append('file', filePrepared);
        data.append("payload", new Blob([JSON.stringify({
            userId: LocalStorage.getUserId(),
            imgNumber: event.target.dataset.imgnumber
        })], {
            type: "application/json"
        }));

        ApiService.uploadFile(data)
            .then(response => {
                console.log(response);
                setMsg("File successfully uploaded");
            })
    }

    return (
        <>
            <h1>File Upload Example using React</h1>
            <h3>Upload a File</h3>
            <h4>{msg}</h4>
            <input onChange={onFileChange} type="file"/>
            <button data-imgnumber={1} disabled={!filePrepared} onClick={uploadFileData}>Upload 1</button>
            <br/>
            <br/>
            <input onChange={onFileChange} type="file"/>
            <button data-imgnumber={2} disabled={!filePrepared} onClick={uploadFileData}>Upload 2</button>
        </>
    )
}

export default UploadFileComponent;