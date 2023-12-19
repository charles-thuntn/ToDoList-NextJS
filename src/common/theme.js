const { createMuiTheme } = require("@material-ui/core/styles");

const theme = createMuiTheme({
  color: {
    primary: "#007e9b",
    secondary: "#c46d00",
    error: "#ff0000",
    textColor: "#FFFFFF",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 4,
    backgroundColor: "#781FA2",
    textColor: "#FFFFFF",
    border: "#FFFFF",
  },
});

export default theme;
