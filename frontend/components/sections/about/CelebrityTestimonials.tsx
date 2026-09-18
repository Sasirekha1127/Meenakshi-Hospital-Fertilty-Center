"use client";

import React, { useEffect, useRef, useState } from "react";

interface CelebrityTestimonial {
  id: number;
  name: string;
  role: string;
  youtubeId: string;
  videoDuration: string;
}

const celebrityData: CelebrityTestimonial[] = [
  {
    id: 1,
    name: "Priya & K. Saravanan",
    role: "Cine Actress & Film Producer",
    youtubeId: "V_PzW1H7-qU",
    videoDuration: "2:45",
  },
  {
    id: 2,
    name: "Gautham Karthikeyan",
    role: "Film Director & Screenwriter",
    youtubeId: "ysz5S6PUM-U",
    videoDuration: "3:10",
  },
  {
    id: 3,
    name: "Divya Bharathi",
    role: "Television Host & Bharatanatyam Exponent",
    youtubeId: "dQw4w9WgXcQ",
    videoDuration: "2:20",
  },
  {
    id: 4,
    name: "R. Senthil Nathan",
    role: "State Badminton Champion",
    youtubeId: "V_PzW1H7-qU",
    videoDuration: "1:55",
  },
];

export default function CelebrityTestimonials() {
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const [modalVideoId, setModalVideoId] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>("");
  const [inView, setInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const openVideo = (youtubeId: string, title: string) => {
    setModalVideoId(youtubeId);
    setModalTitle(title);
    setShowVideoModal(true);
  };

  const closeVideo = () => {
    setShowVideoModal(false);
    setModalVideoId("");
    setModalTitle("");
  };

  return (
    <section ref={sectionRef} className="celebrity-testimonials-section" id="celebrity-testimonials">
      <div className="auto-container">
        {/* Section Header */}
        <div className={`celeb-header ${inView ? "revealed" : ""}`}>
          <div className="celeb-kicker">
            <span className="celeb-star">★</span>
            <span className="kicker-text">Celebrity Voices &amp; Trusted Stories</span>
          </div>
          <h2 className="celeb-title">
            Endorsed by Celebrities, <span className="text-teal">Cherished by Families</span>
          </h2>
        </div>

        {/* Video Grid */}
        <div className="celeb-video-grid">
          {celebrityData.map((item, idx) => (
            <button
              type="button"
              key={item.id}
              className={`video-tile ${inView ? "revealed" : ""}`}
              style={{ transitionDelay: `${idx * 0.12 + 0.1}s` }}
              onClick={() => openVideo(item.youtubeId, item.name)}
            >
              <img
                src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
                alt={item.name}
                className="video-thumb-img"
                loading="lazy"
              />

              <span className="tile-shade" aria-hidden="true" />

              <span className="play-button" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>

              <span className="tile-duration">{item.videoDuration}</span>

              <span className="tile-caption">
                <span className="caption-name">{item.name}</span>
                <span className="caption-role">{item.role}</span>
              </span>

              <span className="tile-youtube-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.6 7.2c-.2-1-1-1.8-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4c-1 .2-1.8 1-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8c.2 1 1 1.8 2 2 1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4c1-.2 1.8-1 2-2 .4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
                Watch on YouTube
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      {showVideoModal && (
        <div className="video-modal-overlay" onClick={closeVideo} role="dialog" aria-modal="true">
          <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={closeVideo}
              aria-label="Close video"
            >
              &times;
            </button>
            <div className="modal-video-header">
              <h3 className="modal-title">{modalTitle} — Meenakshi Hospital Experience</h3>
            </div>
            <div className="modal-iframe-wrap">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${modalVideoId}?autoplay=1&rel=0`}
                title={`${modalTitle} Testimonial Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="modal-iframe"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .celebrity-testimonials-section {
          position: relative;
          background: #ffffff;
          padding: 90px 0 100px;
        }

        .auto-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .celeb-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 48px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .celeb-header.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .celeb-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.35);
          color: #936f18;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.4px;
          padding: 6px 18px;
          border-radius: 30px;
          margin-bottom: 16px;
        }

        .celeb-star {
          color: #d4af37;
          font-size: 14px;
        }

        .celeb-title {
          font-size: 28px;
          font-weight: 700;
          color: #1b2421;
          letter-spacing: -0.4px;
          line-height: 1.3;
          margin: 0;
        }

        .text-teal {
          color: #009890;
        }

        /* ---------------------------------------------- */
        /* Video Grid */
        /* ---------------------------------------------- */
        .celeb-video-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }

        .video-tile {
          position: relative;
          aspect-ratio: 16 / 9;
          border-radius: 18px;
          overflow: hidden;
          border: none;
          padding: 0;
          cursor: pointer;
          background: #0c3e3a;
          box-shadow: 0 16px 36px rgba(12, 62, 58, 0.12);
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease;
        }

        .video-tile.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .video-tile:hover {
          box-shadow: 0 22px 46px rgba(12, 62, 58, 0.22);
        }

        .video-thumb-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .video-tile:hover .video-thumb-img {
          transform: scale(1.06);
        }

        .tile-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(6, 30, 27, 0.9) 0%,
            rgba(6, 30, 27, 0.35) 38%,
            rgba(6, 30, 27, 0.05) 60%,
            transparent 75%
          );
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          color: #0c3e3a;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 3px;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease;
        }

        .play-button::before {
          content: "";
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.55);
          animation: play-pulse 2.4s ease-out infinite;
        }

        @keyframes play-pulse {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        .video-tile:hover .play-button {
          transform: translate(-50%, -50%) scale(1.1);
          background: #009890;
          color: #ffffff;
        }

        .tile-duration {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(0, 0, 0, 0.55);
          color: #ffffff;
          font-size: 11.5px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          backdrop-filter: blur(4px);
        }

        .tile-caption {
          position: absolute;
          left: 18px;
          bottom: 16px;
          right: 130px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          text-align: left;
        }

        .caption-name {
          color: #ffffff;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.2px;
        }

        .caption-role {
          color: rgba(255, 255, 255, 0.78);
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tile-youtube-chip {
          position: absolute;
          right: 14px;
          bottom: 14px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          color: #d8281d;
          font-size: 11.5px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 20px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
        }

        /* ---------------------------------------------- */
        /* Video Modal */
        /* ---------------------------------------------- */
        .video-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(12, 62, 58, 0.85);
          backdrop-filter: blur(8px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.25s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .video-modal-dialog {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          max-width: 820px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes scaleUp {
          from {
            transform: scale(0.94);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 14px;
          right: 18px;
          background: rgba(0, 0, 0, 0.08);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 24px;
          line-height: 1;
          color: #1b2421;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
          z-index: 10;
        }

        .modal-close-btn:hover {
          background: rgba(0, 0, 0, 0.16);
          transform: rotate(90deg);
        }

        .modal-video-header {
          padding: 20px 24px 16px;
          border-bottom: 1px solid #edf2f1;
        }

        .modal-title {
          font-size: 18px;
          font-weight: 700;
          color: #1b2421;
          margin: 0;
          padding-right: 40px;
        }

        .modal-iframe-wrap {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          background: #000000;
        }

        .modal-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        /* Responsive */
        @media (max-width: 767px) {
          .celebrity-testimonials-section {
            padding: 65px 0 70px;
          }

          .celeb-title {
            font-size: 27px;
          }

          .celeb-video-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .tile-caption {
            right: 16px;
            bottom: 52px;
          }

          .tile-youtube-chip {
            left: 14px;
            right: auto;
          }
        }
      `}</style>
    </section>
  );
}