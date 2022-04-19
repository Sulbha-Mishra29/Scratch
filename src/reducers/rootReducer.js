import { combineReducers } from "redux";
import SpriteReducer from "./SpriteReducer";
import ValueReducer from "./ValueReducer";
import SelectReducer from "./SelectReducer";

const rootReducer = combineReducers({
  sprite: SpriteReducer,
  value: ValueReducer,
  select: SelectReducer,
});

export default rootReducer;
