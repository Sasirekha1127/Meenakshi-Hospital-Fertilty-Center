"use client";

import React, { useState } from "react";
import Image from "next/image";

const featuredVideo = {
  id: "v1",
  title: "Welcome to Meenakshi Hospital & Fertility Center",
  category: "Hospital Overview",
  duration: "3:15",
  youtubeId: "V_PzW1H7-qU",
  thumbnail: "/assets/images/resource/video-1.jpg",
  description:
    "Take a guided tour through our advanced diagnostic wings, ISO cleanroom embryology labs, and compassionate patient care facilities.",
};

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <section className="mhfc-video-section">
      {/* Decorative Wave Background SVGs - Matching Cutis Layout */}
      <div className="wave-bg wave-bg-left" aria-hidden="true">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-50 180 C 120 120, 240 320, 360 220 C 420 170, 480 200, 520 280"
            stroke="#009890"
            strokeWidth="1.8"
            strokeOpacity="0.38"
          />
          <path
            d="M-80 260 C 90 200, 200 400, 340 300 C 410 250, 460 310, 530 360"
            stroke="#009890"
            strokeWidth="1.4"
            strokeOpacity="0.25"
          />
          <path
            d="M-40 340 C 130 280, 220 450, 380 370 C 440 340, 480 390, 540 430"
            stroke="#74A135"
            strokeWidth="1.2"
            strokeOpacity="0.22"
          />
        </svg>
      </div>

      <div className="wave-bg wave-bg-right" aria-hidden="true">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-20 200 C 140 100, 280 290, 410 190 C 470 140, 510 180, 560 250"
            stroke="#009890"
            strokeWidth="1.8"
            strokeOpacity="0.35"
          />
          <path
            d="M-40 280 C 100 180, 240 370, 380 270 C 440 230, 490 270, 540 330"
            stroke="#009890"
            strokeWidth="1.3"
            strokeOpacity="0.22"
          />
          <path
            d="M0 360 C 130 260, 270 430, 400 340 C 460 300, 500 340, 550 410"
            stroke="#74A135"
            strokeWidth="1.2"
            strokeOpacity="0.2"
          />
        </svg>
      </div>

      <div className="auto-container">
        {/* Header Content Block */}
        <div className="video-section-header">
          <h2 className="video-main-heading">
            Compassionate Care.{" "}
            <span className="teal-highlight">Advanced Treatment.</span> Better Outcomes.
          </h2>
          <p className="video-sub-heading">
            At Meenakshi Hospital &amp; Fertility Center, every patient receives
            personalized care backed by modern medical technology and expert
            specialists. Take a moment to discover how we make your healthcare
            journey safer, simpler, and more comfortable.
          </p>
        </div>

        {/* Video Player Display Card */}
        <div className="video-player-wrapper">
          <div className="video-player-container">
            {isPlaying ? (
              <iframe
                className="video-iframe"
                src={`https://www.youtube-nocookie.com/embed/${featuredVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={featuredVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div
                className="video-poster-overlay"
                onClick={() => setIsPlaying(true)}
                role="button"
                tabIndex={0}
                aria-label={`Play video: ${featuredVideo.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setIsPlaying(true);
                  }
                }}
              >
                {/* Poster Image */}
                <Image
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1080px"
                  style={{ objectFit: "cover" }}
                  priority
                />

                {/* Subtle Gradient Veil */}
                <div className="poster-gradient" />

                {/* Center Play Button with Pulsing Wave */}
                <div className="play-button-outer">
                  <div className="play-button-pulse"></div>
                  <div className="play-button-inner">
                    <svg
                      viewBox="0 0 24 24"
                      className="play-icon-svg"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Video Info Pill / Badge */}
                <div className="video-meta-badge">
                  <span className="video-badge-tag">{featuredVideo.category}</span>
                  <span className="video-badge-duration">
                    <i className="far fa-clock mr-1"></i> {featuredVideo.duration}
                  </span>
                </div>

                {/* Caption Bar */}
                <div className="video-caption-bar">
                  <h4 className="video-caption-title">{featuredVideo.title}</h4>
                  <p className="video-caption-desc">{featuredVideo.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scoped CSS Styles */}
      <style jsx>{`
        .mhfc-video-section {
          position: relative;
          background: #ffffff;
          padding: 85px 0 95px 0;
          overflow: hidden;
          font-family: inherit;
        }

        /* Ambient Wave Lines */
        .wave-bg {
          position: absolute;
          width: 540px;
          height: 540px;
          pointer-events: none;
          z-index: 1;
        }

        .wave-bg-left {
          top: 10%;
          left: -120px;
        }

        .wave-bg-right {
          bottom: 5%;
          right: -140px;
        }

        .wave-bg svg {
          width: 100%;
          height: 100%;
        }

        /* Header block */
        .video-section-header {
          position: relative;
          z-index: 2;
          max-width: 920px;
          margin: 0 auto 42px auto;
          text-align: center;
          padding: 0 15px;
        }

        .video-main-heading {
          font-family: var(--title-font);
          font-size: 27px;
          font-weight: 700;
          line-height: 1.34;
          color: #1a252c;
          margin-bottom: 16px;
          letter-spacing: -0.3px;
        }

        .teal-highlight {
          color: #009890;
          font-weight: 700;
          position: relative;
          display: inline;
        }

        .video-sub-heading {
          font-size: 15.5px;
          line-height: 1.68;
          color: #5a6872;
          max-width: 780px;
          margin: 0 auto;
          font-weight: 400;
        }

        /* Player Wrapper */
        .video-player-wrapper {
          position: relative;
          z-index: 3;
          max-width: 1020px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .video-player-container {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
          background-color: #000000;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 24px 50px -12px rgba(0, 152, 144, 0.18),
            0 12px 28px -6px rgba(12, 62, 58, 0.12);
          border: 1px solid rgba(0, 152, 144, 0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .video-player-container:hover {
          box-shadow: 0 30px 60px -12px rgba(0, 152, 144, 0.25),
            0 18px 36px -6px rgba(12, 62, 58, 0.18);
        }

        .video-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .video-poster-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
          user-select: none;
        }

        .poster-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(12, 62, 58, 0.25) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(12, 62, 58, 0.85) 100%
          );
          transition: background 0.3s ease;
        }

        .video-poster-overlay:hover .poster-gradient {
          background: linear-gradient(
            180deg,
            rgba(12, 62, 58, 0.15) 0%,
            rgba(0, 0, 0, 0.1) 45%,
            rgba(12, 62, 58, 0.88) 100%
          );
        }

        /* Play button */
        .play-button-outer {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 86px;
          height: 86px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
        }

        .play-button-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(0, 152, 144, 0.45);
          animation: ripplePulse 2.2s infinite ease-out;
        }

        .play-button-inner {
          position: relative;
          width: 72px;
          height: 72px;
          background: #009890;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 10px 25px rgba(0, 152, 144, 0.45);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease;
        }

        .video-poster-overlay:hover .play-button-inner {
          transform: scale(1.1);
          background: #0C3E3A;
          box-shadow: 0 12px 30px rgba(12, 62, 58, 0.5);
        }

        .play-icon-svg {
          width: 32px;
          height: 32px;
          margin-left: 3px;
        }

        @keyframes ripplePulse {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        /* Badges */
        .video-meta-badge {
          position: absolute;
          top: 24px;
          right: 24px;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .video-badge-tag {
          background: rgba(0, 152, 144, 0.9);
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 30px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          backdrop-filter: blur(4px);
        }

        .video-badge-duration {
          background: rgba(0, 0, 0, 0.65);
          color: #ffffff;
          font-size: 12px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 30px;
          backdrop-filter: blur(4px);
        }

        .video-caption-bar {
          position: absolute;
          bottom: 24px;
          left: 28px;
          right: 28px;
          z-index: 4;
          color: #ffffff;
        }

        .video-caption-title {
          font-family: var(--title-font);
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 6px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }

        .video-caption-desc {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.85);
          max-width: 680px;
          line-height: 1.45;
          margin: 0;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
          .mhfc-video-section {
            padding: 65px 0 75px 0;
          }

          .video-main-heading {
            font-size: 30px;
          }

          .video-sub-heading {
            font-size: 14.5px;
          }

          .play-button-outer {
            width: 72px;
            height: 72px;
          }

          .play-button-inner {
            width: 60px;
            height: 60px;
          }

          .play-icon-svg {
            width: 26px;
            height: 26px;
          }

          .video-caption-title {
            font-size: 18px;
          }

          .video-caption-desc {
            font-size: 12px;
          }
        }

        @media (max-width: 767px) {
          .mhfc-video-section {
            padding: 50px 0 60px 0;
          }

          .video-main-heading {
            font-size: 24px;
            line-height: 1.35;
          }

          .video-sub-heading {
            font-size: 13.5px;
          }

          .video-caption-bar {
            display: none;
          }

          .video-meta-badge {
            top: 14px;
            right: 14px;
          }

          .video-badge-tag,
          .video-badge-duration {
            font-size: 11px;
            padding: 3px 10px;
          }
        }
      `}</style>
    </section>
  );
}
