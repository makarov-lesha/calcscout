import {
    defaultFont,
    container,
    containerFluid,
    whiteColor,
    grayColor,
  } from "../material-dashboard-pro-react.js";
  
  const footerStyle = {
    block: {},
    left: {
      float: "left!important",
      display: "block",
    },
    right: {
      margin: "0",
      fontSize: "14px",
      float: "right!important",
      padding: "15px",
    },
    center: {
      margin: "0",
      fontSize: "14px",
      // float: "right!important",
      padding: "15px 0 15px 0",
    },
    footer: {
      bottom: "0",
      borderTop: "1px solid " + grayColor[15],
      padding: "15px 0",
      ...defaultFont,
      zIndex: 4,
    },
    container: {
      zIndex: 3,
      ...container,
      position: "relative",
    },
    containerFluid: {
      zIndex: 3,
      ...containerFluid,
      paddingRight: "3rem",
      paddingLeft: "3rem",
      position: "relative",
    },
    a: {
      color: grayColor[7],
      textDecoration: "none",
      backgroundColor: "transparent",
    },
    list: {
      marginBottom: "0",
      padding: "0",
      marginTop: "0",
    },
    inlineBlock: {
      display: "inline-block",
      padding: "0",
      width: "auto",
    },
    whiteColor: {
      "&,&:hover,&:focus": {
        color: whiteColor,
      },
    },
    noPadding: {
      padding: "5px 0px !important",
    }
  };
  export default footerStyle;
  