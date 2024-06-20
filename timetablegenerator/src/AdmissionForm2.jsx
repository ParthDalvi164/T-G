import React from 'react';
import './AdmissionForm.css';
import DownloadPDFButton from './DownloadPDFButton';


import DocumentUpload from './DocumentUpload';

const AdmissionForm2 = ({ formDataB, setFormDataB, filePreviews, setFilePreviews, formData1, userId, setFormData1 }) => {
  
  const dateOfBirth = formDataB.personalDetails.dateofBirth instanceof Date
    ? formDataB.personalDetails.dateofBirth.toLocaleDateString()
    : '';



    const formatDate = (date) => {
      const d = new Date(date);
      const day = d.getDate();
      const month = d.getMonth() + 1; // Month is zero based, so we add 1
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    };
  
    // Get current system date in dd-mm-yyyy format
    const currentDate = formatDate(new Date());
  
  const {
    personalDetails = {},
    academicDetails = {},
    cetDetails = {},
    documentUpload = {},
    transactionDetails = {},
    preference = ''
  } = formDataB; 

  return (
    <div id="pdf-content">
      <form className="admission-form">
        <table className="form-table">
          <thead>
            <tr>
              <th colSpan="4">
                <div className="header">
                  <img src="/1.png" alt="SIES Logo" className="logo" />
                  <div className="header-left">
                    <div className="school-info">
                      <h2>SIES Graduate School of Technology</h2>
                      <p>Sri Chandrasekarendra Saraswati Vidyapuram Sector-V, Nerul, Navi Mumbai, Maharashtra 400706</p>
                      <p>Phone: 022 6108 2402</p>
                    </div>
                  </div>
                  <div className="header-right">
                    <img src={filePreviews.photo} alt="Profile" className="profile-photo" />
                    <p>{formDataB.personalDetails.fullName}</p>
                    <p>{currentDate}</p>
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th colSpan="4" className="title">
                <h3>ADMISSIONS (2023-24)</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="label">Name</td>
              <td>{formDataB.personalDetails.fullName}</td>
              <td className="label">CET Application ID</td>
              <td>{formDataB.cetDetails.cetappId}</td>
            </tr>
            <tr>
              <td className="label">ID</td>
              <td>{userId}</td>
            </tr>
            <tr>
              <td className="label">Date of Birth</td>
              <td>{dateOfBirth}</td>
            </tr>
            <tr>
              <td className="label">Email Id</td>
              <td>{formDataB.personalDetails.email}</td>
            </tr>
            <tr>
              <td className="label">Mobile No.</td>
              <td>{formDataB.personalDetails.mobileNumber}</td>
            </tr>
            <tr>
              <td className="label">Father's Name</td>
              <td>{formDataB.personalDetails.fathersName}</td>
              <td className="label">Father's Occupation</td>
              <td>{formDataB.personalDetails.fathersOccupation}</td>
            </tr>
            <tr>
              <td className="label">Mobile No.</td>
              <td>{formDataB.personalDetails.fathersmobileNumber}</td>
            </tr>
            <tr>
              <td className="label">Mother's Name</td>
              <td>{formDataB.personalDetails.mothersName}</td>
              <td className="label">Mother's Occupation</td>
              <td>{formDataB.personalDetails.mothersOccupation}</td>
            </tr>
            <tr>
              <td className="label">Mobile No.</td>
              <td>{formDataB.personalDetails.mothersmobileNumber}</td>
            </tr>
            <tr>
              <td className="label">Annual Income</td>
              <td>{formDataB.personalDetails.annualIncome}</td>
            </tr>
            <tr>
              <td className="label">Gender</td>
              <td>{formDataB.personalDetails.sex}</td>
            </tr>
            <tr>
              <td className="label">Correspondence Address</td>
              <td colSpan="3">{formDataB.personalDetails.corrAddr}</td>
            </tr>
            <tr>
              <td className="label">State</td>
              <td colSpan="3">{formDataB.personalDetails.state}</td>
            </tr>
            <tr>
              <td className="label">Permanent Address</td>
              <td colSpan="3">{formDataB.personalDetails.perAddr}</td>
            </tr>
            <tr>
              <td className="label">State</td>
              <td colSpan="3">{formDataB.personalDetails.state}</td>
            </tr>
            <tr>
              <td className="label">Area</td>
              <td>{formDataB.personalDetails.area}</td>
              <td className="label">Nationality</td>
              <td>{formDataB.personalDetails.nationality}</td>
            </tr>
            <tr>
              <td className="label">Religion</td>
              <td>{formDataB.personalDetails.religion}</td>
              <td className="label">Category</td>
              <td>{formDataB.personalDetails.category}</td>
            </tr>
            <tr>
              <td className="label">Domicile</td>
              <td>{formDataB.personalDetails.domicile}</td>
              <td className="label">Mother Tongue</td>
              <td>{formDataB.personalDetails.mothersTongue}</td>
            </tr>
            <tr>
              <td className="label">JEE Application No</td>
              <td>{formDataB.cetDetails.jeeappNum}</td>
              <td className="label">JEE Percentile</td>
              <td>{formDataB.cetDetails.jeePer}</td>
            </tr>
            <tr className="sub-title">
              <td colSpan="4">CET Details</td>
            </tr>
            <tr>
              <td className="label">CET Roll No</td>
              <td>{formDataB.cetDetails.cetrollNo}</td>
              <td className="label">CET Maths Percentage</td>
              <td>{formDataB.cetDetails.cetmathsPer}</td>
            </tr>
            <tr>
              <td className="label">CET Physics Percentage</td>
              <td>{formDataB.cetDetails.cetphysicsPer}</td>
              <td className="label">CET Chemistry Percentage</td>
              <td>{formDataB.cetDetails.cetchemistryPer}</td>
            </tr>
            <tr>
              <td className="label">CET Percentile</td>
              <td>{formDataB.cetDetails.jeePer}</td>
            </tr>
            <tr className="sub-title">
              <td colSpan="4">HSC Details</td>
            </tr>
            <tr>
              <td className="label">HSC Maths Marks</td>
              <td>{formDataB.academicDetails.hscmathsMarks}</td>
              <td className="label">HSC Physics Marks</td>
              <td>{formDataB.academicDetails.hscphysicsMarks}</td>
            </tr>
            <tr>
              <td className="label">HSC Chemistry Marks</td>
              <td>{formDataB.academicDetails.hscchemistryMarks}</td>
              <td className="label">HSC PCM Percentage</td>
              <td>{formDataB.academicDetails.hscpcmPercentage}</td>
            </tr>
            <tr>
              <td className="label">HSC Vocational Subject Name</td>
              <td>{formDataB.academicDetails.hscvocationalSub}</td>
              <td className="label">HSC Vocational Subject Marks</td>
              <td>{formDataB.academicDetails.hscvocationalsubjectMarks}</td>
            </tr>
            <tr>
              <td className="label">HSC PMV Percentage</td>
              <td>{formDataB.academicDetails.hscvovationalsubjectPer}</td>
            </tr>
            <tr>
              <td className="label">Academic Qualification</td>
              <td colSpan="3">
                <table className="inner-table">
                  <tbody>
                    <tr>
                      <td>Exam Passed</td>
                      <td>Name of Board/University</td>
                      <td>Year of Passing</td>
                      <td>Total Marks</td>
                      <td>Marks Obtained</td>
                      <td>% of Marks</td>
                    </tr>
                    <tr>
                      <td>S.S.C(10th)</td>
                      <td>{formDataB.academicDetails.sscBoard}</td>
                      <td>{formDataB.academicDetails.sscyearofPass}</td>
                      <td>{formDataB.academicDetails.ssctotalMarks} </td>
                      <td>{formDataB.academicDetails.sscmarksObtained}</td>
                      <td>{formDataB.academicDetails.sscPercentage}</td>
                    </tr>
                    <tr>
                      <td>H.S.C(12th) / Diploma</td>
                      <td>{formDataB.academicDetails.hscBoard}</td>
                      <td>{formDataB.academicDetails.hscyearofPass}</td>
                      <td>{formDataB.academicDetails.hsctotalMarks}</td>
                      <td>{formDataB.academicDetails.hscmarksObtained}</td>
                      <td>{formDataB.academicDetails.hscPercentage}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="label">Branch Preference</td>
              <td colSpan="3">
                <table className="inner-table">
                  <tbody>
                    <tr>
                      <td>Preference</td>
                      <td>{formDataB.preference}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
                <td className="label">Signature</td>
                <td colSpan="3">
                  <img src={filePreviews.signature} alt="Signature" className="signature-img" />
                </td>
              </tr>
              <tr></tr>
            <tr>
              <td className="label">Transaction Details</td>
              <td colSpan="3">
                <table className="inner-table">
                  <tbody>
                    <tr>
                      <td>Payment Type</td>
                      <td>{formData1.paymentType}</td>
                      <td>Amount</td>
                      <td>{formData1.amount}</td>
                    </tr>
                    <tr>
                      <td>Bank Name</td>
                      <td>{formData1.bankName}</td>
                      <td>Transaction ID</td>
                      <td>{formData1.transactionId}</td>
                    </tr>
                    <tr>
                      <td>Transaction Date</td>
                      <td>{formData1.date}</td>
                      <td>Payment For</td>
                      <td>{formData1.paymentAgainst}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="label">Other Details</td>
              <td colSpan="3">{formDataB.otherDetails}</td>
            </tr>
          </tbody>
        </table>
      </form>
      <DownloadPDFButton />
    </div>
  );
};

export default AdmissionForm2;