// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import ApartmentIcon from "@material-ui/icons/Apartment";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import DescriptionIcon from "@material-ui/icons/Description";
import GroupIcon from "@material-ui/icons/Group";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import EqualizerIcon from "@material-ui/icons/Equalizer";

//pages
import WIPPage from "pages/WIPPage.js";
import RealEstatePage from "pages/RealEstatePage.js";
import FinancingPage from "pages/FinancingPage.js";
import TaxPage from "pages/TaxPage.js";
// import RECalculatorA from "pages/RECalculatorA.js";
// import RECalculatorB from "pages/RECalculatorB.js";
// import RECalculatorC from "pages/RECalculatorC.js";
import FinCalculatorA from "pages/FinCalculatorA.js";
import FinCalculatorB from "pages/FinCalculatorB.js";
// import FinCalculatorC from "pages/FinCalculatorC.js";
// import TaxCalculatorA from "pages/TaxCalculatorA.js";
// import TaxCalculatorB from "pages/TaxCalculatorB.js";
// import TaxCalculatorC from "pages/TaxCalculatorC.js";

var dashRoutes = [
  {
    layout: "/calculator",
    path: "/dashboard",
    component: WIPPage,
    name: "Dashboard",
    icon: DashboardIcon,
  },

  {
    collapse: true,
    name: "Real Estate",
    icon: ApartmentIcon,
    state: "stateA",
    views: [
      {
        layout: "/calculator",
        path: "/re-calc-a",
        name: "Buy or Rent",
        mini: "A",
        component: WIPPage,
      },
      {
        layout: "/calculator",
        path: "/re-calc-b",
        name: "Sell or Rent-out",
        mini: "B",
        component: WIPPage,
      },
      {
        layout: "/calculator",
        path: "/re-calc-c",
        name: "Your Mietendeckel",
        mini: "C",
        component: WIPPage,
      },
    ],
  },

  {
    collapse: true,
    name: "Financing",
    icon: BusinessCenterIcon,
    state: "stateB",
    views: [
      {
        layout: "/calculator",
        path: "/fin-calc-a",
        name: "Check your Loan",
        mini: "L",
        component: FinCalculatorA,
      },
      {
        layout: "/calculator",
        path: "/fin-calc-b",
        name: "Check your Mortgage",
        mini: "M",
        component: WIPPage,
      },
      {
        layout: "/calculator",
        path: "/fin-calc-c",
        name: "Check Repayment Penalty",
        mini: "P",
        component: WIPPage,
      },
    ],
  },

  {
    collapse: true,
    name: "Tax",
    icon: DescriptionIcon,
    state: "stateC",
    views: [
      {
        layout: "/calculator",
        path: "/tax-calc-a",
        name: "Your tax rate",
        mini: "R",
        component: WIPPage,
      },
      {
        layout: "/calculator",
        path: "/tax-calc-b",
        name: "Your tax class",
        mini: "C",
        component: WIPPage,
      },
      {
        layout: "/calculator",
        path: "/tax-calc-c",
        name: "Estimate your tax",
        mini: "T",
        component: WIPPage,
      },
    ],
  },

  {
    layout: "/main",
    path: "/real-estate",
    component: RealEstatePage,
    name: "Real Estate",
    icon: ApartmentIcon,
    invisibleOnSidebar: true,
  },
  {
    layout: "/main",
    path: "/financing",
    component: FinancingPage,
    name: "Financing",
    icon: BusinessCenterIcon,
    invisibleOnSidebar: true,
  },
  {
    layout: "/main",
    path: "/tax",
    component: TaxPage,
    name: "Tax",
    icon: DescriptionIcon,
    invisibleOnSidebar: true,
  },

  {
    layout: "/main",
    path: "/about",
    name: "About Us",
    icon: EqualizerIcon,
    component: WIPPage,
  },
  {
    layout: "/main",
    path: "/team",
    name: "Team",
    icon: GroupIcon,
    component: WIPPage,
  },
  {
    layout: "/main",
    path: "/contacts",
    name: "Contacts",
    icon: ContactMailIcon,
    component: WIPPage,
  },
];

export default dashRoutes;
