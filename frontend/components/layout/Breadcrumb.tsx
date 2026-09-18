import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  breadcrumbTitle: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbTitle }) => {
  return (

    <section className="page-title p_relative centred">
      <div
        className="bg-pattern-layer"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 50% -20%, rgba(0, 152, 144, 0.12) 0%, rgba(240, 248, 247, 0.7) 60%, #e8f5f2 100%)",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(0, 152, 144, 0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.75,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div className="auto-container" style={{ position: "relative", zIndex: 2 }}>
        <div className="content-box">
          <h1>{breadcrumbTitle}</h1>
          <ul className="bread-crumb clearfix">
            <li><Link href="/">Home</Link></li>
            <li>{breadcrumbTitle}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
