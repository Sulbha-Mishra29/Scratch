import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "./Icon";
import * as values from "../actions/mainActions";

const handleDragStart = (e) => {
  e.dataTransfer.setData("id", e.target.id);
  console.log(e.target);
};

const styles = {
  textField: {
    width: 20,
    margin: "0 5px",
    color: "black",
    textAlign: "center",
    borderRadius: "20%",
  },
};

export const utility1 = () => {
  return (
    <div
      id="1"
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      onDragStart={(e) => handleDragStart(e)}
      function={() => console.log("What")}
    >
      When
      <Icon name="flag" size={15} className="text-green-600 mx-2" />
      clicked
    </div>
  );
};

export const utility2 = () => {
  return (
    <div
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      id="2"
      onDragStart={(e) => handleDragStart(e)}
    >
      {"When space key pressed"}
    </div>
  );
};

export const utility3 = () => {
  return (
    <div
      id="3"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      onDoubleClick={() => console.log(3)}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      {"When this sprite clicked"}
    </div>
  );
};

export const utility4 = () => {
  return (
    <div
      id="4"
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      {"When I receive message1"}
    </div>
  );
};

export const utility5 = () => {
  return (
    <div
      id="5"
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      {"Broadcast message"}
    </div>
  );
};

export const utility6 = (value) => {
  const dispatch = useDispatch();

  return (
    <div
      id="6"
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Move{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(values.value6Action(e.target.value))}
        style={styles.textField}
      />
      steps
    </div>
  );
};

export const utility7 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="7"
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      {"Turn "}
      <Icon name="undo" size={15} className="text-white mx-2" />
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(values.value7Action(e.target.value))}
        style={styles.textField}
      />
    </div>
  );
};

export const utility8 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="8"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      {"Turn "}
      <Icon name="redo" size={15} className="text-white mx-2" />
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(values.value8Action(e.target.value))}
        style={styles.textField}
      />{" "}
      degrees
    </div>
  );
};

export const utility9 = () => {
  return (
    <div
      id="9"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      {"Go to random position"}
    </div>
  );
};

export const utility10 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="10"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Go to x:
      <input
        type="text"
        style={styles.textField}
        value={value}
        onChange={(e) => dispatch(values.value10FirstAction(e.target.value))}
      />{" "}
      y:
      <input
        type="text"
        style={styles.textField}
        value={value}
        onChange={(e) => dispatch(values.value10SecondAction(e.target.value))}
      />
    </div>
  );
};

export const utility11 = () => {
  return (
    <div
      id="11"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Glid <input type="text" value="1" style={styles.textField} /> secs to
      random position
    </div>
  );
};

export const utility12 = () => {
  return (
    <div
      id="12"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Glid <input type="text" value="1" style={styles.textField} /> secs to x:
      <input type="text" value="2" style={styles.textField} /> y:
      <input type="text" value="2" style={styles.textField} />
    </div>
  );
};
export const utility13 = () => {
  return (
    <div
      id="13"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      {"Point in direction"}
    </div>
  );
};
export const utility14 = () => {
  return (
    <div
      id="14"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      {"Point towards mouse-pointer"}
    </div>
  );
};
export const utility15 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="15"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Change x by{" "}
      <input
        type="text"
        style={styles.textField}
        value={value}
        onChange={(e) => dispatch(values.value15Action(e.target.value))}
      />
    </div>
  );
};
export const utility16 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="16"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Set x to{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(values.value16Action(e.target.value))}
        style={styles.textField}
      />
    </div>
  );
};
export const utility17 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="17"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Change y by{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(values.value17Action(e.target.value))}
        style={styles.textField}
      />
    </div>
  );
};
export const utility18 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="18"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Set y to{" "}
      <input
        type="text"
        style={styles.textField}
        value={value}
        onChange={(e) => dispatch(values.value18Action(e.target.value))}
      />
    </div>
  );
};
export const utility19 = () => {
  return (
    <div
      id="19"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      If on edge, bounce
    </div>
  );
};
export const utility20 = () => {
  return (
    <div
      id="20"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Set rotation style left-right
    </div>
  );
};
export const utility21 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="21"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Say Hello for{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(values.value21Action(e.target.value))}
        style={styles.textField}
      />{" "}
      seconds
    </div>
  );
};
export const utility22 = () => {
  return (
    <div
      id="22"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Say Hello
    </div>
  );
};
export const utility23 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="23"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Think Hmm... for{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(values.value23Action(e.target.value))}
        style={styles.textField}
      />
      seconds
    </div>
  );
};
export const utility24 = () => {
  return (
    <div
      id="24"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Think Hmmm..
    </div>
  );
};
export const utility25 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="25"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Change size by{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(values.value25Action(e.target.value))}
        style={styles.textField}
      />
    </div>
  );
};
export const utility26 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="26"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Set Size to{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(values.value26Action(e.target.value))}
        style={styles.textField}
      />
      %
    </div>
  );
};
export const utility27 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="27"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Wait{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(values.value27Action(e.target.value))}
        style={styles.textField}
      />{" "}
      seconds
    </div>
  );
};
export const utility28 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="28"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Repeat{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(values.value28Action(e.target.value))}
        style={styles.textField}
      />
    </div>
  );
};
export const utility29 = () => {
  return (
    <div
      id="29"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Forever
    </div>
  );
};
export const utility30 = (value) => {
  const dispatch = useDispatch();
  return (
    <div
      id="30"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      If{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(values.value30Action(e.target.value))}
        style={styles.textField}
      />{" "}
      then
    </div>
  );
};
export const utility31 = () => {
  return (
    <div
      id="31"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      If this then else
    </div>
  );
};
export const utility32 = () => {
  return (
    <div
      id="32"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Wait until _
    </div>
  );
};
export const utility33 = () => {
  return (
    <div
      id="33"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Repeat until
    </div>
  );
};
export const utility34 = () => {
  return (
    <div
      id="34"
      //draggable
      onDragStart={(e) => handleDragStart(e)}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      Reset All
    </div>
  );
};
