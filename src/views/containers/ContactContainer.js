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
  const [alert, setAlert] = useState({
    type: "",
    message: ""
  });
  const [validEmail, setvalidEmail] = useState(true);
  const [loader, setLoader] = useState(false);

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailTest = emailRegex.test(data.email.toLowerCase());

  useEffect(() => {
    if (data.email.length !== 0) {
      if (emailTest) {
        setvalidEmail(true);
      } else {
        setvalidEmail(false);
      }
    }
  }, [data.email]);

  useEffect(() => {
    if (alert.length !== 0) {
      console.log(alert);
    }
  }, [alert]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isFieldEmpty = (object) => {
    let emptyFieldArray = [];
    let objectArray = Object.entries(object);
    //[[key, value], [key, value]]
    for (let item of objectArray) {
      if (item[1] === "") {
        emptyFieldArray.push(item[0]);
      }
    }
    if (emptyFieldArray.length === 0) {
      return false;
    } else {
      return emptyFieldArray;
    }
  };

  const sentenceCase = (str) => {
    let wordArray = str.split("");
    wordArray[0] = wordArray[0].toUpperCase();
    return wordArray.join("");
  };

  const listFields = (arr) => {
    let newArr = [];
    for (let item of arr) {
      if (item !== arr[arr.length - 1]) {
        item = item + ", ";
      }
      newArr.push(sentenceCase(item));
    }
    return newArr.join("");
  };

  const handleSubmit = (event) => {
    const emailData = {
      subject: data.subject,
      message: data.message,
      from_name: data.name,
      from_email: data.email,
    };
    const templateId = "first_template";

    //Validate data before sending Email

    const fieldsEmpty = isFieldEmpty(data);
    if (fieldsEmpty) {
      const failedObj = {
        type: "failed",
        message: listFields(fieldsEmpty) + " blank. Failed to Submit!"
      }
      setAlert(failedObj);
    } else {
      if (validEmail) {
       !loader && sendEmail(templateId, emailData);
      } else {
        setAlert({
            type: "failed",
            message: "Please enter a valid email address"
          });
      }
    }
    event.preventDefault();
  };

  const sendEmail = (templateId, email) => {
    setLoader(true);
    emailjs
      .send("hotmail", templateId, email, "user_KkdEp8kM7ShrDPVgKin7a")
      .then(
        (response) => {
          setLoader(false);
          setAlert({
            type:"success",
            message: "SUCCESS! " + response.status + " " + response.text +". I will respond as soon as possible."
          })
        },
        (err) => {
          setAlert({
            type: "failed",
            message: "FAILED... " + err
          });
        }
      );
  };

  function closeAlert () {
    setAlert({
      type:"",
      message:""
    })
  }

  return (
    <ContactComponent
      // data={{ name, email, subject, message }}
      darkModeContact={props.darkMode}
      data={data}
      validEmail={validEmail}
      loader={loader}
      alert={alert}
      closeAlert = {()=> closeAlert()}
      onChange={() => handleChange(event)}
      onSubmit={() => handleSubmit(event)}
    />
  );
};

export default ContactContainer;
