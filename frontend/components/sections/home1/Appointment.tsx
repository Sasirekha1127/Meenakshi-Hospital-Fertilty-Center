"use client";

import React, { useState } from "react";
import Image from "next/image";

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface AppointmentErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Appointment() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<AppointmentErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const validateField = (field: keyof AppointmentFormData, value: string): string | undefined => {
    const trimmed = value.trim();
    switch (field) {
      case "name":
        if (!trimmed) return "Full name is required.";
        if (trimmed.length < 2) return "Name must be at least 2 characters.";
        return undefined;
      case "email":
        if (!trimmed) return "Email address is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
          return "Please enter a valid email address.";
        }
        return undefined;
      case "phone":
        if (!trimmed) return "Phone number is required.";
        const clean = trimmed.replace(/[\s\-()]/g, "");
        if (!/^\+?[0-9]{10,13}$/.test(clean)) {
          return "Enter a valid 10-digit mobile number.";
        }
        return undefined;
      case "message":
        if (!trimmed) return "Please enter your message or reason for appointment.";
        if (trimmed.length < 10) return "Message must be at least 10 characters.";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof AppointmentFormData;
    setFormData((prev) => ({ ...prev, [key]: value }));

    if (touched[key]) {
      setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof AppointmentFormData;
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTouched = { name: true, email: true, phone: true, message: true };
    setTouched(newTouched);

    const newErrors: AppointmentErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      message: validateField("message", formData.message),
    };

    // Filter out undefined
    const hasErrors = Object.values(newErrors).some((err) => Boolean(err));
    setErrors(newErrors);

    if (hasErrors) {
      const firstKey = Object.keys(newErrors).find((k) => !!newErrors[k as keyof AppointmentErrors]);
      if (firstKey) {
        const el = document.querySelector(`[name="${firstKey}"]`) as HTMLElement;
        el?.focus();
      }
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: "Appointment Request",
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your appointment request has been submitted. We will contact you shortly.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
        setTouched({});
      } else {
        setStatus("error");
        setStatusMessage(data?.error || "Failed to submit. Please try again or call us.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Connection error. Please call +91 94432 24499 directly.");
    }
  };

  return (
    <section className="appointment-section" id="appointment">
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(/assets/images/shape/shape-17.png)" }}
      ></div>
      <figure className="image-layer">
        <Image
          src="/assets/images/resource/women-1.png"
          alt="Medical consultation"
          width={488}
          height={591}
          priority
        />
      </figure>
      <div className="outer-container clearfix">
        <div className="left-column">
          <div
            className="bg-layer"
            style={{
              backgroundImage: "url(/assets/images/background/appointment-bg.jpg)",
            }}
          ></div>
          <div className="content-box">
            <div className="icon-box">
              <Image
                src="/assets/images/icons/icon-4.svg"
                alt="Icon"
                width={88}
                height={88}
                priority
              />
            </div>
            <h3>Need a Doctor for Check-up? Call for an Emergency Service!</h3>
            <span>
              <a href="tel:+919443224499">Call: +91 94432 24499</a>
            </span>
          </div>
        </div>
        <div className="right-column">
          <div className="form-inner">
            <div
              className="shape"
              style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}
            ></div>
            <h3>Make an Appointment</h3>

            {status === "success" && (
              <div className="apt-alert apt-success" role="status">
                <i className="fas fa-check-circle mr-2"></i> {statusMessage}
              </div>
            )}
            {status === "error" && (
              <div className="apt-alert apt-error" role="alert">
                <i className="fas fa-exclamation-circle mr-2"></i> {statusMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <div className="icon">
                  <i className="icon-45"></i>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.name && errors.name ? "apt-invalid" : ""}
                />
                {touched.name && errors.name && (
                  <p className="apt-field-error">{errors.name}</p>
                )}
              </div>

              <div className="form-group">
                <div className="icon">
                  <i className="icon-46"></i>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.email && errors.email ? "apt-invalid" : ""}
                />
                {touched.email && errors.email && (
                  <p className="apt-field-error">{errors.email}</p>
                )}
              </div>

              <div className="form-group">
                <div className="icon">
                  <i className="fas fa-phone-alt" style={{ fontSize: "15px" }}></i>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (10 digits) *"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.phone && errors.phone ? "apt-invalid" : ""}
                  style={{
                    position: "relative",
                    display: "block",
                    width: "100%",
                    height: "60px",
                    border: "1px solid rgba(189, 189, 189, 0.6)",
                    borderRadius: "5px",
                    fontSize: "16px",
                    color: "#222",
                    background: "#fff",
                    padding: "10px 20px 10px 46px",
                  }}
                />
                {touched.phone && errors.phone && (
                  <p className="apt-field-error">{errors.phone}</p>
                )}
              </div>

              <div className="form-group">
                <div className="icon">
                  <i className="icon-48"></i>
                </div>
                <textarea
                  name="message"
                  placeholder="Reason for Visit / Message *"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={3}
                  className={touched.message && errors.message ? "apt-invalid" : ""}
                ></textarea>
                {touched.message && errors.message && (
                  <p className="apt-field-error">{errors.message}</p>
                )}
              </div>

              <div className="message-btn">
                <button
                  type="submit"
                  className="theme-btn btn-two"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span>
                      <i className="fas fa-spinner fa-spin mr-2"></i> Submitting...
                    </span>
                  ) : (
                    <span>Request Appointment</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.appointment-section input.apt-invalid),
        :global(.appointment-section textarea.apt-invalid) {
          border-color: #e53e3e !important;
          background-color: #fff8f8 !important;
          box-shadow: 0 0 0 2px rgba(229, 62, 62, 0.15) !important;
        }

        .apt-field-error {
          color: #e53e3e;
          font-size: 12.5px;
          margin: 4px 0 0 4px;
          font-weight: 500;
          line-height: 1.2;
        }

        .apt-alert {
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 14px;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          line-height: 1.4;
        }

        .apt-success {
          background-color: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }

        .apt-error {
          background-color: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }
      `}</style>
    </section>
  );
}
