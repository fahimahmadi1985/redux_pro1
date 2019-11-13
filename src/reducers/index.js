export default function(state, action) {
  switch (action.type) {
    case "HAPPY":
      return (state = "&128578;");
    case "SAD":
      return (state = ":(");
    default:
      return state;
  }
}
