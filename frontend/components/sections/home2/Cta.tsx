import Image from "next/image";
import Link from "next/link";
export default function Cta() {
  return (
        <section className="cta-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="content-box">
                        <h2>Need a Doctor for Check-up? Call for an Emergency Service!</h2>
                        <div className="support-box">
                            <div className="icon-box"><Image src="/assets/images/icons/icon-8.svg" alt="Image" width={34} height={34} priority /></div>
                            <span>Call: <Link href="tel:+919443224499">+91 94432 24499</Link></span>
                        </div>
                    </div>
                    <figure className="image-layer" style={{ borderRadius: "12px", overflow: "hidden" }}>
                        <Image src="/assets/images/service/emergency-ambulance.jpg" alt="Emergency Ambulance" width={576} height={303} style={{ objectFit: "cover", width: "100%", height: "100%" }} priority />
                    </figure>
                </div>
            </div>
        </section>
  );
}
