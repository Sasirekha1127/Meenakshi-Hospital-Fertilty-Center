"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FaqItem {
  id: number;
  category: "all" | "fertility" | "maternity" | "surgical" | "billing";
  categoryLabel: string;
  question: string;
  questionTa: string;
  answer: string;
  answerTa: string;
}

const faqsData: FaqItem[] = [
  {
    id: 1,
    category: "fertility",
    categoryLabel: "Fertility & IVF",
    question: "What is the clinical IVF success rate at Meenakshi Fertility Center?",
    questionTa: "மீனாட்சி கருத்தரிப்பு மையத்தில் (Meenakshi Fertility Center) IVF சிகிச்சைக்கான மருத்துவ வெற்றி விகிதம் என்ன?",
    answer:
      "Meenakshi Fertility Center consistently maintains a 92%+ cumulative clinical pregnancy rate. This high success is achieved through Day-5 blastocyst culture, laser-assisted embryo hatching, high-definition ICSI, and continuous environmental control in our ISO-certified cleanroom embryology laboratories.",
    answerTa:
      "மீனாட்சி கருத்தரிப்பு மையம் தொடர்ந்து 92%+ ஒட்டுமொத்த மருத்துவக் கர்ப்ப வெற்றி விகிதத்தைப் பெற்று வருகிறது. 5-ஆம் நாள் பிளாஸ்டோசிஸ்ட் கரு வளர்ப்பு (Day-5 Blastocyst culture), லேசர் மூலம் கரு முட்டை பொரித்தல் (Laser-assisted hatching), உயர் துல்லிய ICSI சிகிச்சை முறை மற்றும் எங்கள் ISO-சான்றளிக்கப்பட்ட அதிநவீன தூய கருவியல் ஆய்வகங்களின் (Cleanroom Embryology Labs) தொடர்ச்சியான தரக் கட்டுப்பாடு ஆகியவற்றின் மூலம் இந்த உயர் வெற்றி சாத்தியமாகிறது.",
  },
  {
    id: 2,
    category: "fertility",
    categoryLabel: "Fertility & IVF",
    question: "How long does a complete IVF treatment cycle take?",
    questionTa: "ஒரு முழுமையான IVF சிகிச்சை முறைக்கு எவ்வளவு காலம் ஆகும்?",
    answer:
      "A standard IVF cycle takes approximately 4 to 6 weeks. It involves initial diagnostic assessments, 10–12 days of personalized ovarian stimulation, egg retrieval under mild anesthesia, 5-day blastocyst culture in our embryology lab, followed by fresh or vitrified frozen embryo transfer. We customize visits to comfortably accommodate outstation patients.",
    answerTa:
      "ஒரு வழக்கமான IVF சிகிச்சை சுழற்சிக்கு சுமார் 4 முதல் 6 வாரங்கள் ஆகும். இதில் ஆரம்பக்கட்ட பரிசோதனைகள், 10–12 நாட்கள் சினைப்பை தூண்டுதல் மருந்துகள், லேசான மயக்க மருந்தில் கருமுட்டை எடுத்தல், கருவியல் ஆய்வகத்தில் 5 நாட்கள் கரு வளர்ப்பு மற்றும் புதிய அல்லது உறையவைக்கப்பட்ட கருவை கருப்பையில் பதித்தல் (Embryo Transfer) ஆகியவை அடங்கும். வெளியூர் மற்றும் வெளிமாநில நோயாளிகளுக்கு வசதியாக சிகிச்சை வருகை அட்டவணையை நாங்கள் மாற்றி அமைத்துக் கொடுக்கிறோம்.",
  },
  {
    id: 3,
    category: "maternity",
    categoryLabel: "Maternity Care",
    question: "What maternity facilities and normal delivery options do you offer?",
    questionTa: "நீங்கள் வழங்கும் மகப்பேறு வசதிகள் மற்றும் சுகப்பிரசவ வாய்ப்புகள் என்னென்ன?",
    answer:
      "We offer comprehensive mother-and-baby care including painless normal delivery with 24/7 epidural anesthesia support, advanced fetal monitoring, private birthing suites, and emergency surgical capabilities. Our in-house Level-III Neonatal Intensive Care Unit (NICU) with senior neonatologists provides immediate safety for high-risk newborns.",
    answerTa:
      "24/7 எபிட்யூரல் மயக்கமருந்து வசதியுடன் கூடிய வலியற்ற சுகப்பிரசவம் (Painless Normal Delivery), நவீன கரு வளர்ச்சி கண்காணிப்பு, தனிப்பட்ட பிரசவ அறைகள் மற்றும் அவசர அறுவை சிகிச்சை வசதிகள் உள்ளிட்ட விரிவான தாய்-சேய் நல சேவைகளை நாங்கள் வழங்குகிறோம். மேலும், எங்கள் மருத்துவமனையிலேயே உள்ள நிலை-III பச்சிளங்குழந்தைகள் தீவிர சிகிச்சைப் பிரிவு (Level-III NICU) மற்றும் மூத்த குழந்தை நல மருத்துவர்கள் மூலம் குறைமாத மற்றும் அதிக ஆபத்துள்ள பச்சிளங்குழந்தைகளுக்கு உடனடி பாதுகாப்பு உறுதி செய்யப்படுகிறது.",
  },
  {
    id: 4,
    category: "surgical",
    categoryLabel: "Laparoscopic Surgery",
    question: "What are the advantages of 3D Laparoscopic & Hysteroscopic surgery?",
    questionTa: "3D லேப்ராஸ்கோபிக் மற்றும் ஹிஸ்டரோஸ்கோபிக் அறுவை சிகிச்சைகளின் நன்மைகள் என்ன?",
    answer:
      "Our 3D laparoscopic keyhole procedures require only tiny 3–5 mm pinhole incisions. This translates to minimal blood loss, minimal postoperative discomfort, virtually scarless healing, and rapid recovery. Most patients with uterine fibroids, ovarian cysts, or endometriosis walk within 6–8 hours and return to routine activities in 4–7 days.",
    answerTa:
      "எங்களின் 3D லேப்ராஸ்கோபிக் நுண்துளை அறுவை சிகிச்சைக்கு வெறும் 3–5 மி.மீ அளவிலான சிறிய துளை மட்டுமே போதுமானது. இதனால் மிகக் குறைந்த இரத்த இழப்பு, அறுவை சிகிச்சைக்குப் பின் குறைவான வலி, தழும்புகள் இல்லாத குணமடைதல் மற்றும் விரைவான இயல்பு நிலை திரும்புதல் ஆகியவை சாத்தியமாகின்றன. கருப்பை கட்டிகள் (Fibroids), சினைப்பை நீர்க்கட்டிகள் (Cysts) அல்லது எண்டோமெட்ரியோசிஸ் சிகிச்சை பெறும் பெரும்பாலான நோயாளிகள் 6–8 மணி நேரத்திற்குள் நடக்கத் தொடங்கி, 4–7 நாட்களில் தங்களின் அன்றாட பணிகளுக்குத் திரும்ப முடிகிறது.",
  },
  {
    id: 5,
    category: "fertility",
    categoryLabel: "Fertility & IVF",
    question: "When should a couple seek help from a fertility specialist?",
    questionTa: "தம்பதியினர் எப்போது கருத்தரிப்பு மருத்துவ நிபுணரை அணுக வேண்டும்?",
    answer:
      "We recommend consulting a fertility specialist if you are under 35 and have been trying to conceive without success for 12 months, or over 35 and trying for 6 months. Couples with irregular periods, known PCOS, blocked fallopian tubes, previous miscarriages, or male factor concerns should seek an evaluation earlier.",
    answerTa:
      "35 வயதிற்குட்பட்ட தம்பதியினர் 12 மாதங்களாக கருத்தரிக்க முயற்சித்தும் பலனளிக்கவில்லை என்றாலோ, அல்லது 35 வயதிற்கு மேற்பட்டவர்கள் 6 மாதங்கள் முயற்சித்தும் கருத்தரிக்கவில்லை என்றாலோ மருத்துவரை அணுகுவது நல்லது. ஒழுங்கற்ற மாதவிடாய், PCOS நீர்க்கட்டிகள், கருமுழைக் குழாய் அடைப்பு (Fallopian tube block), முந்தைய கருச்சிதைவுகள் அல்லது விந்தணு சார்ந்த குறைபாடுகள் உள்ள தம்பதியினர் உடனடியாக முன்கூட்டியே பரிசோதனை செய்துகொள்வது பரிந்துரைக்கப்படுகிறது.",
  },
  {
    id: 6,
    category: "billing",
    categoryLabel: "Insurance & Billing",
    question: "Do you offer cashless health insurance and EMI payment options?",
    questionTa: "ரொக்கமில்லா மருத்துவக் காப்பீடு (Cashless Insurance) மற்றும் EMI தவணை கட்டண வசதிகள் உள்ளதா?",
    answer:
      "Yes. Meenakshi Hospital is empaneled with all major health insurance providers, TPAs, and corporate policies for eligible surgical, gynaecological, and maternity admissions. For fertility protocols, our administrative desk offers transparent milestone-based payments and easy zero-interest EMI financing options.",
    answerTa:
      "ஆம். மீனாட்சி மருத்துவமனை அனைத்து முன்னணி மருத்துவக் காப்பீட்டு நிறுவனங்கள் (TPA) மற்றும் கார்ப்பரேட் பாலிசிகளுடன் தகுதியான அறுவை சிகிச்சை, மகளிர் நலம் மற்றும் மகப்பேறு சேர்க்கைகளுக்கு ரொக்கமில்லா (Cashless) வசதியை வழங்குகிறது. கருத்தரிப்பு சிகிச்சைகளுக்கு, எங்களின் நிர்வாகப் பிரிவு வெளிப்படையான கட்டண முறையையும் மற்றும் வட்டி இல்லா எளிய தவணை (Zero-interest EMI) வசதிகளையும் வழங்குகிறது.",
  },
  {
    id: 7,
    category: "maternity",
    categoryLabel: "Maternity Care",
    question: "How are high-risk pregnancies managed at Meenakshi Hospital?",
    questionTa: "மீனாட்சி மருத்துவமனையில் அதிக ஆபத்துள்ள கர்ப்பங்கள் (High-Risk Pregnancies) எவ்வாறு கையாளப்படுகின்றன?",
    answer:
      "High-risk pregnancies receive dedicated maternal-fetal medicine monitoring, targeted anomaly Doppler scans, nutritional management for gestational diabetes/hypertension, round-the-clock obstetrician availability, and immediate access to our Level-III NICU and adult intensive care backup.",
    answerTa:
      "அதிக ஆபத்துள்ள கர்ப்பிணிப் பெண்களுக்கு சிறப்பு தாய்-சேய் மருத்துவக் கண்காணிப்பு (Maternal-Fetal Medicine), துல்லியமான டாப்ளர் ஸ்கேன் (Doppler Scans), கர்ப்பகால சர்க்கரை நோய் மற்றும் உயர் இரத்த அழுத்தத்திற்கான ஊட்டச்சத்து வழிகாட்டுதல், 24 மணி நேர மகப்பேறு மருத்துவர் கண்காணிப்பு மற்றும் உடனடி நிலை-III NICU மற்றும் பெரியவர்களுக்கான தீவிர சிகிச்சைப் பிரிவு (ICU) பாதுகாப்பு ஆகியவை வழங்கப்படுகின்றன.",
  },
  {
    id: 8,
    category: "billing",
    categoryLabel: "Appointments & Help",
    question: "How can I book an initial consultation or second opinion?",
    questionTa: "ஆரம்பக்கட்ட மருத்துவ ஆலோசனை அல்லது இரண்டாவது மருத்துவக் கருத்தை (Second Opinion) நான் எவ்வாறு முன்பதிவு செய்யலாம்?",
    answer:
      "You can book directly via our online appointment form, call our 24/7 patient helpline at +91 4342 260000, or send us an inquiry via WhatsApp. For couples living in other districts or abroad, remote video tele-consultations with our senior consultants are also readily available.",
    answerTa:
      "எங்கள் இணையதள முன்பதிவு படிவம் மூலம் நேரடியாகவோ, எங்களின் 24/7 நோயாளி உதவி எண் +91 4342 260000-ஐ அழைத்தோ அல்லது வாட்ஸ்அப் (WhatsApp) மூலமாகவோ நீங்கள் முன்பதிவு செய்யலாம். பிற மாவட்டங்கள் அல்லது வெளிநாடுகளில் வசிக்கும் தம்பதியினருக்கு, எங்கள் மூத்த நிபுணர்களுடன் ஆன்லைன் வீடியோ ஆலோசனை (Video Tele-consultation) வசதியும் உள்ளது.",
  },
];

export default function Faq() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq">
      {/* Background Subtle Patterns */}
      <div className="faq-bg-blob-left" aria-hidden="true"></div>
      <div className="faq-bg-blob-right" aria-hidden="true"></div>

      <div className="auto-container">
        {/* Section Heading */}
        <div className="faq-header text-center">
          <div className="faq-tag-wrap">
            <span className="faq-eyebrow">
              <i className="fas fa-question-circle mr-2 text-teal"></i>
              Got Questions? We Have Answers
            </span>
          </div>

          <h2 className="faq-main-title">
            Frequently Asked <span className="text-teal">Questions</span>
          </h2>
          <p className="faq-sub-text">
            Get clear, transparent, and medically verified answers to common questions
            about our IVF success rates, maternity packages, keyhole procedures, and patient care.
          </p>


        </div>

        {/* Main 2-Column Layout: Left Help Card + Right Accordions */}
        <div className="faq-content-grid">
          {/* Left Support Card */}
          <div className="faq-support-sidebar">
            <div className="faq-support-card">
              <div className="faq-card-pattern" aria-hidden="true"></div>
              
              <div className="faq-card-icon-wrap">
                <i className="fas fa-headset"></i>
              </div>

              <h3 className="faq-card-title">Still have questions?</h3>
              <p className="faq-card-desc">
                Can&apos;t find the answer you&apos;re looking for? Our dedicated patient counseling
                desk is available 24/7 to guide you with complete empathy and confidentiality.
              </p>

              <div className="faq-card-contacts">
                <a href="tel:+914342260000" className="faq-contact-item">
                  <div className="faq-contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <span className="faq-contact-label">Call 24/7 Helpline</span>
                    <strong className="faq-contact-val">+91 4342 260000</strong>
                  </div>
                </a>

                <a
                  href="https://wa.me/919442560000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="faq-contact-item"
                >
                  <div className="faq-contact-icon whatsapp">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <span className="faq-contact-label">WhatsApp Consultation</span>
                    <strong className="faq-contact-val">+91 94425 60000</strong>
                  </div>
                </a>
              </div>

              <div className="faq-card-action">
                <Link href="/appointment" className="faq-action-btn">
                  <span>Book an Appointment</span>
                  <i className="fas fa-calendar-check ml-2"></i>
                </Link>
              </div>

              <div className="faq-badge-strip">
                <div className="faq-mini-stat">
                  <i className="fas fa-shield-alt text-teal"></i>
                  <span>100% Confidential</span>
                </div>
                <div className="faq-mini-stat">
                  <i className="fas fa-clock text-green"></i>
                  <span>Fast Response</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="faq-accordion-list">
            {faqsData.map((faq, index) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-q-left">
                      <span className="faq-num">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="faq-q-text-wrap">
                        <span className="faq-q-text">{faq.question}</span>
                        <span className="faq-q-text-ta">{faq.questionTa}</span>
                      </div>
                    </div>

                    <div className="faq-toggle-icon">
                      <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-wrap">
                      <div className="faq-answer-inner">
                        <p className="faq-a-en">{faq.answer}</p>
                        <p className="faq-a-ta">{faq.answerTa}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        .faq-section {
          position: relative;
          background: #ffffff;
          padding: 95px 0 100px 0;
          overflow: hidden;
          font-family: var(--text-font);
        }

        .faq-bg-blob-left {
          position: absolute;
          top: -100px;
          left: -120px;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 152, 144, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .faq-bg-blob-right {
          position: absolute;
          bottom: -80px;
          right: -100px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(116, 161, 53, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Header */
        .faq-header {
          max-width: 820px;
          margin: 0 auto 55px auto;
          position: relative;
          z-index: 2;
        }

        .faq-tag-wrap {
          margin-bottom: 14px;
        }

        .faq-eyebrow {
          display: inline-flex;
          align-items: center;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #009890;
          background: rgba(0, 152, 144, 0.09);
          padding: 6px 18px;
          border-radius: 30px;
          border: 1px solid rgba(0, 152, 144, 0.18);
        }

        .text-teal {
          color: #009890;
        }

        .text-green {
          color: #74a135;
        }

        .faq-main-title {
          font-family: var(--title-font);
          font-size: 27px;
          font-weight: 700;
          line-height: 1.34;
          color: #1a252c;
          margin-bottom: 14px;
        }

        .faq-sub-text {
          font-size: 15.5px;
          line-height: 1.7;
          color: #5a6872;
          margin: 0 auto;
          max-width: 720px;
        }

        /* Main Content Grid */
        .faq-content-grid {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 36px;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }

        /* Support Sidebar Card */
        .faq-support-sidebar {
          position: sticky;
          top: 100px;
        }

        .faq-support-card {
          background: linear-gradient(145deg, #0c3e3a 0%, #17524c 100%);
          color: #ffffff;
          border-radius: 20px;
          padding: 36px 30px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(12, 62, 58, 0.15);
        }

        .faq-card-pattern {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(116, 161, 53, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .faq-card-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #74a135;
          margin-bottom: 22px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .faq-card-title {
          font-family: var(--title-font);
          font-size: 23px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .faq-card-desc {
          color: #b5d5d0;
          font-size: 14px;
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .faq-card-contacts {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .faq-contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 12px 16px;
          border-radius: 12px;
          text-decoration: none;
          color: #ffffff;
          transition: all 0.25s ease;
        }

        .faq-contact-item:hover {
          background: rgba(255, 255, 255, 0.16);
          transform: translateY(-2px);
          color: #ffffff;
        }

        .faq-contact-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #009890;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: #ffffff;
          flex-shrink: 0;
        }

        .faq-contact-icon.whatsapp {
          background: #25d366;
        }

        .faq-contact-label {
          display: block;
          font-size: 11.5px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #a0c7c1;
        }

        .faq-contact-val {
          display: block;
          font-size: 14.5px;
          font-weight: 700;
          color: #ffffff;
        }

        .faq-action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #009890;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          padding: 13px 20px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 6px 16px rgba(0, 152, 144, 0.3);
        }

        .faq-action-btn:hover {
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(116, 161, 53, 0.4);
        }

        .faq-badge-strip {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .faq-mini-stat {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #c7deda;
        }

        /* Right Accordion List */
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: #ffffff;
          border: 1px solid #e1ebe7;
          border-radius: 14px;
          overflow: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
        }

        .faq-item:hover {
          border-color: rgba(0, 152, 144, 0.35);
          box-shadow: 0 8px 22px rgba(0, 152, 144, 0.08);
        }

        .faq-item-open {
          border-color: #009890;
          box-shadow: 0 10px 26px rgba(0, 152, 144, 0.12);
          background: #fcfffe;
        }

        .faq-question-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 16px;
          transition: background 0.2s ease;
        }

        .faq-q-left {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          flex: 1;
        }

        .faq-num {
          font-size: 14px;
          font-weight: 800;
          color: #009890;
          background: rgba(0, 152, 144, 0.1);
          width: 34px;
          height: 34px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .faq-item-open .faq-num {
          background: #009890;
          color: #ffffff;
        }

        .faq-q-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .faq-q-text {
          font-size: 16.5px;
          font-weight: 700;
          color: #1a252c;
          line-height: 1.4;
          transition: color 0.2s ease;
        }

        .faq-question-btn:hover .faq-q-text,
        .faq-item-open .faq-q-text {
          color: #009890;
        }

        .faq-q-text-ta {
          font-size: 14.5px;
          font-weight: 600;
          color: #556b69;
          line-height: 1.5;
          letter-spacing: 0.1px;
          transition: color 0.2s ease;
        }

        .faq-question-btn:hover .faq-q-text-ta,
        .faq-item-open .faq-q-text-ta {
          color: #007670;
        }

        .faq-toggle-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f7f5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4b5a61;
          font-size: 13px;
          flex-shrink: 0;
          transition: all 0.25s ease;
          margin-top: 2px;
        }

        .faq-item-open .faq-toggle-icon {
          background: #009890;
          color: #ffffff;
          transform: rotate(180deg);
        }

        .faq-answer-wrap {
          border-top: 1px solid #edf4f1;
          padding: 20px 24px 24px 24px;
          background: #ffffff;
          animation: faqFadeIn 0.3s ease;
        }

        @keyframes faqFadeIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-answer-inner {
          padding-left: 50px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-answer-inner p {
          font-size: 14.8px;
          line-height: 1.75;
          color: #4b5b63;
          margin: 0;
        }

        .faq-answer-inner p.faq-a-en {
          color: #3b4b53;
        }

        .faq-answer-inner p.faq-a-ta {
          font-size: 14.2px;
          line-height: 1.8;
          color: #233e3b;
          background: #f6faf9;
          padding: 12px 18px;
          border-radius: 8px;
          border-left: 3px solid #009890;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1080px) {
          .faq-content-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .faq-support-sidebar {
            position: static;
          }

          .faq-support-card {
            max-width: 580px;
            margin: 0 auto;
          }
        }

        @media (max-width: 767px) {
          .faq-section {
            padding: 65px 0 75px 0;
          }

          .faq-main-title {
            font-size: 28px;
          }

          .faq-question-btn {
            padding: 16px 18px;
          }

          .faq-q-text {
            font-size: 15px;
          }

          .faq-q-text-ta {
            font-size: 13.5px;
          }

          .faq-answer-wrap {
            padding: 16px 18px 20px 18px;
          }

          .faq-answer-inner {
            padding-left: 0;
            gap: 10px;
          }

          .faq-answer-inner p.faq-a-en {
            font-size: 14px;
          }

          .faq-answer-inner p.faq-a-ta {
            font-size: 13.5px;
            padding: 10px 14px;
          }
        }
      `}</style>
    </section>
  );
}
