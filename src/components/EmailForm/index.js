import React, { useState } from 'react';
import "./index.scss"

const EmailForm = (props) => {
    const { emailTo } = props
    
    const [formData, setFormData] = useState({
        subject: "",
        message: ""
      })
     
    return (
        <div className="container">
            <h2 className="contactTitle">Contact us</h2>
            <div className="formContainer">
                <form>
                    <input value={formData.subject} type="text" name="subject" placeholder="Subject" onChange={(e) => setFormData({...formData, subject: e.target.value})} />
                    <textarea
                        value={formData.message}
                        rows = "10"
                        cols = "60" 
                        onChange={(e) => setFormData({...formData, message: e.target.value})} 
                        placeholder="Type your message here"
                    />
                    <div className="formContainer">
                       <a className="sendButton" href={`mailto:${emailTo}?subject=${formData.subject}&body=${formData.message}`}>Send</a>
                    </div>
                </form>
            </div>
        </div>

    )
}
  
export default EmailForm;
