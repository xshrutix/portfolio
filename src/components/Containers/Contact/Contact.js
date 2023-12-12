import React , {useRef} from "react";
import "./Contact.css";
import shr from ".././../images/shr.png";
import Nav from "../../navbar/Nav";
import emailjs from '@emailjs/browser'
import { useAlert } from 'react-alert'


const showAlert = (res) => {
    const alert = useAlert
    if(res) {
      alert.show('message sent successfully');
    } else {
        alert.show('oops! some error');
    }
}

const Contact = () => {
     
    const form = useRef();
    //const alert = useAlert()

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(
            "shruti",
            "template_xphqptr",
            form.current,
            "iAdiOEoqkxyx2ta-0"
            
        ).then(
        (result) => {
          console.log(result.text);
                console.log("message sent");
                //alert.show('message sent successfully');
                //showAlert(true)
                alert("success")
                e.target.reset();
        },
            (error) => {
            //alert.show('oops! some error');
                alert("oops! some error");
          console.log(error.text);
        }
      );
        
    }
  return (
    <>
      <Nav />
      <section className="ftco-section">
        {" "}
        <div className="container">
          {" "}
          <div className="row justify-content-center">
            {" "}
            <div className="col-md-6 text-center mb-5">
              {" "}
              <h2 className="heading-section">Contact Form</h2>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row justify-content-center">
            {" "}
            <div className="col-md-12">
              {" "}
              <div className="wrapper">
                {" "}
                <div className="row no-gutters">
                  {" "}
                  <div className="col-lg-6">
                    {" "}
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      {" "}
                      <h3>Contact Me</h3>{" "}
                      <p className="mb-4 text-slate-600">
                        I am open for any query or just to have a chat
                      </p>
                      <div id="form-message-warning" className="mb-4" />{" "}
                      <div id="form-message-success" className="mb-4">
                        {" "}
                        Your message was sent, thank you !{" "}
                      </div>{" "}
                      <div className="row mb-4">
                        {" "}
                        <div className="col-md-4">
                          {" "}
                          <div className="dbox w-100 d-flex align-items-start">
                            {" "}
                            <div className="text">
                              {" "}
                              <p>
                                <span>LinkedIn:</span>{" "}
                                <a href="https://www.linkedin.com/in/shruti-sharma-685504201/">
                                  shruti-sharma-685504201
                                </a>{" "}
                              </p>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="col-md-4">
                          {" "}
                          <div className="dbox w-100 d-flex align-items-start">
                            {" "}
                            <div className="text">
                              {" "}
                              <p>
                                <span>Email:</span>{" "}
                                <a href="mailto:info@yoursite.com">
                                  shrutiisharma6@gmail.com
                                </a>
                              </p>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="col-md-4">
                          {" "}
                          <div className="dbox w-100 d-flex align-items-start">
                            {" "}
                            <div className="text">
                              {" "}
                              <p>
                                <span>Phone:</span>{" "}
                                <a href="tel://8092506511">+91-8092506511</a>
                              </p>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                     <form ref={form} onSubmit={sendEmail} className="contactForm" >
                    <div className="row" >
                        <div className="col-md-12" >
                            <div className="form-group" >
                                <input type="text" className="form-control" name="user_name" id="name" placeholder="Name" />
                            </div>
                        </div>
                        <div className="col-md-12" >
                            <div className="form-group" >
                                <input type="email" className="form-control" name="user_email" id="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-md-12" >
                            <div className="form-group" >
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                            </div>
                        </div>
                        <div className="col-md-12" >
                            <div className="form-group" >
                                <textarea name="message" className="form-control" id="message" cols={
            30
        }

        rows= {
            4
        }

        placeholder="Create a message here" defaultValue= {
            ""
        }

        /> </div> </div> <div className="col-md-12" > <div className="form-group" > <input type="submit" defaultValue="Send Message" className="btn btn-primary" /> <div className="submitting" /> </div> </div> </div> </form>{" "}
                      <div className="w-100 social-media mt-5">
                        {" "}
                        <h3>Follow me here</h3>{" "}
                        <p>
                          {" "}
                          <a href="https://github.com/xshrutix">Github</a> 
                          <a href="https://www.linkedin.com/in/shruti-sharma-685504201/">Linkedin</a>{" "}
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-6 d-flex align-items-stretch">
                    {" "}
                    <div
                      className="info-wrap w-100 p-5 img"
                      style={{
                        backgroundImage: `url(${shr})`,
                      }}
                    >
                      {" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
};

export default Contact;
