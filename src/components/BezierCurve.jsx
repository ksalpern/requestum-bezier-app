import React, { useState } from 'react';

const BezierCurve = () => {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [controlPoint, setControlPoint] = useState(null);

  const handleImageClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;

    if (!startPoint) {
      setStartPoint({ x: offsetX, y: offsetY });
    } else if (!endPoint) {
      setEndPoint({ x: offsetX, y: offsetY });
    } else {
      setControlPoint({ x: offsetX, y: offsetY });
    }
  };

  const handlePointClick = (point) => (event) => {
    event.stopPropagation();

    const { offsetX, offsetY } = event.nativeEvent;

    if (point === 'start') {
      setStartPoint({ x: offsetX, y: offsetY });
    } else if (point === 'end') {
      setEndPoint({ x: offsetX, y: offsetY });
    } else {
      setControlPoint({ x: offsetX, y: offsetY });
    }
  };

  const renderPoints = () => {
    return (
      <>
        {startPoint && (
          <circle
            cx={startPoint.x}
            cy={startPoint.y}
            r={10}
            fill="red"
            onClick={handlePointClick('start')}
          />
        )}
        {endPoint && (
          <circle
            cx={endPoint.x}
            cy={endPoint.y}
            r={10}
            fill="maroon"
            onClick={handlePointClick('end')}
          />
        )}
        {controlPoint && (
          <circle
            cx={controlPoint.x}
            cy={controlPoint.y}
            r={10}
            fill="green"
            onClick={handlePointClick('control')}
          />
        )}
      </>
    );
  };

  const renderBezierCurve = () => {
    if (startPoint && endPoint && controlPoint) {
      return (
        <path
          d={`M ${startPoint.x} ${startPoint.y} Q ${controlPoint.x} ${controlPoint.y} ${endPoint.x} ${endPoint.y}`}
          fill="none"
          stroke="black"
          strokeWidth={2}
        />
      );
    }
    return null;
  };

  return (
    <svg
      width={800}
      height={600}
      onClick={handleImageClick}
    >
      <image
        xlinkHref="/assets/1.jpg"
        width={800}
        height={600}
      />
      {renderPoints()}
      {renderBezierCurve()}
    </svg>
  );
};

export default BezierCurve;
