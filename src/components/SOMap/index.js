import React from 'react'
import './style.css';

export const SOMap = (props) => {
  const { mapWidth, unitSize, mapData, opacity } = props;
  return (
    <div
      className="mapContainer"
    >
      {mapData.map((v, i) => {
        const r = Math.round(v[0]*255);
        const g = Math.round(v[1]*255);
        const b = Math.round(v[2]*255);
        const left = i % mapWidth;
        const top = Math.floor(i / mapWidth)
        return (
          <div
            key={`unit${i}`}
            className="SOMapUnit"
            style={{
              top: `${top * unitSize}px`,
              left: `${left * unitSize}px`,
              width: `${unitSize}px`,
              height: `${unitSize}px`,
              backgroundColor: `rgba(${r},${g},${b},1)`,
              opacity: `${opacity}`,
            }}
          >
          </div>
        )
      })}
    </div>
  )
}

SOMap.propTypes = {
  mapWidth: React.PropTypes.number.isRequired,
  mapHeight: React.PropTypes.number.isRequired,
  mapData: React.PropTypes.array.isRequired,
  unitSize: React.PropTypes.number,
  opacity: React.PropTypes.number,
}

SOMap.defaultProps = {
  unitSize: 10,
  opacity: 0.5,
}
