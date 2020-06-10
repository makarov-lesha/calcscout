import {
  container,
  defaultFont,
  grayColor,
  card,
  whiteColor,
} from "../material-dashboard-pro-react.js";

const startPageStyle = (theme) => ({
  container: {
    ...container,
    zIndex: "4",
  },
  title: {
    ...defaultFont,
    color: grayColor[1],
    marginTop: "0vh",
    marginBottom: "30px",
    textAlign: "center",
  },
  description: {
    fontSize: "18px",
    color: grayColor[3],
    textAlign: "center",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 200px))",
    gridAutoRows: "minmax(70px, 1fr)",
    gridGap: "0.5rem",
    justifyContent: "center",
    alignContent: "center",
  },
  itemA: {
    ...card,
    background: grayColor[2],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    color: whiteColor,
  },
  itemB: {
    ...card,
    background: grayColor[1],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    color: whiteColor,
  },
});

export default startPageStyle;
