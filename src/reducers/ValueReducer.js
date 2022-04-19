const initialValue = {
  value1: 0,
  value2: false,
  value3: 0,
  value4: 0,
  value5: 0,
  value6: 0,
  value7: 0,
  value8: 0,
  value10: { first: 0, second: 0 },
  value15: 0,
  value16: 0,
  value17: 0,
  value18: 0,
  value21: 0,
  value23: 0,
  value25: 0,
  value26: 0,
  value27: 1000,
  value28: 1,
  value30: "",
};

const ValueReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "value6":
      return {
        ...state,
        value6: action.data,
      };
    case "value7":
      return {
        ...state,
        value7: action.data,
      };

    case "value8":
      return {
        ...state,
        value8: action.data,
      };

    case "value9":
      return {
        ...state,
        value9: action.data,
      };
    case "value10First":
      return {
        ...state,
        value10: { ...state.value10, first: action.data },
      };
    case "value10Second":
      return {
        ...state,
        value10: { ...state.value10, second: action.data },
      };
    case "value15":
      return {
        ...state,
        value15: action.data,
      };
    case "value16":
      return {
        ...state,
        value16: action.data,
      };
    case "value17":
      return {
        ...state,
        value17: action.data,
      };
    case "value18":
      return {
        ...state,
        value18: action.data,
      };
    case "value21":
      return {
        ...state,
        value21: action.data,
      };
    case "value23":
      return {
        ...state,
        value23: action.data,
      };
    case "value25":
      return {
        ...state,
        value25: action.data,
      };
    case "value26":
      return {
        ...state,
        value26: action.data,
      };
    case "value27":
      return {
        ...state,
        value27: action.data,
      };

    case "value28":
      return {
        ...state,
        value28: action.data,
      };
    case "value30":
      return {
        ...state,
        value30: action.data,
      };

    default:
      return state;
  }
};
export default ValueReducer;
