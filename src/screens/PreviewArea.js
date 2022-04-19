import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CatSprite from "./CatSprite";
import FishSprite from "./FishSprite";

export default function PreviewArea() {
  const left = useSelector((state) => state.sprite.leftDist);
  const top = useSelector((state) => state.sprite.topDist);
  const rotate = useSelector((state) => state.sprite.rotate);
  const xAxis = useSelector((state) => state.sprite.x);
  const yAxis = useSelector((state) => state.sprite.y);
  const bounce = useSelector((state) => state.sprite.bounce);
  const showHello = useSelector((state) => state.sprite.showHello);
  const stopHello = useSelector((state) => state.sprite.stopHello);
  const showHmm = useSelector((state) => state.sprite.showHmm);
  const stopHmm = useSelector((state) => state.sprite.stopHmm);
  const scaleSize = useSelector((state) => state.sprite.scaleSize);
  const sprite = useSelector((state) => state.select.sprite);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (showHello) {
      setTimeout(() => dispatch({ type: "StopHello" }), stopHello);
    }
    if (showHmm) {
      setTimeout(() => dispatch({ type: "StopHmm" }), stopHmm);
    }
  }, [left, top, rotate, xAxis, yAxis, showHello, showHmm, scaleSize]);

  const myStyles = {
    height: 100,
    position: "relative",
    left: bounce & (left === 0) ? 100 : xAxis,
    top: bounce & (top === 0) ? 100 : yAxis,
    transform: `rotate(${rotate}deg) translateX(${left}px) translateY(${top}px) scale(${
      scaleSize > 0 ? scaleSize : 1 / (scaleSize * -1)
    })`,
    transformOrigin: "center",
    transition: `all 1s ${
      bounce
        ? ", left 1s cubic-bezier(0.5, -0.5, 0.5, 1.5),top 1s cubic-bezier(0.5, -0.5, 0.5, 1.5)"
        : ""
    }`,
  };
  return (
    <div>
      <div style={myStyles}>
        <div style={{ display: "flex" }}>
          {sprite === 1 ? <CatSprite /> : <FishSprite />}
          {showHello ? (
            <div
              style={{
                top: 0,
                right: 0,
                height: "10%",
                background: "#FFFFFF",
                padding: "10px",
                borderRadius: "45%",
              }}
            >
              Hello
            </div>
          ) : showHmm ? (
            <div
              style={{
                top: 0,
                right: 0,
                height: "10%",
                background: "#FFFFFF",
                padding: "10px",
                borderRadius: "45%",
              }}
            >
              Hmm....
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
