import { useState } from "react"
import Map from "./components/Map"
import SavedPointsPanel from "./components/SavedPointsPanel"

function App() {
  const [points, setPoints] = useState([])
  const [selectedPoint, setSelectedPoint] = useState(null)

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SavedPointsPanel
        points={points}
        onSelectPoint={setSelectedPoint}
      />

      <Map
        points={points}
        setPoints={setPoints}
        selectedPoint={selectedPoint}
      />
    </div>
  )
}

export default App