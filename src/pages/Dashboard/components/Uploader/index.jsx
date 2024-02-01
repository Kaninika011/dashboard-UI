import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { GrDocumentCsv } from "react-icons/gr";
import { LuUpload } from "react-icons/lu";
import Papa from "papaparse";
import styles from "./Uploader.module.css";
import CSVTable from "./CSVTable";

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

  const { acceptedFiles, getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
  });

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  return (
    <div className={styles["uploader-container"]}>
      <div className={styles["upload-csv-title-div"]}>
        <p>Upload CSV</p>
      </div>
      <div className={styles["dropzone-wrapper"]}>
        <div className={styles["dropzone-container"]} {...getRootProps()}>
          <GrDocumentCsv className="icon-csv" size={25} />
          <input {...getInputProps()} />
          {isDragActive ? <p>Drop the CSV file here...</p> : <p>Drop your excel sheet here or browse</p>}
          {loading && <div className={styles["loading-overlay"]}> Loading...</div>}
          {acceptedFiles && acceptedFiles.length > 0 && (
            <div className={styles["file-info"]}>
              <p>{acceptedFiles[0].name}</p>
              <button className={styles["remove_button"]} onClick={() => setCSVData([])}>
                Remove
              </button>
            </div>
          )}
        </div>

       
        <button className={styles["button"]} onClick={open}>
          <LuUpload />
          Upload
        </button>
      </div>
      <div className={styles["csv-table-container"]}>
        {csvData.length > 0 && !loading && <CSVTable csvData={csvData} />}
      </div>
    </div>
  );
};

export default CSVUploader;
