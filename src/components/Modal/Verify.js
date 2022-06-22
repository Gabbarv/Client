import React, { useState } from "react";
import Form from "./Form";



function Verify({info,setShowOtp,setShowlogin,setOpenModal}){
  const [showVerify, setShowVerify] = useState(true);
  const [showForm,setShowForm]=useState(false);
    return (

       <>
       {showVerify && <div className="modalContainer">
        <div className="titleCloseBtn bg-dark">
          <button
            onClick={() => {
              setOpenModal(false);
             setShowlogin(false);
             setShowOtp(false);
              
            }}
          >
            X
          </button>
        </div>
        <div className="verify"> <h3>Enter One Time Password</h3>
     <p>Sent to your mobile number - 9918518095</p>
    <input className="otp-i" type="text" placeholder="Enter OTP" />
    <button onClick={() =>  { setShowForm(true); setShowVerify(false);}} className="btn">Verify</button>
    </div>
   
    
</div>}
{showForm && <Form setOpenModal={setOpenModal} setShowlogin={setShowlogin} setShowVerify={setShowVerify} setShowForm={setShowForm} info={info}/>}
</>

    );
}
export default Verify;