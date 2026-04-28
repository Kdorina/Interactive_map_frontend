import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function LandingPage({ onStart, onLogin, onRegister }) {
  return (
    <div className="landing-page">
      <div className="landing-navbar">
        <strong>JourneyPins</strong>

        <div className="landing-tabs">
          <button onClick={onRegister}>Regisztráció</button>
          <button onClick={onLogin}>Bejelentkezés</button>
        </div>
      </div>

      <section className="landing-hero">
        <h1>Fedezd fel. Jelöld meg. Oszd meg</h1>
        <p>
          Jelöld meg a helyeket, tölts fel képeket, és oszd meg az élményeidet
          egy interaktív térképen.
        </p>

        <div className="landing-map">
          <MapContainer
            center={[52.3676, 4.9041]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[52.3676, 4.9041]}>
              <Popup>Amsterdam</Popup>
            </Marker>
          </MapContainer>
        </div>

        <button className="start-btn" onClick={onStart}>
          Kezdjük el
        </button>
      </section>
    </div>
  )
}