import React, {FC, useState} from "react";
import FileUploader, {DocumentType} from "./FileUploader";

const UploadFileComponent: FC = () => {

    const [msg, setMsg] = useState<boolean>(false);

    return (
        <div className="container">
            <div className="row">
                <h3 className="my-3">Upload your Passport and Driving license</h3>
                <FileUploader title="Photo of two last pages of passport" imgNumber={1}
                              updateMessage={(success: boolean) => setMsg(success)}
                              documentType={DocumentType.PASSPORT}/>
                <br/>
                <br/>
                <FileUploader title="Photo of main part of the driving license" imgNumber={2}
                              updateMessage={(success: boolean) => setMsg(success)}
                              documentType={DocumentType.DRIVING_LICENSE}/>
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

