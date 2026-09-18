"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaTag,
  FaCommentDots,
  FaCheckCircle,
  FaExclamationCircle,
  FaTimes,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

interface FormTouched {
  name?: boolean;
  email?: boolean;
  phone?: boolean;
  subject?: boolean;
  message?: boolean;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

/** Field config drives the markup below — icon, label, type, and grid span. */
const fieldConfig: Array<{
  name: keyof FormData;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  icon: React.ElementType;
  full?: boolean;
}> = [
  { name: "name", label: "Your Name", type: "text", icon: FaUser },
  { name: "email", label: "Your Email", type: "email", icon: FaEnvelope },
  { name: "phone", label: "Phone Number", type: "tel", icon: FaPhoneAlt },
  { name: "subject", label: "Subject / Department", type: "text", icon: FaTag },
  { name: "message", label: "Your Message or Health Inquiry", type: "textarea", icon: FaCommentDots, full: true },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverErrorMessage, setServerErrorMessage] = useState<string>("");

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    const trimmed = value.trim();

    switch (name) {
      case "name":
        if (!trimmed) return "Full Name is required.";
        if (trimmed.length < 2) return "Name must be at least 2 characters.";
        if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
          return "Name should only contain letters, dots, and spaces.";
        }
        return undefined;

      case "email": {
        if (!trimmed) return "Email address is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(trimmed)) {
          return "Please enter a valid email (e.g. yourname@example.com).";
        }
        return undefined;
      }

      case "phone": {
        if (!trimmed) return "Phone number is required.";
        const cleanPhone = trimmed.replace(/[\s\-()]/g, "");
        if (!/^\+?[0-9]{10,13}$/.test(cleanPhone)) {
          return "Please enter a valid 10-digit mobile number.";
        }
        return undefined;
      }

      case "subject":
        if (!trimmed) return "Subject is required.";
        if (trimmed.length < 3) return "Subject must be at least 3 characters.";
        return undefined;

      case "message":
        if (!trimmed) return "Message is required.";
        if (trimmed.length < 10) return "Message must be at least 10 characters.";
        return undefined;

      default:
        return undefined;
    }
  };

  const validateAll = (): FormErrors => {
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormData;
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      const fieldError = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: fieldError }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormData;
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldError = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: fieldError }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched: FormTouched = {
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    };
    setTouched(allTouched);

    const validationErrors = validateAll();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstInvalidField = Object.keys(validationErrors)[0];
      const element = document.querySelector(`[name="${firstInvalidField}"]`) as HTMLElement;
      if (element) element.focus();
      return;
    }

    setStatus("loading");
    setServerErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData(initialFormData);
        setErrors({});
        setTouched({});
      } else {
        setStatus("error");
        setServerErrorMessage(data?.error || "Unable to send your message. Please try again.");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setStatus("error");
      setServerErrorMessage("Network error. Please verify your connection or call us at +91 94432 24499.");
    }
  };

  const getFieldState = (name: keyof FormData): "invalid" | "valid" | "" => {
    if (touched[name] && errors[name]) return "invalid";
    if (touched[name] && !errors[name] && formData[name].trim()) return "valid";
    return "";
  };

  return (
    <div className="mhcf-wrapper">
      {status === "success" && (
        <div className="mhcf-alert mhcf-alert-success" role="status">
          <div className="mhcf-alert-icon">
            <FaCheckCircle size={17} />
          </div>
          <div className="mhcf-alert-text">
            <h4>Message Sent Successfully!</h4>
            <p>
              Thank you for contacting Meenakshi Hospital &amp; Fertility Center. Our
              medical coordination desk will review your inquiry and get in touch with
              you shortly.
            </p>
          </div>
          <button
            type="button"
            className="mhcf-alert-close"
            onClick={() => setStatus("idle")}
            aria-label="Dismiss notification"
          >
            <FaTimes size={15} />
          </button>
        </div>
      )}

      {status === "error" && (
        <div className="mhcf-alert mhcf-alert-error" role="alert">
          <div className="mhcf-alert-icon">
            <FaExclamationCircle size={17} />
          </div>
          <div className="mhcf-alert-text">
            <h4>Submission Error</h4>
            <p>{serverErrorMessage}</p>
          </div>
          <button
            type="button"
            className="mhcf-alert-close"
            onClick={() => setStatus("idle")}
            aria-label="Dismiss notification"
          >
            <FaTimes size={15} />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mhcf-card" noValidate>
        <div className="mhcf-card-head">
          <span className="mhcf-eyebrow">Get In Touch</span>
          <h3>Send Us Your Health Inquiry</h3>
          <p>Our coordination desk usually responds within a few hours.</p>
        </div>

        <div className="mhcf-grid">
          {fieldConfig.map((field) => {
            const FieldIcon = field.icon;
            const state = getFieldState(field.name);
            const value = formData[field.name];

            return (
              <div
                key={field.name}
                className={`mhcf-field ${field.full ? "mhcf-field-full" : ""}`}
              >
                <label className="mhcf-label" htmlFor={field.name}>
                  {field.label} <span className="mhcf-req">*</span>
                </label>

                <div className={`mhcf-input-shell mhcf-${state}`}>
                  <span className="mhcf-input-icon">
                    <FieldIcon size={14} />
                  </span>

                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      value={value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us how we can help..."
                      disabled={status === "loading"}
                      aria-invalid={state === "invalid"}
                      aria-describedby={state === "invalid" ? `${field.name}-error` : undefined}
                    />
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      value={value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={
                        field.name === "phone" ? "10-digit mobile number" : `Enter ${field.label.toLowerCase()}`
                      }
                      disabled={status === "loading"}
                      aria-invalid={state === "invalid"}
                      aria-describedby={state === "invalid" ? `${field.name}-error` : undefined}
                    />
                  )}

                  {state === "valid" && (
                    <span className="mhcf-tick" aria-hidden="true">
                      <FaCheckCircle size={14} />
                    </span>
                  )}
                </div>

                {state === "invalid" && (
                  <span id={`${field.name}-error`} className="mhcf-error" role="alert">
                    <FaExclamationCircle size={11} />
                    <span>{errors[field.name]}</span>
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="mhcf-submit-row">
          <button type="submit" className="mhcf-submit-btn" disabled={status === "loading"}>
            {status === "loading" ? (
              <>
                <FaSpinner size={14} className="mhcf-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <FaPaperPlane size={13} />
              </>
            )}
          </button>
        </div>
      </form>

      <style>{`
        .mhcf-wrapper {
          position: relative;
          width: 100%;
          font-family: inherit;
        }

        /* ---------- Alerts ---------- */
        .mhcf-alert {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 20px;
          border-radius: 12px;
          margin-bottom: 24px;
          animation: mhcfSlideIn 0.3s ease-out;
        }

        @keyframes mhcfSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mhcf-alert-success {
          background: #f0fdf9;
          border: 1px solid #99f6e4;
          color: #0d9488;
        }

        .mhcf-alert-error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #b91c1c;
        }

        .mhcf-alert-icon {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mhcf-alert-success .mhcf-alert-icon {
          background: #ccfbf1;
          color: #0f766e;
        }

        .mhcf-alert-error .mhcf-alert-icon {
          background: #fee2e2;
          color: #b91c1c;
        }

        .mhcf-alert-text {
          flex: 1;
        }

        .mhcf-alert-text h4 {
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 4px 0;
        }

        .mhcf-alert-text p {
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
          opacity: 0.9;
        }

        .mhcf-alert-close {
          background: transparent;
          border: none;
          color: inherit;
          cursor: pointer;
          opacity: 0.65;
          padding: 2px;
          transition: opacity 0.2s ease;
        }

        .mhcf-alert-close:hover {
          opacity: 1;
        }

        /* ---------- Card ---------- */
        .mhcf-card {
          background: #ffffff;
          border: 1px solid rgba(11, 43, 76, 0.08);
          border-radius: 18px;
          padding: 34px 30px;
          box-shadow: 0 16px 40px rgba(11, 43, 76, 0.06);
        }

        .mhcf-card-head {
          margin-bottom: 24px;
        }

        .mhcf-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          color: #74a135;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
        }

        .mhcf-card-head h3 {
          font-size: 22px;
          font-weight: 800;
          color: #0b2b4c;
          margin: 0 0 6px 0;
        }

        .mhcf-card-head p {
          font-size: 13.5px;
          color: #6a7c7a;
          margin: 0;
        }

        /* ---------- Grid & fields ---------- */
        .mhcf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 18px;
          margin-bottom: 26px;
        }

        .mhcf-field-full {
          grid-column: 1 / -1;
        }

        .mhcf-label {
          display: block;
          font-size: 12.5px;
          font-weight: 700;
          color: #33474f;
          margin-bottom: 7px;
        }

        .mhcf-req {
          color: #e53e3e;
        }

        .mhcf-input-shell {
          position: relative;
          display: flex;
          align-items: flex-start;
          border: 1.5px solid #e3e9e8;
          border-radius: 10px;
          background: #fbfdfd;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }

        .mhcf-input-shell:focus-within {
          border-color: #009890;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(0, 152, 144, 0.1);
        }

        .mhcf-input-shell.mhcf-invalid {
          border-color: #e53e3e;
          background: #fff9f9;
          box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
        }

        .mhcf-input-shell.mhcf-valid {
          border-color: #009890;
        }

        .mhcf-input-icon {
          flex-shrink: 0;
          width: 40px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a5a3;
        }

        .mhcf-input-shell:focus-within .mhcf-input-icon {
          color: #009890;
        }

        .mhcf-input-shell input,
        .mhcf-input-shell textarea {
          flex: 1;
          min-width: 0;
          border: none;
          background: transparent;
          outline: none;
          font-size: 14px;
          color: #16262c;
          padding: 12px 36px 12px 0;
        }

        .mhcf-input-shell input {
          height: 46px;
        }

        .mhcf-input-shell textarea {
          padding-top: 13px;
          resize: vertical;
          min-height: 100px;
        }

        .mhcf-input-shell input::placeholder,
        .mhcf-input-shell textarea::placeholder {
          color: #a3b3b1;
        }

        .mhcf-input-shell input:disabled,
        .mhcf-input-shell textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .mhcf-tick {
          position: absolute;
          right: 14px;
          top: 16px;
          color: #009890;
          pointer-events: none;
        }

        .mhcf-error {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #e53e3e;
          font-size: 12px;
          font-weight: 500;
          margin-top: 6px;
        }

        /* ---------- Submit button ---------- */
        .mhcf-submit-row {
          display: flex;
          justify-content: flex-end;
        }

        .mhcf-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: auto;
          background: linear-gradient(135deg, #009890 0%, #0a6f68 100%);
          color: #ffffff;
          font-weight: 700;
          font-size: 13.5px;
          letter-spacing: 0.3px;
          padding: 12px 26px;
          border: none;
          border-radius: 40px;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.2s ease;
          box-shadow: 0 8px 20px rgba(0, 152, 144, 0.22);
        }

        .mhcf-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(0, 152, 144, 0.32);
        }

        .mhcf-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .mhcf-spin {
          animation: mhcfSpin 0.8s linear infinite;
        }

        @keyframes mhcfSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 640px) {
          .mhcf-card {
            padding: 26px 20px;
          }
          .mhcf-grid {
            grid-template-columns: 1fr;
          }
          .mhcf-submit-row {
            justify-content: stretch;
          }
          .mhcf-submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}