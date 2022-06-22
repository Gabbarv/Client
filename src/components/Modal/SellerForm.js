import React, { useEffect, useState } from "react";
import "./Modal.css";
import Verify from "./Verify";
import {firebase,auth,db} from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function SellerForm({setlogin,loggedIn,setLoggedin,setShowseller}){
    var [showLogin,setShowlogin] = useState(false);
    var [showOtp,setShowOtp]=useState(false);
    const [showForm,setShowForm]=useState(false);
    const [callTime,setCallTime]=useState("Any Time");
    const [mobNo,setMobNo]=useState("");
    const [otp,setOtp] = useState("");
    const [final, setfinal] = useState('');
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [service,setService] = useState("")
    
    const notify = () => toast("Thanks For Your Response.We Will Contact You Soon");
    const phone= localStorage.getItem("phone");
    const user = localStorage.getItem("user");
    
    const [counter,setCounter] = useState(30);
    
    
    useEffect(() => {
      let myInterval = setInterval(() => {
        if (counter>0 && showOtp) {
            setCounter(counter - 1);
        }
        if (counter === 0) {
            
                clearInterval(myInterval)
           
        } 
    }, 1000)
    return ()=> {
        clearInterval(myInterval);
      };
  }, [counter,showOtp]);
    
   
    
    const checksignin = () => {
      if(user==="true"){
       setShowForm(true);
      } else {
        setShowlogin(true);
      }
    }
 
   useEffect(() => {
     checksignin();
       
   },[user]);
   useEffect((e) => {
    console.log(otp)
   },[mobNo,otp,name,address,callTime,service]);
   const handleSubmit = (e) => {
    e.preventDefault();
   
   var today = new Date();
   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   var dateTime = date+' '+time;
    db.collection("seller")
      .add({
        name: name,
        address: address,
        mobileNo: phone,
        service: service,
        callTime: callTime,
        submitTime: dateTime
      })
      .then(() => {
        
        notify();

      })
      .catch((error) => {
        alert(error.message);
        
      });

    setName("");
    setAddress("");
    
  };
   
   const signin = (e) => {
    e.preventDefault()
    if (mobNo === "" || mobNo.length < 10) return;
    var phoneNo="+91" + mobNo;
    

    let verify = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
       
      }
    });
    auth.signInWithPhoneNumber(phoneNo, verify).then((result) => {
      setfinal(result);
       setCounter(30);
       setShowOtp(true);
       setShowlogin(false);
       
       
       
       
      
    })
        .catch((err) => {
            alert(err);
           
        });
}
const ValidateOtp = (e) => {
  e.preventDefault();
  if (otp === null || final === null)
      return;
  final.confirm(otp).then((result) => {
      // success
      const user = result.user;
      localStorage.setItem("phone",user.phoneNumber);
     localStorage.setItem("user",true);
      setLoggedin(true);
      setShowForm(true);
      setShowOtp(false);
  }).catch((err) => {
      alert(err);
  })
}
    return (
       
  <>
  <div className="modalBackground">
     {showLogin && <div className="modalContainer">
       <div className="titleCloseBtn bg-dark">
         <button
           onClick={() => {
           
            
             setShowseller(false);
             
             
           }}
         >
           X
         </button>
       </div>
       <form onSubmit={signin}>
       <div id="sign-in-button"></div>
       <div className="loginform"> <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">+91</div>
        </div>
        <input onChange={(e) => setMobNo(e.target.value)} value={mobNo} type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Enter Your Mobile Number" required/>
      </div> <button type="submit"  className="btn bg-dark otp" >GET OTP</button>
      </div>
       </form>
      
      </div>}
     { showOtp &&  <div className="modalContainer">
        <div className="titleCloseBtn bg-dark">
          <button
            onClick={() => {
             
             setShowlogin(false);
             setShowOtp(false);
             setShowseller(false);
              
            }}
          >
            X
          </button>
        </div>
        <div className="verify"> <h3>Enter One Time Password</h3>
     <p>Sent to your mobile number - {mobNo}</p>
     <form onSubmit={ValidateOtp}><input onChange={(e) => setOtp(e.target.value)} className="otp-i" type="text" placeholder="Enter OTP" />
    <button type="submit" className="btn">Verify</button></form>
    <form className="resend" onSubmit={signin}>
      <div id="sign-in-button"></div>
      {counter !=0 ? <p>00:{counter}</p> : <p><span>Don't Receive OTP?</span><button type="submit" className="btn btn-dark">RESEND OTP</button></p>}
      
    </form>
    
    </div>
   
    
</div>}
{showForm && <div className="modalContainer">
      
      <div className="titleCloseBtn bg-dark">
        <button
          onClick={() => {
            
              setShowlogin(false);
         
          setShowForm(false);
          setShowseller(false);
            
          }}
        >
          X
        </button>
      </div>
      <div className="form">
          <form onSubmit={(e) => {handleSubmit(e);
                
              
              setShowlogin(false);
         
          setShowForm(false);
          setShowseller(false);}}>
              <label>Full Name</label>
              <input onChange={(e) => setName(e.target.value)}  type="text" placeholder="Enter Your Name" required/>
              <label>Mobile No</label>
              <input  value={phone} type="text" disabled/>
              <label>Address <span>(Optional)</span></label>
              <textarea rows="4"  onChange={(e) => setAddress(e.target.value)}></textarea>
              
              <label>Service You Offer</label>
              <input onChange={(e) => setService(e.target.value)} type="text" placeholder="Enter Service You Offer" name="service" value={service} />
        
              <div className="choose-service">
              <label for="service">Available Time To Take Call:</label>
              <select onChange={(e) => setCallTime(e.target.value)} name="callingtime">
              <option value="Any Time">Any Time</option>
              <option value="Morning(8 A.M to 12 P.M)">Morning(8 A.M to 12 P.M) </option>
              <option value="Afternoon(12 P.M to 4 P.M)">Afternoon(12 P.M to 4 P.M)</option>
              <option value="Evening(4 P.M to 9 P.M)">Evening(4 P.M to 9 P.M)</option>
              </select>

              </div>
              
              <input className="btn bg-dark submit" type="submit" value="Submit"/>
          </form>
      </div>
      </div>}
      </div>
     </>
 );

}


export default SellerForm;