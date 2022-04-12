import {useState} from "react";
import LocalStorage from "../../storage/LocalStorage";
import ApiService from "../../api/ApiService";

const UploadFileComponent = () =>  {

    const [filePrepared, setFilePrepared] = useState('');
    const [msg, setMsg] = useState(false);

    const onFileChange = (event) => {
        setFilePrepared(event.target.files[0]);
    }

    const uploadFileData = (event) => {
        event.preventDefault();
        setMsg(false);

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
                setMsg(true);
            })
    }

    return (
        <div className="container">
            <div className="row">
            <h3 className="my-3">Upload your Passport and Driving license</h3>
            <div style={{width: "400px"}}>
            <label className="my-2" htmlFor="formFile" style={{fontWeight: "bold"}}>Upload the first file</label>
                <div className="d-flex" style={{height: "37px"}}>
                    <input className="form-control" type="file" id="formFile1"/>
                    <button className="btn btn-primary" data-imgnumber={1} disabled={!filePrepared} onClick={uploadFileData} style={{width: "100px"}}>Upload 1</button>
                </div>
            </div>
            
            <br/>
            <br/>

            <div className="mb-3" style={{width: "400px"}}>
            <label className="my-2" htmlFor="formFile2" style={{fontWeight: "bold"}}>Upload the second file</label>
                <div className="d-flex" style={{height: "37px"}}>
                    <input className="form-control" onChange={onFileChange} type="file" id="formFile2"/>
                    <button className="btn btn-primary" data-imgnumber={2} disabled={!filePrepared} onClick={uploadFileData}>Upload 2</button>
                </div>
            </div>
            </div>
            {msg && 
            <div className="row">
                <div className="col-md-6 alert alert-success" role="alert" style={{}}>
                    <h4 className="alert-heading" style={{textAlign: "center"}}>Thank you for uploading</h4>
                </div>
            </div>
            }
        </div>
    )
}

export default UploadFileComponent;

