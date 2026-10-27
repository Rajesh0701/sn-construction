"use client";

import { useState, type FormEvent } from "react";

type Status = {
  type: "" | "ok" | "err";
  message: string;
};

const SCRIPT_URL = process.env.NEXT_PUBLIC_SCRIPT_URL ?? "";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!name || !email || !phone) {
      setStatus({ type: "err", message: "Please fill in your name, email, and phone number." });
      return;
    }

    if (!SCRIPT_URL) {
      setStatus({ type: "err", message: "Form is not configured yet. Please call us directly." });
      return;
    }

    setSending(true);
    setStatus({ type: "", message: "Sending..." });

    const url = SCRIPT_URL + "?" + new URLSearchParams({ name, email, phone }).toString();

    fetch(url, { method: "GET", mode: "no-cors" })
      .then(() => {
        setStatus({ type: "ok", message: "Thank you! Our engineer will contact you within 24 hours." });
        form.reset();
      })
      .catch(() => {
        setStatus({ type: "err", message: "Something went wrong. Please try again or call us directly." });
      })
      .finally(() => setSending(false));
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Your Full Name <span className="req">*</span></label>
          <input id="name" name="name" type="text" placeholder="e.g. R. Karthik" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number <span className="req">*</span></label>
          <input id="phone" name="phone" type="tel" placeholder="+91 98765 00000" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address <span className="req">*</span></label>
        <input id="email" name="email" type="email" placeholder="you@example.com" />
      </div>

      <button type="submit" className="btn btn-primary submit-btn" disabled={sending}>
        Submit Enquiry →
      </button>

      <div className={`form-status ${status.type}`} role="status" aria-live="polite">
        {status.message}
      </div>
    </form>
  );
}