import React,{useState} from "react";
import { Link } from "react-router-dom";

function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [message , setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e)=>{
      e.preventDefault(); 
      if(fullName === "")
      {
        alert("please enter your full name")
        return
      }
      if(email === "")
      {
        alert("please enter your email address")
        return
      }
      if(mobile === "")
      {
        alert("please enter your mobile no")
        return
      }
      if(message === "")
      {
        alert("please enter your message")
        return
      }

      setIsSubmitted(true);
    }

  return (
   isSubmitted? 
   <div className="container">
   <div className="card" style={{paddingLeft:20,paddingRight:20,borderRadius:10,paddingBottom:20}}>
     <h2 className="card-title my-3" style={{textAlign:"center",textDecoration:"underline"}}>Contact Us</h2>
     <div className="container">
     <p style={{textAlign:"center"}}>Hi,<strong>{fullName}</strong>.Thanks for contacting us,We are reply you at <strong>{email}</strong> and at <strong>{mobile}</strong></p>
     </div>
     <Link to="/" style={{textAlign:"center"}}> Go back to home </Link>
     </div>
     </div> 
     :

    <div className="container">
    <div className="card" style={{paddingLeft:20,paddingRight:20,borderRadius:10,paddingBottom:20}}>
      <h2 className="card-title my-3" style={{textAlign:"center"}}>Contact Us</h2>
      <form onSubmit={(e)=>{
        handleSubmit(e);
      }}>
        <div className="mb-3">
          <label className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control" name="fullName" onChange={(e)=>{
            setFullName(e.target.value);
          }} />
        </div>
        <div className="mb-3">
          <label  className="form-label">
            Email Address
          </label>
          <input type="email" className="form-control" name="email"  onChange={(e)=>{
            setEmail(e.target.value);
          }}/>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Mobile No.
          </label>
          <input type="text" className="form-control" name="mobile"  onChange={(e)=>{
            setMobile(e.target.value);
          }}/>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Message
          </label>
          <textarea rows={5} className="form-control" name="message"  onChange={(e)=>{
            setMessage(e.target.value);
          }}/>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default Contact;

