import React from "react";

const SideScroll = (props) => {
  const styles = {
    colorCircle: {
      borderRadius: "50%",
      background: "#FFFFFF",
      width: 25,
      height: 25,
    },
    bigButton: {
      padding: 10,
      borderBottom: "5px solid  #39495E",
      paddingTop: 20,
      width: "100%",
      transition: "background 500ms",
    },
  };
  function handleTitleClick(titleRef) {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        alignItems: "center",
      }}
    >
      <div
        style={{
          ...styles.bigButton,
          background: props.showMotion ? "#E5F0FF" : "none",
        }}
        onClick={() => handleTitleClick(props.motionRef)}
        className="button"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color:"#3b82f6",
          }}
        >
          <div
            style={{
              ...styles.colorCircle,
              background: "#3b82f6",
            }}
          ></div>
          <div>Motion</div>
        </div>
      </div>
      <div
        style={{
          ...styles.bigButton,
          background:
            props.showEvents && !props.showMotion ? "#E5F0FF" : "none",
        }}
        onClick={() => handleTitleClick(props.eventsRef)}
        className="button"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color:"#FFFF00",
          }}
        >
          <div style={{ ...styles.colorCircle, background: "#FFFF00" }}></div>
          <div>Events</div>
        </div>
      </div>
      <div
        style={{
          ...styles.bigButton,
          background: props.showLooks && !props.showEvents ? "#E5F0FF" : "none",
        }}
        onClick={() => handleTitleClick(props.looksRef)}
        className="button"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color:"#8b5cf6",
          }}
        >
          <div style={{ ...styles.colorCircle, background: "#8b5cf6" }}></div>
          <div>Looks</div>
        </div>
      </div>
      <div
        style={{
          ...styles.bigButton,
          background:
            props.showControls && !props.showLooks ? "#E5F0FF" : "none",
        }}
        onClick={() => handleTitleClick(props.controlsRef)}
        className="button"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color:"#fbbf24",
          }}
        >
          <div style={{ ...styles.colorCircle, background: "#fbbf24" }}></div>
          <div>Controls</div>
        </div>
      </div>
    </div>
  );
};
export default SideScroll;
