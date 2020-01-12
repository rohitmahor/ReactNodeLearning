import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { fchmod } from "fs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

export interface Props {
  BookId: string;
  BookName: string;
}

export default function DropDownList() {
  const classes = useStyles();
  const [bookName, setbookName] = React.useState("");
  
  const inputLabel = React.useRef<HTMLLabelElement>(null);

  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setbookName(event.target.value as string);
  };

  return (
    <div>
      <FormControl variant="outlined" style={{width: "100%"}}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Book for Mapping
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined-label"
          value={bookName}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Cost Accounting and Financial Management</MenuItem>
          <MenuItem value={20}>Bank Financial Management</MenuItem>
          <MenuItem value={30}>Advance Bank Management</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
