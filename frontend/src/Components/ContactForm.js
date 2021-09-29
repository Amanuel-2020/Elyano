import React, {useState} from "react"
import axios from 'axios'
const ContactForm =()=>{

   const [email, setEmail] = useState('')
   const [name, setName] = useState('')
   const [message, setMessage] = useState('')
   const handleSubmit=(e)=>{
         e.preventDefault();
        axios.post('/api/sendmessage', {
          email,
          name,
          message
        })
    }

    return (
        <div className="FormContainer">
               
               <form className="Forms" onSubmit={handleSubmit} autoComplete="off">
               <h2>Contact Me</h2>
               <div className="FormGroup">
               <input type='text' name="fullname" placeholder='full name' value={name} onChange={(e)=>setName(e.target.value)} />
               <input type='text' name="email" placeholder='example@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
               </div>
               <div>
               <textarea placeholder="type here...." name="message" value={message} onChange={(e)=>setMessage(e.target.value)}>
               </textarea>
               </div>
               <input className="send-btn" type="submit" value="Send Message"/>
               </form>        
        </div>
    )

}

export default ContactForm
