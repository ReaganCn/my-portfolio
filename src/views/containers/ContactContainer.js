import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

import ContactComponent from "../components/Contact";

const ContactContainer = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    const emailData = {
      subject: data.subject,
      message: data.message,
      from_name: data.name,
      from_email: data.email,
    };
    const templateId = "first_template";

    sendEmail(templateId, emailData);

    event.preventDefault();
  };

  const sendEmail = (templateId, email) => {
    emailjs.send("hotmail", templateId, email, 'user_KkdEp8kM7ShrDPVgKin7a').then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
  };

  return (
    <ContactComponent
      // data={{ name, email, subject, message }}
      darkModeContact = {props.darkMode}
      data={data}
      onChange={() => handleChange(event)}
      onSubmit= {()=> handleSubmit(event)}
    />
  );
};

export default ContactContainer;
