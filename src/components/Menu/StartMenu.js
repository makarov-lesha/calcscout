import React from "react";
import { Link } from "react-router-dom";

import Button from "components/CustomButtons/Button.js";

const StartMenu = (props) => {
  const { setMenuIndex } = props;
  const initialDisplay = (
    <>
      <Button color="facebook" onClick={() => setMenuIndex(1)}>
        Real Estate
      </Button>
      <Button color="twitter" onClick={() => setMenuIndex(2)}>
        Financing
      </Button>
      <Button color="tumblrColor" onClick={() => setMenuIndex(3)}>
        Tax
      </Button>
    </>
  );

  const realEstateCalculators = (
    <>
      <Button color="twitter" component={Link} to="/calculator/re-calc-a">
        Buy or Rent
      </Button>
      <Button color="tumblrColor" component={Link} to="/calculator/re-calc-b">
        Sell or Rent-out
      </Button>
      <Button color="facebook" component={Link} to="/calculator/re-calc-c">
        Your "Mietendeckel"
      </Button>
    </>
  );

  const financingCalculators = (
    <>
      <Button color="twitter" component={Link} to="/calculator/fin-calc-a">
        Check your Loan
      </Button>
      <Button color="tumblrColor" component={Link} to="/calculator/fin-calc-b">
        Check your Mortgage
      </Button>
      <Button color="facebook" component={Link} to="/calculator/fin-calc-c">
        Early Repayment Penalty
      </Button>
    </>
  );

  const taxCalculators = (
    <>
      <Button color="twitter" component={Link} to="/calculator/tax-calc-a">
        Your tax rate
      </Button>
      <Button color="tumblrColor" component={Link} to="/calculator/tax-calc-b">
        Your tax class
      </Button>
      <Button color="facebook" component={Link} to="/calculator/tax-calc-c">
        Estimate your tax
      </Button>
    </>
  );

  switch (props.menuIndex) {
    case 0:
      return initialDisplay;
    case 1:
      return realEstateCalculators;

    case 2:
      return financingCalculators;

    case 3:
      return taxCalculators;

    default:
      return initialDisplay;
  }
};

export default StartMenu;
