export default function(state, action) {
  switch (action.type) {
    case "HAPPY":
      return (state = ":)");
    case "SAD":
      return (state = ":(");
    default:
      return state;
  }
}
