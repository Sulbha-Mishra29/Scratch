import React from "react";
import Icon from "./Icon";
import * as dis from "./functions";

export default function Sidebar(props) {
  const handleDrag = (e) => {
    e.dataTransfer.setData("id", e.target.id);
    //console.log("---------",e.target);
  };
  const styles = {
    textField: {
      width: 20,
      margin: "0 5px",
      color: "black",
      textAlign: "center",
      borderRadius: "20%",
    },
    heading: {
      font: "normal normal normal 40px/48px Roboto",
      color: "#39495E",
      padding: 20,
    },
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 ">
      <div className="font-bold" style={styles.heading} ref={props.motionRef}>
        {" "}
        Motion{" "}
      </div>
      <div
        id="6"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Move <input type="text" value="10" style={styles.textField} />
        steps
      </div>
      <div
        id="7"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        <input type="text" value="15" style={styles.textField} />
      </div>
      <div
        id="8"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        <input type="text" value="15" style={styles.textField} /> degrees
      </div>
      <div
        id="9"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Go to random position"}
      </div>
      <div
        id="10"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Go to x:
        <input type="text" value="80" style={styles.textField} /> y:
        <input type="text" value="20" style={styles.textField} />
      </div>

      <div
        id="15"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Change x by <input type="text" value="10" style={styles.textField} />
      </div>
      <div
        id="16"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Set x to <input type="text" value="80" style={styles.textField} />
      </div>
      <div
        id="17"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Change y by <input type="text" value="10" style={styles.textField} />
      </div>
      <div
        id="18"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Set y to <input type="text" value="0" style={styles.textField} />
      </div>
      <div
        id="19"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        If on edge, bounce
      </div>

      <div className="font-bold" style={styles.heading} ref={props.eventsRef}>
        {" "}
        Events{" "}
      </div>
      <div
        id="1"
        draggable
        className="flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) => handleDrag(e)}
        style={{backgroundColor:"yellow"}}
        //function={() => console.log("What")}
      >
        When
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        clicked
      </div>
      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        id="2"
        draggable
        onDragStart={(e) => handleDrag(e)}
        style={{backgroundColor:"yellow"}}
      >
        {"When space key pressed"}
      </div>
      <div
        id="3"
        draggable
        style={{backgroundColor:"yellow"}}
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"When this sprite clicked"}
      </div>
      <div
        id="4"
        draggable
        style={{backgroundColor:"yellow"}}
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"When I receive message1"}
      </div>
      <div
        id="5"
        draggable
        style={{backgroundColor:"yellow"}}
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Broadcast message"}
      </div>
      <div className="font-bold" style={styles.heading} ref={props.looksRef}>
        {" "}
        Looks{" "}
      </div>
      <div
        id="21"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Say Hello for <input type="text" value="2" style={styles.textField} />{" "}
        seconds
      </div>
      <div
        id="22"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Say Hello
      </div>
      <div
        id="23"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Think Hmm... for{" "}
        <input type="text" value="2" style={styles.textField} />
        seconds
      </div>
      <div
        id="24"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Think Hmmm..
      </div>
      <div
        id="25"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Change size by{" "}
        <input type="text" value="1.5" style={styles.textField} />
      </div>
      <div
        id="26"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Set Size to <input type="text" value="100" style={styles.textField} />%
      </div>
      <div className="font-bold" style={styles.heading} ref={props.controlsRef}>
        {" "}
        Controls{" "}
      </div>
      <div
        id="27"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Wait <input type="text" value="1" style={styles.textField} /> seconds
      </div>
      <div
        id="28"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Repeat <input type="text" value="10" style={styles.textField} />
      </div>
      <div
        id="29"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Forever
      </div>
      <div
        id="30"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        If <input type="text" value="10" style={styles.textField} /> then
      </div>

      <div
        id="34"
        draggable
        onDragStart={(e) => handleDrag(e)}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        Reset All
      </div>
    </div>
  );
}
