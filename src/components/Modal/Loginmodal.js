import React, { useEffect, useState } from "react";
import "./Modal.css";

import {firebase,auth,db,storage} from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Loginmodal({info,setlogin,loggedIn,setLoggedin,iname,item}){
    var [showLogin,setShowlogin] = useState(false);
    var [showOtp,setShowOtp]=useState(false);
    const [showForm,setShowForm]=useState(false);
    const [callTime,setCallTime]=useState("Any Time");
    const [mobNo,setMobNo]=useState("");
    const [otp,setOtp] = useState("");
    const [final, setfinal] = useState('');
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [DateF,setDateF]= useState("");
    const [DateT,setDateT]= useState("");
    const [travelPlaceF,setTravelPlaceF] = useState("");
    const [travelPlaceT,setTravelPlaceT] = useState("");
    const [adult,setAdult] = useState("");
    const[Child,setChild] = useState("");
    const [otherDescription,setOtherDescription] = useState("");
    const[visitTime,setVisitTime]= useState("");
    const [file,setFile] = useState();
    const [fileURL,setFileURL] = useState()

   
    
    

    
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
   
   },[mobNo,otp,name,address,callTime,DateF,DateT,travelPlaceF,travelPlaceT,otherDescription,visitTime,adult,Child,file]);;
   
   
   
   const handleSubmit = (e) => {
    e.preventDefault();
   let service = iname;
   var today = new Date();
   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   var dateTime = date+' '+time;
   if(item.travel){
    db.collection("buyer")
      .add({
        name: name,
        address: address,
        mobileNo: phone,
        service: service,
        callTime: callTime,
        submitTime: dateTime,
        travelDateFrom: DateF,
        travelDateTo: DateT,
        Adult: adult,
        child: Child,
        travelPlaceFrom: travelPlaceF,
        travelPlaceTo: travelPlaceT,
        otherDescription: otherDescription
      })
      .then(() => {
        
        notify();

      })
      .catch((error) => {
        alert(error.message);
        
      });

   } else if (item.medicalTest){
    if(file != null){
   
      storage.ref(`/file/${file.name}`).put(file)
      .on("state_changed" , console.log(), (err) => alert(err), () => storage.ref(`/file/${file.name}`).put(file).snapshot.ref.getDownloadURL().then(url => setFileURL(url)) );
    }
    





    db.collection("buyer")
      .add({
        name: name,
        address: address,
        mobileNo: phone,
        service: service,
        callTime: callTime,
        submitTime: dateTime,
        age: adult,
        visitDate: DateF,
        visitTime: visitTime,
        otherDescription: otherDescription,
        fileURL: fileURL


      })
      .then(() => {
        
        notify();

      })
      .catch((error) => {
        alert(error.message);
        
      });

   } else {
    db.collection("buyer")
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

   }
    
    setName("");
    setAddress("");
    setFileURL();
    setFile();
    
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
           
            
             setlogin(false);
             
             
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
             setlogin(false);
              
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
          setlogin(false);
            
          }}
        >
          X
        </button>
      </div>
      <div className="form">
          <form onSubmit={(e) => {handleSubmit(e);
                
              
              setShowlogin(false);
         
          setShowForm(false);
          setlogin(false);}}>
             <div> <label>Full Name</label>
              <input onChange={(e) => setName(e.target.value)}  type="text" placeholder="Enter Your Name" required/>
              <label>Mobile No</label>
              <input  value={phone} type="text" disabled/>
              <label>Address <span>(Optional)</span></label>
              <textarea rows="4"  onChange={(e) => setAddress(e.target.value)}></textarea>
              
              
              
              <div className="row">
                <div className="col-sm-6">
                <label for="service">Selected Service:</label>
              <input type="text" name="service" value={iname} disabled/>
                </div>
                <div className="col-sm-6">
                <div className="choose-service">
              <label for="service">Available Time To Take Call:</label>
              <select onChange={(e) => setCallTime(e.target.value)} name="callingtime">
              <option value="Any Time">Any Time</option>
              <option value="Morning(8 A.M to 12 P.M)">Morning(8 A.M to 12 P.M) </option>
              <option value="Afternoon(12 P.M to 4 P.M)">Afternoon(12 P.M to 4 P.M)</option>
              <option value="Evening(4 P.M to 9 P.M)">Evening(4 P.M to 9 P.M)</option>
              </select>
              </div>
                </div>
              </div>
             
             </div>
            
          {item.travel && <div className="travel">
              <label>Travel Date</label>
              <div className="row">
                <div className="col-sm-6">
                  <label>From:</label> <br/>
                  <input onChange={(e) => setDateF(e.target.value)} type="date" />
                </div>
                <div className="col-sm-6">
                <label>To:</label> <br/>
                  <input onChange={(e) => setDateT(e.target.value)} type="date" />
                </div>
              </div>
              <label>Travel Place</label>
              <div className="row">
                <div className="col-sm-6">
                <label>From:</label> <br/>
                  <input onChange={(e) => setTravelPlaceF(e.target.value)} type="text" />
                </div>
                <div className="col-sm-6">
                <label>To:</label> <br/>
                  <input onChange={(e) => setTravelPlaceT(e.target.value)} type="text" />
                </div>
              </div>
              <label>Total Member</label>
              <div className="row">
                
                <div className="col-sm-6">
                <label>Adult</label> <br/>
                  <input onChange={(e) => setAdult(e.target.value)} type="number" />
                </div>
                <div className="col-sm-6">
                <label>Children</label> <br/>
                  <input onChange={(e) => setChild(e.target.value)} type="number" />
                </div>
              </div>

              <label>Other Description <span>(Optional)</span></label>
              <textarea rows="4"  onChange={(e) => setOtherDescription(e.target.value)}></textarea>
             </div>}

            {item.medicalTest && <div className="medicalTest">
            
                  <label>Age</label>
                   <input onChange={(e) => setAdult(e.target.value)} type="number"/>
            
              <label>Visit Time For Sample Collect:</label>
              <div className="row">
                <div className="col-sm-6">
                  <label>Date</label>
                  <input onChange={(e) => setDateF(e.target.value)} type="date"/>
                </div>
                <div className="col-sm-6">
                <lable>Time</lable>
                  <div className="choose-service">
                  
              <select onChange={(e) => setVisitTime(e.target.value)} name="callingtime">
              <option value="Any Time">Any Time</option>
              <option value="Morning(8 A.M to 12 P.M)">Morning(8 A.M to 12 P.M) </option>
              <option value="Afternoon(12 P.M to 4 P.M)">Afternoon(12 P.M to 4 P.M)</option>
              <option value="Evening(4 P.M to 9 P.M)">Evening(4 P.M to 9 P.M)</option>
              </select>
              </div>
                </div>
              </div>
              <div class="mb-3">
  <label>Upload Prescription in PDF Or JPG format</label>
  <input onChange={(e) => { if(e.target.files[0].size > 500000){
    alert("File Size Should Be Less Than 500KB");
    e.target.value =''
  } else {
    setFile(e.target.files[0]);
  }

  }} class="form-control" type="file" id="formFile" accept="image/*,.pdf"/>
</div>
              <label>Other Description <span>(Optional)</span></label>
              <textarea rows="4"  onChange={(e) => setOtherDescription(e.target.value)}></textarea>
             </div>}

             
             
     
                
                
                <input className="btn bg-dark submit" type="Submit" value="Submit"/>
          </form>
      </div>
      </div>}
      </div>
     </>
 );

}


export default Loginmodal;