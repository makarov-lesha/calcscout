import {
    whiteColor,
    blackColor,
    hexToRgb,
  } from "../material-dashboard-pro-react.js";
  
  const mainStyle = (theme) => ({
    wrapper: {
      height: "auto",
      minHeight: "100vh",
      position: "relative",
      // border: "3px solid #ED1054",
      top: "0",
    },
    fullPage: {
      padding: "120px 0",
      position: "relative",
      minHeight: "100vh",
      display: "flex!important",
      margin: "0",
      // border: "0",
      // border: "3px solid #73AD21",
      color: whiteColor,
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      height: "100%",
      // [theme.breakpoints.down("sm")]: {
      //   minHeight: "fit-content!important",
      // },
      "& footer": {
        position: "absolute",
        bottom: "0",
        width: "100%",
        border: "none !important",
        // border: "3px solid #20D1E7",
      },
      "&:before": {
        backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.65)",
      },
      "&:before,&:after": {
        display: "block",
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        zIndex: "2",
        // border: "3px solid #4439AC",
      },
    },
  });
  
  export default mainStyle;
  