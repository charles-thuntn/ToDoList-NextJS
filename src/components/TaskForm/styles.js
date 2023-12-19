const styles = (theme) => ({
  modalStyles: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    // border:  "2px solid #000",
    boxShadow: theme.shadows[5],
  },
  header: {
    backgroundColor: "#007e9b",
    color: "#FFFFFF",
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#FFFFFF",
    fontWeight: 700,
    textTransform: "capitalize",
  },
  content: {
    padding: theme.spacing(2),
  },
});
export default styles;
