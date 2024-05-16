import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import uploadIcon from '../../assets/upload-icon.svg'; // Import your upload icon image
import './Dropzone.css'
const MyDropzone = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div>
          <img src={uploadIcon} alt="Upload Icon" className="upload-icon" />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      )}
      {files.map((file) => (
        <p key={file.name}>
          {file.name} - {file.size} bytes
        </p>
      ))}
    </div>
  );
};

export default MyDropzone;
