const styles = () => ({
  root: {
    "& .MuiPaper-root": {
      borderRadius: "50%",
      "& .MuiDialogContent-root": {
        padding: 0,
        margin: 0,
      },
    },
  },
  wrapperLoading: {
    width: 50,
    height: 50,
    background: "rgba(0,0,0,0.4)",
  },
  iconLoading: {
    // position: "fixed",
    width: 70,
    height: 70,
  },
});
export default styles;
