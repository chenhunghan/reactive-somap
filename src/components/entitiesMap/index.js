import React from 'react'
import './style.css';
import { simpleFindWinner } from '../../lib/findWinnerUnit';

export const EntitiesMap = (props) => {
  const { entities, mapWidth, SOMap, unitSize } = props;
  return (
    <div
      className="mapContainer"
    >
      {entities.map((entity, i) => {
        const r = Math.round(entity[0]*255);
        const g = Math.round(entity[1]*255);
        const b = Math.round(entity[2]*255);
        const coordi = simpleFindWinner(SOMap, mapWidth, entity);
        return (
          <div
            key={`entity${i}`}
            className="entity"
            style={{
              top: `${coordi[1] * unitSize}px`,
              left: `${coordi[0] * unitSize}px`,
              width: `${unitSize}px`,
              height: `${unitSize}px`,
              backgroundColor: `rgba(${r},${g},${b},1)`,
            }}
          >
          </div>
        )
      })}
    </div>
  )
}

EntitiesMap.propTypes = {
  mapWidth: React.PropTypes.number.isRequired,
  mapHeight: React.PropTypes.number.isRequired,
  unitSize: React.PropTypes.number,
  SOMap: React.PropTypes.array.isRequired,
  entities: React.PropTypes.array.isRequired,
}

EntitiesMap.defaultProps = {
  unitSize: 10,
}
