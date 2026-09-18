export default function GoogleMapSection() {
  return (
    <section className="google-map-section">
      <div className="map-inner">
        <iframe
          src="https://maps.google.com/maps?q=18/61,+Sengodipuram,+Dharmapuri+-+636701,+Tamil+Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed"
          height={570}
          style={{ border: 0, width: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Meenakshi Hospital Dharmapuri Location Map"
        />
      </div>
    </section>
  );
}
