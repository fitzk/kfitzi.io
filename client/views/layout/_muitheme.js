import { blueGrey500, blueGrey200, blueGrey700, blueGrey50, redA200, red400, red50, redA100, deepOrangeA200, deepOrange500, deepOrange50, deepOrange100, deepOrange200, black, darkBlack, white } from "material-ui/styles/colors";
import { fade } from "material-ui/utils/colorManipulator";
import spacing from "material-ui/styles/spacing";

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  tooltip: {
    color: black,
    rippleBackgroundColor: deepOrange500,
  },
  palette: {
    primary1Color: "#9E9E9E",
    primary2Color: "#212121",
    primary3Color: "#212121",
    accent1Color: "#212121",
    accent2Color: "#BDBDBD",
    accent3Color: "#BDBDBD",
    textColor: "#212121",
    alternateTextColor: "#212121",
    canvasColor: white,
    borderColor: black,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: black,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: black,
  },
};
