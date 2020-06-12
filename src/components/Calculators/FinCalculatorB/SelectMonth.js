import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "95%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  flexGrowType: {
    flexGrow: 1,
  },
}));

export default function SelectMonth(props) {
  const { title, numberOfItems, initialItem } = props;

  const classes = useStyles();
  const [itemSelected, setItemSelected] = React.useState(initialItem);

  const handleChange = (event) => {
    setItemSelected(event.target.value);
  };

  return (
    <div className={classes.flexGrowType}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={itemSelected}
          onChange={handleChange}
          label={title}
        >
          <MenuItem value={1}>January</MenuItem>
          <MenuItem value={2}>February</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>June</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>August</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>December</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

SelectMonth.propTypes = {
  title: PropTypes.string,
  numberOfItems: PropTypes.number,
  initialItem: PropTypes.string,
};
