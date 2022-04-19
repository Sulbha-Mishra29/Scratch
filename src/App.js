import React from "react";
import Sidebar from "./screens/Sidebar";
import SideScroll from "./screens/SideScroll";
import MidPart from "./screens/MidSection";
import PreviewArea from "./screens/PreviewArea";
import Icon from "./screens/Icon";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCat, selectFish } from "./actions/selectActions";
import onScreen from "./common/onScreen";
import { resetEverything } from "./actions/actions";

export default function App() {
  const sprite = useSelector((state) => state.select.sprite);
  const dispatch = useDispatch();
  const looksRef = React.useRef();
  const motionRef = React.useRef();
  const eventsRef = React.useRef();
  const controlsRef = React.useRef();
  const showLooks = onScreen(looksRef);
  const showMotion = onScreen(motionRef);
  const showEvents = onScreen(eventsRef);
  const showControls = onScreen(controlsRef);

  return (
    <div
      className="bg-blue-100 font-sans"
      style={{ height: "100vh", background: "#FFFFFF" }}
    >
      <div
        style={{
          textAlign: "center",
          font: "normal normal normal 40px/48px Roboto",
          color: "#4D97FF",
          padding: 7,
          paddingTop: "-1.5rem",
        }}
      >
        Scratch
      </div>
      <div
        className="h-screen overflow-hidden flex flex-row  "
        style={{ height: "90vh" }}
      >
        <div
          className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2"
          style={{
            height: "90vh",
            background: "#E5F0FF",
            border: "none",
            borderRadius: "2%",
          }}
        >
          <SideScroll
            looksRef={looksRef}
            motionRef={motionRef}
            eventsRef={eventsRef}
            controlsRef={controlsRef}
            showControls={showControls}
            showEvents={showEvents}
            showLooks={showLooks}
            showMotion={showMotion}
          />{" "}
          <Sidebar
            looksRef={looksRef}
            motionRef={motionRef}
            eventsRef={eventsRef}
            controlsRef={controlsRef}
          />
          <MidPart />
        </div>
        <div
          className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2"
          style={{
            height: "90vh",
            background: "#E5F0FF",
            border: "none",
            borderRadius: "2%",
          }}
        >
          <PreviewArea />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 50,
        }}
      >
        <div style={{ display: "flex" }}>
          <button
            style={{
              padding: "13px 8px",
              background: "#4D97FF",
              borderRadius: "50%",
              marginRight: 10,
            }}
            className="iconButton"
            onClick={() => {
              // Reset
              dispatch(resetEverything());
              window.location.reload();
            }}
          >
            <Icon name="sync-alt" size={50} className="text-white mx-2" />
          </button>
          {sprite == 1 ? (
            <button
              style={{
                padding: "13px 8px",
                background: "#4D97FF",
                borderRadius: "50%",
              }}
              className="iconButton"
              onClick={() => {
                dispatch(selectFish());
              }}
            >
              <Icon name="fish" size={50} className="text-white mx-2" />
            </button>
          ) : (
            <button
              style={{
                padding: "13px 8px",
                background: "#4D97FF",
                borderRadius: "50%",
              }}
              className="iconButton"
              onClick={() => {
                dispatch(selectCat());
              }}
            >
              <Icon name="cat" size={50} className="text-white mx-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
