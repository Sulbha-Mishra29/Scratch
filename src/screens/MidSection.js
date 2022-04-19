import React from "react";
import Icon from "./Icon";
import * as display from "./functions";
import * as action from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function MidPart() {
  const [element, setElement] = React.useState([]);
  const value2 = useSelector((state) => state.value.value2);
  const value6 = useSelector((state) => state.value.value6);
  const value7 = useSelector((state) => state.value.value7);
  const value8 = useSelector((state) => state.value.value8);
  const value10 = useSelector((state) => state.value.value10);
  const value15 = useSelector((state) => state.value.value15);
  const value16 = useSelector((state) => state.value.value16);
  const value17 = useSelector((state) => state.value.value17);
  const value18 = useSelector((state) => state.value.value18);
  const value21 = useSelector((state) => state.value.value21);
  const value23 = useSelector((state) => state.value.value23);
  const value25 = useSelector((state) => state.value.value25);
  const value26 = useSelector((state) => state.value.value26);
  const value27 = useSelector((state) => state.value.value27);
  const value28 = useSelector((state) => state.value.value28);
  const value30 = useSelector((state) => state.value.value30);

  const spacePress = useSelector((state) => state.sprite.spacePress);
  const array = useSelector((state) => state.sprite.array);
  //var SendValue6 = value6;
  //const left = useSelector((state) => state.sprite.leftDist);

  React.useEffect(() => {
    //console.log("Left side " + left);
    //SendValue6 = value6;
  }, [checkIfGroup, spacePress]);
  React.useEffect(() => {
    if (array === "Empty") {
      setElement([]);
      dispatch(action.arrayAllow());
    }
  }, [array]);

  const handleDeleteStack = (delEl) => {
    setElement(element.filter((el) => el != delEl));
  };
  const checkIfGroup = (id, left, top) => {
    let flag = 0;
    const temperoryElement = [...element];
    for (let i = 0; i < temperoryElement.length; i++) {
      for (let j = 0; j < temperoryElement[i].length; j++) {
        if (
          Math.abs(temperoryElement[i][j].left - left) <= 100 &&
          Math.abs(temperoryElement[i][j].top - top) <= 50
        ) {
          flag = 1;
          temperoryElement[i].push({ id: id, left: left, top: top });
          setElement(temperoryElement);
          break;
        }
      }
      if (flag == 1) {
        break;
      }
    }
    if (flag == 0) {
      setElement([...element, [{ id: id, left: left, top: top }]]);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragStart = (e) => { };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const clientRect = e.currentTarget.getBoundingClientRect();

    const left = e.clientX;
    const top = e.clientY;
    checkIfGroup(e.dataTransfer.getData("id"), left, top);
  };

  const dispatch = useDispatch();

  return (
    <div
      className="flex-1 h-full overflow-auto"
      onDrop={(e) => handleDrop(e)}
      onDragStart={(e) => handleDragStart(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
    >
      {element.map((element) => {
        return (
          <div
            style={{
              position: "absolute",
              left: element[0].left,
              top: element[0].top,
            }}
            onKeyDown={(e) => console.log(e)}
            onDoubleClick={(e) => {
              if (element[0].id == 28) {
                for (let i = 0; i < value28; i++) {
                  element.map((el) => {
                    const newFunc = `action${el.id}`;
                    if (el.id == "9" || el.id == "19" || el.id == "28") {
                      return dispatch(action[newFunc]());
                    } else {
                      const data = eval(`value${el.id}`);
                      return dispatch(action[newFunc](data));
                    }
                  });
                }
              } else if (element[0].id == 27) {
                setTimeout(() => {
                  element.map((el) => {
                    const newFunc = `action${el.id}`;

                    if (
                      el.id == "9" ||
                      el.id == "19" ||
                      el.id == "28" ||
                      el.id == "27"
                    ) {
                      return dispatch(action[newFunc]());
                    } else {
                      const data = eval(`value${el.id}`);
                      return dispatch(action[newFunc](data));
                    }
                  });
                }, value27 * 1000);
              } else if (element[0].id == 29) {
                setInterval(() => {
                  element.map((el) => {
                    const newFunc = `action${el.id}`;

                    if (
                      el.id == "9" ||
                      el.id == "19" ||
                      el.id == "28" ||
                      el.id == "29"
                    ) {
                      return dispatch(action[newFunc]());
                    } else {
                      const data = eval(`value${el.id}`);
                      return dispatch(action[newFunc](data));
                    }
                  });
                }, 500);
              } else if (element[0].id == 30) {
                if (eval(value30)) {
                  element.map((el) => {
                    const newFunc = `action${el.id}`;

                    if (
                      el.id == "9" ||
                      el.id == "19" ||
                      el.id == 22 ||
                      el.id == 24 ||
                      el.id == 30
                    ) {
                      return dispatch(action[newFunc]());
                    } else {
                      const data = eval(`value${el.id}`);
                      return dispatch(action[newFunc](data));
                    }
                  });
                }
              } else {
                element.map((el) => {
                  const newFunc = `action${el.id}`;

                  if (
                    el.id == "9" ||
                    el.id == "19" ||
                    el.id == 22 ||
                    el.id == 24 ||
                    el.id == 30 ||
                    el.id == 34
                  ) {
                    return dispatch(action[newFunc]());
                  } else {
                    const data = eval(`value${el.id}`);
                    return dispatch(action[newFunc](data));
                  }
                });
              }
            }}
          >
            <div
              style={{
                position: "sticky",
                top: 100,
                marginLeft: "95%",
              }}
              onClick={(e) => handleDeleteStack(element)}
            >
              <Icon
                name="minus-circle"
                size={15}
                className="text-white-500 mx-2"
              />
            </div>
            {element.map((el) => {
              const newFunc = `utility${el.id}`;
              return display[newFunc]();
            })}
          </div>
        );
      })}
    </div>
  );
}
