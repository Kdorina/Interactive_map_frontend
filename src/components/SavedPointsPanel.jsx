export default function SavedPointsPanel({ points, onSelectPoint }) {
  return (
    <div className="saved-panel">
      <div className="panel-header">
        <div className="search-box">
          <input type="text" placeholder="Keresés..." />
          <span>🔍</span>
        </div>

        <button className="filter-btn">⌯</button>
      </div>

      <div className="points-list">
        {points.length === 0 && (
          <p className="empty-message">Még nincs elmentett pont.</p>
        )}

        {points.map((point) => (
          <div className="point-card" key={point.id} onClick={() => onSelectPoint(point)}>
            <div className="point-image">
              {point.imagePreview ? (
                <img src={point.imagePreview} alt={point.title} />
              ) : (
                <div className="placeholder"></div>
              )}

              <span className="image-count">{point.imagePreview ? 1 : 0}</span>
            </div>

            <div className="point-info">
              <h3>{point.title}</h3>

              <div className="point-location">
                <span>📍 {point.location || point.title}</span>
                {point.category && <span className="tag">{point.category}</span>}
              </div>

              {point.description && <p>{point.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}