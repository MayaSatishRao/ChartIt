// importing the required components

import React, { useState } from "react";
import "./FileUpload.css"
import readFiles from "./GetJSON";

// react FileUpload componenet
const FileUpload = ({changeState, changeType}) => {
  // creating a state for csv file uploaded and chartdata
  const [file, setFile] = useState();
  // jsx code for the component
  return (
      <form id="file-form">
      <div className="mb-3">
      <input
          type="file"
          accept=".csv"
          id="inputGroupFile02"
          className="form-control"
          onChange={(e) => {  
            setFile(e.target.files[0])}}
        />
         <select className="custom-select"
         onChange={(e)=>{
               changeType(e.target.value);
         }}>
            <option value="bar">Bar</option>
            <option value="line">Line</option>
         </select>
        <button
        className="btn btn-primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            readFiles(file,changeState);
          }}>
          Submit
        </button>
      </div>
      </form>
  );
};

export default FileUpload;
