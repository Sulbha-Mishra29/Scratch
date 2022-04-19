const initialValue = {
  leftDist: 0,
  topDist: 0,
  rotate: 0,
  x: 0,
  y: 0,
  bounce: false,
  showHello: false,
  stopHello: 0,
  showHmm: false,
  stopHmm: 0,
  scaleSize: 1,
  spacePress: false,
  array: "",
};

const SpriteReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "MoveRight":
      return {
        ...state,
        bounce: false,
        leftDist: state.leftDist + parseInt(action.data),
      };
    case "MoveDown":
      return {
        ...state,
        topDist: state.topDist + 20,
      };
    case "RotateLeft":
      return {
        ...state,
        rotate: state.rotate - parseInt(action.data),
      };
    case "RotateRight":
      return {
        ...state,
        rotate: state.rotate + parseInt(action.data),
      };
    case "RandomPosition":
      return {
        ...state,
        bounce: false,
        leftDist: action.data.left,
        topDist: action.data.top,
      };
    case "SetX":
      return {
        ...state,
        bounce: false,
        x: parseInt(action.data),
        leftDist: 0,
      };
    case "SetY":
      return {
        ...state,
        bounce: false,
        y: parseInt(action.data),
        topDist: 0,
      };
    case "SetXY":
      return {
        ...state,
        bounce: false,
        x: parseInt(action.data.first),
        y: parseInt(action.data.second),
        topDist: 0,
        leftDist: 0,
      };
    case "ChangeX":
      return {
        ...state,
        bounce: false,
        leftDist: state.leftDist + parseInt(action.data),
      };
    case "ChangeY":
      return {
        ...state,
        bounce: false,
        topDist: state.topDist + parseInt(action.data),
      };
    case "CheckEdge":
      return {
        ...state,
        bounce: true,
      };
    case "HelloTime":
      return {
        ...state,
        showHello: true,
        stopHello: action.data,
      };
    case "Hello":
      return {
        ...state,
        showHello: true,
        stopHello: 10000,
      };
    case "StopHello":
      return {
        ...state,
        showHello: false,
        stopHello: 0,
      };
    case "HmmTime":
      return {
        ...state,
        showHmm: true,
        stopHmm: parseInt(action.data),
      };
    case "Hmm":
      return {
        ...state,
        showHmm: true,
        stopHmm: 10000,
      };
    case "StopHmm":
      return {
        ...state,
        showHmm: false,
        stopHmm: 0,
      };
    case "ScaleSize":
      return {
        ...state,
        scaleSize: state.scaleSize + parseInt(action.data),
      };
    case "SetScaleSize":
      return {
        ...state,
        scaleSize: parseInt(action.data),
      };
    case "ResetAll":
      return {
        ...state,
        leftDist: 0,
        topDist: 0,
        rotate: 0,
        x: 0,
        y: 0,
        bounce: false,
        showHello: false,
        stopHello: 0,
        showHmm: false,
        stopHmm: 0,
        scaleSize: 1,
      };
    case "SpacePress":
      return {
        ...state,
        spacePress: true,
      };
    case "SpaceFalse":
      return {
        ...state,
        spacePress: false,
      };
    case "ResetEverything":
      return {
        leftDist: 0,
        topDist: 0,
        rotate: 0,
        x: 0,
        y: 0,
        bounce: false,
        showHello: false,
        stopHello: 0,
        showHmm: false,
        stopHmm: 0,
        scaleSize: 1,
        array: "Empty",
      };
    case "ArrayAllow":
      return {
        ...state,
        array: "",
      };
    default:
      return state;
  }
};
export default SpriteReducer;
