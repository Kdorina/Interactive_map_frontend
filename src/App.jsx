import { useState } from "react"
import AuthPage from "./components/AuthPage"
import Map from "./components/Map"
import Sidebar from "./components/Sidebar"
import SavedPointsPanel from "./components/SavedPointsPanel"
import SettingsPanel from "./components/SettingsPanel"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [points, setPoints] = useState([])
  const [selectedPoint, setSelectedPoint] = useState(null)
  const [activePanel, setActivePanel] = useState(null)

  const [user, setUser] = useState(null)

  if (!isAuthenticated) {
    return (
      <AuthPage
        onLogin={(loggedInUser) => {
          setUser(loggedInUser)
          setIsAuthenticated(true)
        }}
      />
    )
  }

  return (
    <div style={{ display: "flex", height: "100vh", position: "relative" }}>
      <Sidebar activePanel={activePanel} setActivePanel={setActivePanel} />

      {activePanel === "home" && (
        <SavedPointsPanel
          points={points}
          selectedPoint={selectedPoint}
          onSelectPoint={setSelectedPoint}
          onBack={() => setSelectedPoint(null)}
        />
      )}

      {activePanel === "settings" && (
        <SettingsPanel user={user} setUser={setUser} />
      )}

      <Map
        points={points}
        setPoints={setPoints}
        selectedPoint={selectedPoint}
      />

      <div
        className="profile-button"
        onClick={() => setActivePanel("settings")}
      >
        {user?.name?.charAt(0).toUpperCase()}
      </div>
    </div>
  )
}

export default App