import React from 'react';
import './doc.css';

function Documents() {
  return (
    <div className="container-doc">
        <h1 className="center page-heading">Documents Required</h1>

        <table className="doc-req">
            <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Types of Candidates</th>
                <th>Copies of documents to be produced along with Application Form for Admission</th>
                <th>Required</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Passing of SSC/Std. X Examination</td>
                    <td>
                        <ul>
                            <li>Passing Certificate</li>
                            <li>School Leaving Certificate</li>
                            <li>Marksheet</li>
                        </ul>
                    </td>
                    <td>MANDATORY</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Passing of Std. X Examination (ICSE,CBSE)</td>
                    <td>
                        <ul>
                            <li>passing Certificate</li>
                            <li>school leaving Certificate</li>
                            <li>Migration certificate</li>
                        </ul>
                    </td>
                    <td>MANDATORY</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mark sheet at the qualifying examination HSC (Std. XII)</td>
                    <td>
                        <ul>
                            <li>passing certificate</li>
                            <li>leaving certificate</li>
                            <li>Marksheet</li>

                        </ul>
                    </td>
                    <td>MANDATORY</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Mark sheet at the qualifying examination(Std. XII ICSE, CBSE)</td>
                    <td>
                        <ul>
                            <li>passing certificate</li>
                            <li>leaving certificate</li>
                            <li>Migration Certificate</li>
                            <li>Marksheet</li>

                        </ul>
                    </td>
                    <td>MANDATORY</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>CET</td>
                    <td>MHT-CET Score Card </td>
                    <td>MANDATORY</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>JEE</td>
                    <td> JEE –Main Score Card  </td>
                    <td>MANDATORY</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>CAP</td>
                    <td>CAP Allotment Letter </td>
                    <td>MANDATORY</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Diploma (Drirect Second Year Admission)</td>
                    <td>
                        <ul>
                            <li>Provisional Certificate</li>
                            <li>college leaving certificate</li>
                            <li>Marksheet of Diploma</li>
                            <li>Migration Certificate</li>
                        </ul>
                    </td>
                    <td>MANDATORY</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>GAP</td>
                    <td>Affidavit Certificate Required</td>
                    <td>MANDATORY</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Caste</td>
                    <td>Candidates belonging to S.C./S.T.
                    <ul>
                        <li>Caste/Tribe Certificate</li>
                        <li>Caste/Tribe Validity Certificate</li>
                        <li>Income Certificate</li>
                    </ul>
                    </td>
                    
                    <td>MANDATORY</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Candidates belonging to VJ/DT-NT(A)/
NT(B) / NT(C) /NT(D) /O.B.C/ SBC
                    <ul>
                        <li>Caste/Tribe Certificate</li>
                        <li>Caste/Tribe Validity Certificate</li>
                        <li>Income Certificate</li>
                        <li>Non creamy layer certificate</li>
                    </ul>
                    </td>
                    
                    <td>MANDATORY</td>
                    </tr>
                
                <tr>
                    <td>11</td>
                    <td>Economically WeakerSection (EWS) Candidate </td>
                    <td>Eligibility Certificate for Economically Weaker Section</td>
                    <td>MANDATORY</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>TFWS candidates</td>
                    <td>Income certificate</td>
                    <td>MANDATORY</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Domicile Certificate</td>
                    <td>Domicile Certificate</td>
                    <td>MANDATORY</td>
                </tr>
            </tbody>
        </table>
        <h1 className="center page-heading">All the documents should be scanned (PDF) or in photo format (JPEG,PNG) and it should be under 250KB</h1>
        
    </div>
    
  )
}

export default Documents;