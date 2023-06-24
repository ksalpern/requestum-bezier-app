import React from "react";
import "./PopupInfo.scss";

const PopupInfo = () => {
  return <div className="popupInfo">
    <h1>Bezier curve app</h1>
    <p>The Bezier Curve app allows users to create and manipulate Bezier curves on a canvas.Users can click and drag to add control points that define the shape of the curve. The app supports multiple curves, and each curve can have multiple control points.</p>
    <ul>
      <li><h3>Features:</h3></li>
      <li>Generate Bezier Curves: Press Ctrl to create new curves instantly.</li>
      <li>Add Control Points: Use Shift + click to position control points precisely.</li>
      <li>Select and Move Points: Easily refine curves by selecting and moving control points.</li>
      <li>Delete Points: Remove unwanted points with a simple keystroke.</li>
      </ul>
  </div>;
};

export default PopupInfo;
