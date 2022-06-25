import React, { useEffect, useState } from "react";
import {firebase,auth,db} from "../../firebase";
import "./Admin.css"
import Navbar from "./Navbar";




function Admin(){

    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");
    const [login,setlogin] = useState(false);

    var auser = localStorage.getItem("adminuser");

    function getUser(){
      var docRef = db.collection("buyer");

docRef.get().then((doc) => {
   console.log(doc);
}).catch((error) => {
    console.log("Error getting document:", error);
});
    }

    useEffect(()=> (getUser()));
    
   function checklogin(){
    if(auser==="true"){
        setlogin(true);
    }
   }  
   useEffect(() => checklogin(),[])

    useEffect(() => {},[email,password]);

    function signin(e){

        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
   
    var user = userCredential.user;
    localStorage.setItem("adminuser",true);
    setlogin(true);
   
  })
  .catch((error) => {
    
    console.log(error);
  });
    }

    

   

return (
    <>

    <Navbar login={login} setlogin={setlogin}/>
    {login ? <div className="query"><table class="table table-striped ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Mobile No</th>
      <th scope="col">Address</th>
      <th scope="col">Service</th>
      <th scope="col">Attachment</th>
      <th scope="col">Call Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table></div> :  <div className="loginformadmin">
    <h1>Admin Login</h1>
<form  onSubmit={signin} className="form">
            <label>Enter Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter Your Email" required/>
            <label>Enter Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter Your Password" required/>
            <input className="btn bg-dark submit" type="submit" value="Submit"/>
        </form>
     
    </div>}
   
    </>
)

}

export default Admin;