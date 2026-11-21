import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

import ContactComponent from "../components/Contact";

const EMAIL = "charanareagan@hotmail.com";
const PHONE = "+254 710 969 595";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const sentenceCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const ContactContainer = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [validEmail, setValidEmail] = useState(true);
  const [loader, setLoader] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(0);

  useEffect(() => {
    setValidEmail(data.email.length === 0 || emailRegex.test(data.email.toLowerCase()));
  }, [data.email]);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (templateId, email) => {
    setLoader(true);
    emailjs.send("hotmail", templateId, email, "user_KkdEp8kM7ShrDPVgKin7a").then(
      (response) => {
        setLoader(false);
        setAlert({
          type: "success",
          message: `SUCCESS! ${response.status} ${response.text}. I will respond as soon as possible.`,
        });
        setData({ name: "", email: "", subject: "", message: "" });
      },
      (err) => {
        setLoader(false);
        setAlert({
          type: "failed",
          message: `FAILED... ${err && err.text ? err.text : err}`,
        });
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const empty = Object.keys(data).filter((k) => data[k].trim() === "");
    if (empty.length) {
      setAlert({
        type: "failed",
        message: `${empty.map(sentenceCase).join(", ")} blank. Failed to submit!`,
      });
      return;
    }
    if (!validEmail) {
      setAlert({ type: "failed", message: "Please enter a valid email address" });
      return;
    }
    if (!loader) {
      sendEmail("first_template", {
        subject: data.subject,
        message: data.message,
        from_name: data.name,
        from_email: data.email,
      });
    }
  };

  const copyEmail = () => {
    const done = () => {
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(done, () => {});
    }
  };

  return (
    <ContactComponent
      email={EMAIL}
      phone={PHONE}
      data={data}
      validEmail={validEmail}
      loader={loader}
      alert={alert}
      copied={copied}
      onCopy={copyEmail}
      closeAlert={() => setAlert({ type: "", message: "" })}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default ContactContainer;
