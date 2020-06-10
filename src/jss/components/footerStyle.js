import {
  defaultFont,
  container,
  containerFluid,
  whiteColor,
  grayColor,
  hexToRgb,
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
    paddingRight: "30px",
    paddingLeft: "30px",
    position: "relative",
  },
  a: {
    color: grayColor[7],
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  list: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
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
  },
  navLink: {
    color: grayColor[7],
    margin: "0 5px",
    paddingTop: "15px",
    paddingBottom: "15px",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    textDecoration: "none",
    "&:hover,&:focus": {
      color: grayColor[2],
      background: "rgba(" + hexToRgb(grayColor[17]) + ", 0.2)",
    },
  },
  footerGrid: {
    paddingLeft: "0px !important",
  },
  whiteFooter: {
    color: whiteColor,
  },
  footerPadding: {
    padding: "0px",
  },
  horizontalFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  verticalFooter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};
export default footerStyle;
