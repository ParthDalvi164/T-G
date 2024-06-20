import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"; //bootstrap.bundle.min.js / bootstrap.bundle.js



import "./ApplicantsList.css";
import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function ApplicantsList() {

  


  

  const [AdmissionType, setAdmissionType] = useState("All");
  const AdmissionTypeCAP = () => {
    setAdmissionType("CAP");
  };
  const AdmissionTypeInstitute = () => {
    setAdmissionType("Institute-level");
  };
  const AdmissionTypeAll = () => {
    setAdmissionType("All");
  };


  const [Class, setClass] = useState("FE");
  const setClassFE = ()=>{
    setClass("FE");
  };
  const setClassSE = ()=>{
    setClass("SE");
  };
  const setClassTE = ()=>{
    setClass("TE");
  };
  const setClassBE = ()=>{
    setClass("BE");
  };


  const [DocStatus, setDocStatus] = useState("Not Approved");
  const setDocStatusApproved = ()=>{
    setDocStatus("Approved");
  };
  const setDocStatusDisapproved = ()=>{
    setDocStatus("Not Approved");
  };

  const [TransactionStatus, setTransactionStatus] = useState("Pending");
  const setTransactionStatusCompleted = ()=>{
    setTransactionStatus("Completed");
  }
  const setTransactionStatusPending = ()=>{
    setTransactionStatus("Pending");
  }


////Used for displaying content in table
  const [data2, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/data')
      .then((response) => {
        setData(response.data);
        console.log(data2);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  

  const navigate = useNavigate();
  const navigateToDocVerification = (uid) => {
    const data = { uidRecieved : uid };
    console.log(data);
    navigate('/documentverification', { state: data });
  };

  // const docVerificationPage = (name, applicationNumber) =>
  //   navigate("/documentverification ", { state: { name, applicationNumber } });

  return (
    <>
      <div className="title">
        <h2>Applicants list</h2>
      </div>

      <div className="search-container">
        <div className="row search-bar-row">
          <div className="col-1">
            <div className="col-1 search-bar-icon "> <b>Search</b></div>
          </div>
          <div className="col-10">
            <div className="row ">
              <div className="row admissionSelectButton">
                <div className="col-6 row1col1 ">
                  <div className="row">
                    <div className="col-4">Admission Type </div>
                    <div className="col-8">
                      <div className="dropdown dropdown-btn |">
                        <div className="dropdown SelectButton">
                          <button
                            className="btn btn-secondary dropdown-toggle typeSelect"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {AdmissionType}
                          </button>
                          <ul className="dropdown-menu">
                            <li
                              className="dropdown-item"
                              onClick={AdmissionTypeCAP}
                            >
                              CAP
                            </li>
                            <li
                              className="dropdown-item"
                              onClick={AdmissionTypeInstitute}
                            >
                              Institute Level
                            </li>
                            <li
                              className="dropdown-item"
                              onClick={AdmissionTypeAll}
                            >
                              All
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 row1col1">
                  <div className="row">
                    <div className="col-4">Select Class</div>
                    <div className="col-8">
                      <div className="dropdown dropdown-btn SelectButton">
                        <div className="dropdown SelectButton">
                          <button
                            className="btn btn-secondary dropdown-toggle typeSelect"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {Class}
                          </button>
                          <ul className="dropdown-menu">
                            <li
                              className="dropdown-item"
                              onClick={setClassFE}
                            >
                              FE
                            </li>
                            <li
                              className="dropdown-item"
                              onClick={setClassSE}
                            >
                              SE
                            </li>
                            <li
                              className="dropdown-item"
                              onClick={setClassTE}
                            >
                              TE
                            </li>
                            <li
                              className="dropdown-item"
                              onClick={setClassBE}
                            >
                              BE
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="row admissionSelectButton">
                <div className="col-6 row1col1 admission-type">
                  <div className="row">
                    <div className="col-4">Documents Approved</div>
                    <div className="col-8">
                      <div className="dropdown dropdown-btn ">
                        <div className="dropdown SelectButton">
                          <button
                            className="btn btn-secondary dropdown-toggle typeSelect"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {DocStatus}
                          </button>
                          <ul className="dropdown-menu">
                            <li
                              className="dropdown-item"
                              onClick={setDocStatusApproved}
                            >
                              Approved
                            </li>
                            <li
                              className="dropdown-item"
                              onClick={setDocStatusDisapproved}
                            >
                              Not Approved
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 row1col1">
                  <div className="row">
                    <div className="col-4">Transaction approved</div>
                    <div className="col-8">
                      <div className="dropdown dropdown-btn ">
                        <div className="dropdown SelectButton">
                          <button
                            className="btn btn-secondary dropdown-toggle typeSelect"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {TransactionStatus}
                          </button>
                          <ul className="dropdown-menu">
                            <li
                              className="dropdown-item"
                              onClick={setTransactionStatusCompleted}
                            >
                              Completed
                            </li>
                            <li
                              className="dropdown-item"
                              onClick={setTransactionStatusPending}
                            >
                              Pending
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">UID</th>
              <th scope="col">Name</th>
              <th scope="col">Application number</th>
              <th scope="col">Admission Type</th>
              <th scope="col">Document Status</th>
              <th scope="col">Transaction status</th>
              <th scope="col">Verify</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((row, index) => {
              // if (AdmissionType === "All") {
                if(row.documentsApproved === DocStatus){
                  if(row.transactionApproved === TransactionStatus){
                    return (
                      <tr key={row.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{row.id}</td>
                        <td>{row.fullname}</td>
                        <td>{row.cet_application_id}</td>
                        <td>Brochure Institute Level</td>
                        <td>{row.documentsApproved}</td>
                        <td>{row.transactionApproved}</td>
                        
                        <td>
                          <button
                            type="button"
                            onClick={()=>{navigateToDocVerification(row.id)}}
                            
                            className="btn verify-btn"
                          >
                            Verify
                          </button>
                        </td>
                      </tr>
                    );
                  }
                }
              // } 
              // else if (row.admissionType === AdmissionType) {
                else if(row.DocStatus === DocStatus){
                  if(row.TransactionStatus === TransactionStatus){
                    return (
                      <tr key={row.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{row.uid}</td>
                        <td>{row.name}</td>
                        <td>{row.applicationNumber}</td>
                        <td>{row.admissionType}</td>
                        <td>{row.DocStatus}</td>
                        <td>{row.TransactionStatus}</td>
                        
                        <td>
                          
                          <button
                            type="button"
                            onClick={()=>{navigateToDocVerification(row.id)}}//row.id
                            className="btn verify-btn"
                          >
                            Verify
                          </button>
                        </td>
                      </tr>
                    );
                  }
                }
                
              // }
              // else if (row.admissionType === "Institute Level") {
              //   return (
              //     <tr key={row.id}>
              //       <th scope="row">{index + 1}</th>
              //       <td>{row.name}</td>
              //       <td>{row.applicationNumber}</td>
              //       <td>{row.admissionType}</td>
              //       <td>
              //         <button
              //           type="button"
              //           onClick={navigateToDocVerification}
              //           className="btn verify-btn"
              //         >
              //           Verify
              //         </button>
              //       </td>
              //     </tr>
              //   );
              // }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ApplicantsList;