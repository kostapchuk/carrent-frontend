import React, {FC, useState} from 'react';
import LocalStorage from "../../storage/LocalStorage";
import AuthApiService from "../../api/AuthApiService";

export const enum DocumentType {
    PASSPORT,
    DRIVING_LICENSE,
}

interface FileUploaderProps {
    title: string,
    imgNumber: Number,
    updateMessage: (success: boolean) => void,
    documentType: DocumentType,
}

const FileUploader: FC<FileUploaderProps> = ({title, imgNumber, updateMessage, documentType}) => {

    const [filePrepared, setFilePrepared] = useState<Blob | null>(null);

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilePrepared(event.target.files![0]);
    }

    const uploadFileData = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        updateMessage(false);
        let data: FormData = new FormData();
        data.append('file', filePrepared ? filePrepared : new Blob());
        data.append("payload", new Blob([JSON.stringify({
            userId: LocalStorage.getUserId(),
            imgNumber: (event.target as HTMLButtonElement).dataset.imgnumber,
        })], {
            type: "application/json"
        }));
        let promise;
        if (documentType == DocumentType.PASSPORT) {
            promise = AuthApiService.uploadPassport(data);
        } else if (documentType == DocumentType.DRIVING_LICENSE) {
            promise = AuthApiService.uploadDrivingLicense(data);
        }
        promise?.then(() => {
            updateMessage(true);
        })
    }

    return (
        <div className="mb-3" style={{width: "400px"}}>
            <label className="my-2" htmlFor="formFile2" style={{fontWeight: "bold"}}>{title}</label>
            <div className="d-flex" style={{height: "37px"}}>
                <input className="form-control" onChange={onFileChange} type="file" id="formFile2"/>
                <button className="btn btn-primary" data-imgnumber={imgNumber} disabled={!filePrepared}
                        onClick={uploadFileData}>Upload
                </button>
            </div>
        </div>
    );
};

export default FileUploader;
