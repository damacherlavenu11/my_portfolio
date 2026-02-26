import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { logGTMEvent } from "../utils/gtm";

function Contact({ profile }) {
  const [showCopied, setShowCopied] = useState(false);
  const phoneHref = `tel:${profile.mobile.replace(/[^\d+]/g, "")}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setShowCopied(true);
      logGTMEvent("copy_email", { email: profile.email });
      setTimeout(() => setShowCopied(false), 1800);
    } catch (error) {
      setShowCopied(false);
      console.error("Error copying email:", error);
    }
  };

  const handleCallPhone = () => {
    logGTMEvent("call_phone", { phone: profile.mobile });
    window.location.href = phoneHref;
  };

  return (
    <section id="contact" className="section contact">
      <h2>Contact Information</h2>
      <p className="section-lead">
        Click any item below to reach me directly. This section includes my
        personal and social profiles.
      </p>

      <div className="contact-grid">
        <div className="contact-item">
          <p className="contact-label">Name</p>
          <p className="contact-value">{profile.name}</p>
        </div>

        <div className="contact-item">
          <p className="contact-label">Location</p>
          <p className="contact-value">{profile.location}</p>
        </div>

        <div className="contact-item">
          <p className="contact-label">Email</p>
          <a
            className="contact-value contact-link"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          <button className="btn ghost contact-copy" onClick={handleCopyEmail}>
            {showCopied ? "Email Copied!" : "Copy Email"}
          </button>
        </div>

        <div className="contact-item">
          <p className="contact-label">Phone</p>
          <a className="contact-value contact-link" href={phoneHref}>
            {profile.mobile}
          </a>
          <button
            className="btn ghost contact-call"
            onClick={handleCallPhone}
            aria-label="Call phone number"
          >
            <FontAwesomeIcon icon={faPhone} size="sm" color="#4178ff" />
          </button>
        </div>

        <div className="contact-item">
          <p className="contact-label">GitHub</p>
          <a
            className="contact-value contact-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            {profile.github}
          </a>
        </div>

        <div className="contact-item">
          <p className="contact-label">LinkedIn</p>
          <a
            className="contact-value contact-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {profile.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
