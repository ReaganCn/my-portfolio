import React from "react";
import SectionLabel from "./fx/SectionLabel";
import SplitLines from "./fx/SplitLines";
import Reveal from "./fx/Reveal";

const Field = ({ name, label, value, onChange, invalid, multiline, type = "text" }) => {
  const Input = multiline ? "textarea" : "input";
  return (
    <div className={`field ${invalid ? "is-invalid" : ""} ${multiline ? "field--multi" : ""}`}>
      <Input
        id={`field-${name}`}
        name={name}
        type={multiline ? undefined : type}
        rows={multiline ? 5 : undefined}
        value={value}
        onChange={onChange}
        placeholder=" "
        aria-invalid={invalid || undefined}
        className="field__input"
      />
      <label htmlFor={`field-${name}`} className="field__label">
        {label}
      </label>
      <span className="field__line" aria-hidden="true" />
    </div>
  );
};

const Loader = () => (
  <svg viewBox="0 0 100 100" className="btn__loader" aria-hidden="true">
    {[22, 42, 62].map((x, i) => (
      <rect key={x} x={x} y="35" width="8" height="20" fill="currentColor">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 30; 0 0"
          begin={`${i * 0.2}s`}
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    ))}
  </svg>
);

const ContactComponent = ({
  email,
  phone,
  data,
  validEmail,
  loader,
  alert,
  copied,
  onCopy,
  closeAlert,
  onChange,
  onSubmit,
}) => (
  <section id="contact" className="section container">
    <SectionLabel index="02" label="contact" />
    <SplitLines
      as="h2"
      className="section__title"
      label="Get in touch."
      lines={[
        <>
          Get in <em className="serif">touch.</em>
        </>,
      ]}
    />

    <div className="contact">
      <Reveal className="contact__intro">
        <p className="contact__lead">
          Have a project or a role in mind? Send a note through the form or reach me directly.
        </p>
        <div className="contact__email-row">
          <a href={`mailto:${email}`} className="contact__email">
            {email}
          </a>
          <button type="button" className="contact__copy mono" onClick={onCopy}>
            copy
          </button>
        </div>
        <a href={`tel:${phone.replace(/\s/g, "")}`} className="contact__phone mono">
          {phone}
        </a>
      </Reveal>

      <Reveal as="form" className="contact__form" delay={120} onSubmit={onSubmit} noValidate>
        {alert.type && (
          <div
            className={`alert ${alert.type === "success" ? "alert--ok" : "alert--err"}`}
            role="status"
          >
            <span className="alert__msg">{alert.message}</span>
            <button type="button" className="alert__close" onClick={closeAlert} aria-label="Dismiss">
              ×
            </button>
          </div>
        )}

        <div className="contact__row">
          <Field name="name" label="Your name" value={data.name} onChange={onChange} />
          <Field
            name="email"
            label="Your email"
            type="email"
            value={data.email}
            onChange={onChange}
            invalid={!validEmail}
          />
        </div>
        <Field name="subject" label="Subject" value={data.subject} onChange={onChange} />
        <Field name="message" label="Message" value={data.message} onChange={onChange} multiline />

        <button type="submit" className="btn" disabled={loader} aria-busy={loader}>
          <span className="btn__label">{loader ? <Loader /> : "Send message"}</span>
          {!loader && (
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          )}
        </button>
      </Reveal>
    </div>

    <div className={`toast mono ${copied ? "is-shown" : ""}`} role="status" aria-live="polite">
      {copied ? "email copied ✓" : ""}
    </div>
  </section>
);

export default ContactComponent;
