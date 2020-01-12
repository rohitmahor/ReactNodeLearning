import { TextField, InputAdornment } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/Search";
import React from "react";

export default function SearchBox() {
  return (
    <form
      noValidate
      autoComplete="off"
      style={{ margin: "15px 15px 0 0", display: "inline-block" }}
    >
      <TextField
        id="outlined-search-input"
        label="Search  "
        type="text"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
          style: {
              height: "40px"
          }
        }}
      />
    </form>
  );
}
