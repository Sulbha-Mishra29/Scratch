export const action2 = () => ({
  type: "SpacePress",
});
export const action6 = (data) => ({
  type: "MoveRight",
  data: data,
});
export const action7 = (data) => ({
  type: "RotateLeft",
  data: data,
});
export const action8 = (data) => ({
  type: "RotateRight",
  data: data,
});
export const action9 = () => ({
  type: "RandomPosition",
  data: {
    left: Math.floor(Math.random() * 501),
    top: Math.floor(Math.random() * 701),
  },
});
export const action10 = (data) => ({
  type: "SetXY",
  data: data,
});
export const action15 = (data) => ({
  type: "ChangeX",
  data: data,
});
export const action16 = (data) => ({
  type: "SetX",
  data: data,
});
export const action17 = (data) => ({
  type: "ChangeY",
  data: data,
});
export const action18 = (data) => ({
  type: "SetY",
  data: data,
});
export const action19 = () => ({
  type: "CheckEdge",
});

export const action21 = (data) => ({
  type: "HelloTime",
  data: data * 1000,
});
export const action22 = () => ({
  type: "Hello",
});
export const action23 = (data) => ({
  type: "HmmTime",
  data: data * 1000,
});
export const action24 = () => ({
  type: "Hmm",
});
export const action25 = (data) => ({
  type: "ScaleSize",
  data: data,
});

export const action26 = (data) => ({
  type: "SetScaleSize",
  data: data / 100,
});
export const action27 = () => ({
  type: "Wait",
});

export const action28 = () => ({
  type: "Repeat",
});
export const action29 = () => ({
  type: "Forever",
});
export const action30 = () => ({
  type: "IfElse",
});
export const action34 = () => ({
  type: "ResetAll",
});
export const resetEverything = () => ({
  type: "ResetEverything",
});
export const arrayAllow = () => ({
  type: "ArrayAllow",
});
