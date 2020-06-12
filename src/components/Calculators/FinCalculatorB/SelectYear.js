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

export default function SelectYear(props) {
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
          <MenuItem value={2010}>2010</MenuItem>
          <MenuItem value={2011}>2011</MenuItem>
          <MenuItem value={2012}>2012</MenuItem>
          <MenuItem value={2013}>2013</MenuItem>
          <MenuItem value={2014}>2014</MenuItem>
          <MenuItem value={2015}>2015</MenuItem>
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

SelectYear.propTypes = {
  title: PropTypes.string,
  numberOfItems: PropTypes.number,
  initialItem: PropTypes.string,
};
