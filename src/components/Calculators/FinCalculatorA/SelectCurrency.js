import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrency, changeCurrencyLabel } from "stateManager/index";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "GBP",
    label: "£",
  },
  {
    value: "RUB",
    label: "₽",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginTop: "5px",

      width: "100%",
      // maxWidth: "12rem",
    },
  },
}));

export default function SelectCurrency() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);

  const handleChange = (event) => {
    dispatch(changeCurrency(event.target.value));

    dispatch(
      changeCurrencyLabel(
        currencies.filter((item) => item.value === event.target.value)[0][
          "label"
        ]
      )
    );
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select currency"
          value={currency}
          onChange={handleChange}
          //   helperText="Loan currency"
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
