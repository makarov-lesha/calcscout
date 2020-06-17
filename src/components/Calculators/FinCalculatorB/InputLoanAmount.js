import React from "react";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { changeLoanAmount } from "stateManager/index";

import MaskedInput from "react-text-mask";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  const currencyLabel = useSelector((state) => state.currencyLabel);

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix={currencyLabel}
    />
  );
}

export default function InputLoanAmount() {
  const classes = useStyles();
  const loanAmount = useSelector((state) => state.loanAmount);
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    numberformat: "1000",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    dispatch(changeLoanAmount(parseInt(event.target.value)));
  };

  return (
    <div className={classes.root}>
      <TextField
        label="Input Loan Amount"
        variant="outlined"
        value={loanAmount}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    </div>
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
