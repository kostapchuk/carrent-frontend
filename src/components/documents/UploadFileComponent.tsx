import React, { FC, useState } from 'react';

import { Photo } from '../../api/ApiService';
import LocalStorage from '../../storage/LocalStorage';

const UploadFileComponent: FC = () => {
  const [filePrepared1, setFilePrepared1] = useState<Blob | null>(null);
  const [filePrepared2, setFilePrepared2] = useState<Blob | null>(null);
  const [msg, setMsg] = useState<boolean>(false);

  const onFileChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      setFilePrepared1(event.target.files[0]);
    }
  };

  const onFileChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      setFilePrepared2(event.target.files[0]);
    }
  };

  const uploadFileData1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setMsg(false);
    const data: FormData = new FormData();
    data.append('file', filePrepared1 || new Blob());
    data.append(
      'payload',
      new Blob(
        [
          JSON.stringify({
            userId: LocalStorage.getUserId(),
            imgNumber: (event.target as HTMLButtonElement).dataset.imgnumber,
          }),
        ],
        {
          type: 'application/json',
        }
      )
    );

    Photo.uploadFile(data).then(() => {
      setMsg(true);
    });
  };

  const uploadFileData2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setMsg(false);
    const data: FormData = new FormData();
    data.append('file', filePrepared2 || new Blob());
    data.append(
      'payload',
      new Blob(
        [
          JSON.stringify({
            userId: LocalStorage.getUserId(),
            imgNumber: (event.target as HTMLButtonElement).dataset.imgnumber,
          }),
        ],
        {
          type: 'application/json',
        }
      )
    );

    Photo.uploadFile(data).then(() => {
      setMsg(true);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <h3 className="my-3">Upload your Passport and Driving license</h3>
        <div style={{ width: '400px' }}>
          <label
            aria-controls=""
            className="my-2"
            htmlFor="formFile"
            style={{ fontWeight: 'bold' }}
          >
            Upload the first file
          </label>
          <div className="d-flex" style={{ height: '37px' }}>
            <input
              className="form-control"
              id="formFile1"
              onChange={onFileChange1}
              type="file"
            />
            <button
              className="btn btn-primary"
              data-imgnumber={1}
              disabled={!filePrepared1}
              onClick={uploadFileData1}
              style={{ width: '100px' }}
              type="button"
            >
              Upload 1
            </button>
          </div>
        </div>

        <br />
        <br />

        <div className="mb-3" style={{ width: '400px' }}>
          <label
            className="my-2"
            htmlFor="formFile2"
            style={{ fontWeight: 'bold' }}
          >
            Upload the second file
          </label>
          <div className="d-flex" style={{ height: '37px' }}>
            <input
              className="form-control"
              id="formFile2"
              onChange={onFileChange2}
              type="file"
            />
            <button
              className="btn btn-primary"
              data-imgnumber={2}
              disabled={!filePrepared2}
              onClick={uploadFileData2}
              type="button"
            >
              Upload 2
            </button>
          </div>
        </div>
      </div>
      {msg && (
        <div className="row">
          <div className="col-md-6 alert alert-success" role="alert" style={{}}>
            <h4 className="alert-heading" style={{ textAlign: 'center' }}>
              Thank you for uploading
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadFileComponent;
