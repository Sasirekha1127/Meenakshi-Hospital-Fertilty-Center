"use client";

import React from "react";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
  tooltipText?: string;
}

export default function FloatingWhatsApp({
  phoneNumber = "919442560000",
  message = "Hello Meenakshi Hospital, I would like to inquire about consultation and services.",
  tooltipText = "Chat on WhatsApp",
}: FloatingWhatsAppProps) {
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;

  return (
    <aside aria-label="WhatsApp Support">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat with Meenakshi Hospital on WhatsApp"
        title="Chat with Meenakshi Hospital on WhatsApp"
      >
        <span className="whatsapp-float-pulse" aria-hidden="true" />
        
        {/* WhatsApp Icon */}
        <svg
          className="whatsapp-float-icon"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m-3.53 3.03c-.19 0-.41.07-.63.31-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.02.4 1.38.52.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28s-1.44-.71-1.66-.82c-.22-.11-.38-.16-.54.16-.16.32-.62.82-.76.98-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.55-.42l-.47-.01z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="whatsapp-float-tooltip">
          <span className="whatsapp-status-dot" />
          <span>{tooltipText}</span>
        </span>
      </a>
    </aside>
  );
}
