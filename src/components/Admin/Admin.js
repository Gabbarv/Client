import React, { useEffect, useState } from "react";
import {firebase,auth,db} from "../../firebase";
import "./Admin.css"
import Navbar from "./Navbar";




function Admin(){

    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");
    const [login,setlogin] = useState(false);
    const [users,setUsers] = useState();

    var auser = localStorage.getItem("adminuser");

    function getUser(){

      var custemers=[];
      db.collection("buyer").onSnapshot(snapshot => {

        snapshot.docs.map(doc => {
          custemers.push(doc.data())
        })

      
        setUsers(custemers);
        custemers = [];

      })

     
      

      
     
    }


    useEffect(() => getUser(),[])
    
           
       
        
      
     
      

    
    
   function checklogin(){
    if(auser==="true"){
        setlogin(true);
    }
   }  
   useEffect(() => checklogin(),[])

    useEffect(() => {},[email,password,users]);

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
      <th scope="col">Service</th>
       <th scope="col">Status</th>
       <th scope="col">Activity</th>
    </tr>
  </thead>
  <tbody>

    {users?.map((data,index) => (

<tr>
<th scope="row">{++index}</th>
<td>{data.name}</td>
<td>{data.mobileNo}</td>
<td>{data.service}</td>
<td>Not Seen</td>
<td><button className="btn">View</button></td>

</tr>
    ))}
    
    
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