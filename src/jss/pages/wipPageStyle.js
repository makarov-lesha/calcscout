import {
    container,
    defaultFont,
    grayColor,
  } from "../material-dashboard-pro-react.js";
  
  const wipPageStyle = (theme) => ({
    container: {
      ...container,
      zIndex: "4",
      // [theme.breakpoints.down("sm")]: {
      //   paddingTop: "40px",
      // },
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
      color: grayColor[1],
      textAlign: "center",
    },
  });
  
  export default wipPageStyle;