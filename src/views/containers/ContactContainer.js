import React, { useState, useEffect } from "react";
import ContactComponent from "../components/Contact";

const ContactContainer = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

console.log(data.name)
  const handleChange = (event) => {
    const { field, value } = event.target;
    setData(prevState => ({
      ...prevState,
      [field]: value
  }));

  };

  return (
    <ContactComponent
      // data={{ name, email, subject, message }}
      data = {data}
      onChange={() => handleChange(event)}
    />
  );
};

export default ContactContainer;
