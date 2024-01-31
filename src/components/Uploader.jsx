
import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { GrDocumentCsv } from "react-icons/gr";
import { LuUpload } from "react-icons/lu";
import Papa from 'papaparse';
import './uploader.css'; 
import CSVTable from './CSVTable'; 

const CSVUploader = () => {
  const [csvData, setCSVData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    setLoading(true);

    
    setTimeout(() => {
      Papa.parse(file, {
        complete: (result) => {
         
          setCSVData(result.data);
          setLoading(false);
        },
        header: true, 
      });
    }, 2000);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    
    return () => setLoading(false);
  }, []);

  return (
   
    <div className="uploader-container">
    <h1>Upload CSV</h1>
    <div className="dropzone-container" {...getRootProps()}>
    <GrDocumentCsv className='icon-csv' size= {25}/>
        <input {...getInputProps()} />
        {isDragActive ? (
            <p>
              Drop the CSV file here...</p>
        ) : (
            <p>Drag and drop a CSV file here</p>
        )}
        {loading && <div className="loading-overlay"> Loading...</div>}

        <div className="dropzone-buttons">
            <button className="button" onClick={() => {}}><LuUpload/>Upload</button>
            <button className="button" onClick={() => setCSVData([])}>Remove</button>
        </div>
    </div>

    {csvData.length > 0 && !loading && <CSVTable csvData={csvData} />}
</div>
);
};

export default CSVUploader;

