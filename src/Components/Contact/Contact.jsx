import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import white_arrow from '../../Assets/white-arrow.png'

function Contact() {

     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c24991a3-57cc-492f-89ba-ecf2924bac35");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
    <div className='contact'>
       <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>    We'd love to hear from you! Whether you have a question, feedback, or a business inquiry,
                 feel free to reach out using the form below. Our team will get back to you as soon as possible.</p>
                 <ul>
                    <li><img src={mail_icon} alt="" />Contact@sharmaalucky0742@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+91 123-456-7890</li>
                        <li><img src={location_icon} alt="" />1234 Elmwood Avenue, Suite 202,<br />
                        San Mateo, CA 94403,<br />
                        United States</li>
                 </ul>
        </div>  
         <div className="contact-col">
                        <form onSubmit={onSubmit} >
                            <label>Your name</label>
                            <input type="text" name='name'  placeholder='Enter your name' required />

                            <label>Phone Number</label>
                            <input type="tel" name='phone' placeholder='Enter your phone number' required />

                            <label>Write your message here</label>
                            <textarea name="message" rows="6" placeholder='Type your message here' required></textarea>
                            <button type='submit'className='btn dark-btn'>Send Message  <img src={white_arrow} alt="" /></button>
                        </form>
                        <span>{result}</span>
            </div>
    </div>
  )
}

export default Contact

