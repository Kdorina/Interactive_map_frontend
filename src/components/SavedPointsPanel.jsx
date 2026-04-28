import { useState } from "react"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"

export default function SavedPointsPanel({
  points,
  selectedPoint,
  onSelectPoint,
  onBack,
}) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPoints = points.filter((point) => {
    const search = searchTerm.toLowerCase()

    return (
      point.title?.toLowerCase().includes(search) ||
      point.category?.toLowerCase().includes(search) ||
      point.location?.toLowerCase().includes(search) ||
      point.description?.toLowerCase().includes(search)
    )
  })

  // 📄 RÉSZLET NÉZET
  if (selectedPoint) {
    return (
      <div className="saved-panel">
        <button className="back-btn" onClick={onBack}>
          ← Vissza
        </button>

        <div className="detail-images">
          {selectedPoint.imagePreview ? (
            <img src={selectedPoint.imagePreview} alt={selectedPoint.title} />
          ) : (
            <div className="detail-placeholder"></div>
          )}
        </div>

        <h2 className="detail-title">{selectedPoint.title}</h2>

        <div className="detail-location">
          📍 {selectedPoint.location || selectedPoint.title}
        </div>

        {selectedPoint.category && (
          <span className="detail-tag">{selectedPoint.category}</span>
        )}

        {selectedPoint.description && (
          <p className="detail-description">{selectedPoint.description}</p>
        )}
      </div>
    )
  }

  // 📋 LISTA NÉZET
  return (
    <div className="saved-panel">
      <div className="panel-header">
        <TextField
          placeholder="Keresés név vagy tag alapján..."
          variant="outlined"
          size="small"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="src/assets/Search_Magnifying_Glass.png" alt="" />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="points-list">
        {filteredPoints.length === 0 && (
          <p className="empty-message">Nincs találat.</p>
        )}

        {filteredPoints.map((point) => (
          <div
            className="point-card"
            key={point.id}
            onClick={() => onSelectPoint(point)}
          >
            <div className="point-image">
              {point.imagePreview ? (
                <img src={point.imagePreview} alt={point.title} />
              ) : (
                <div className="placeholder"></div>
              )}
            </div>

            <div className="point-info">
              <h3>{point.title}</h3>

              <div className="point-location">
                📍 {point.location || point.title}
              </div>

              {point.category && <span className="tag">{point.category}</span>}

              {point.description && <p>{point.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

   
}