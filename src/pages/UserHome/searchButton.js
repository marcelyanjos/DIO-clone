import * as React from "react";
import { Box, InputAdornment, TextField, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../../components/theme";

const CssTextField = styled(TextField)({
  input: {
    fontFamily: "Open Sans",
    fontSize: "14px",
    color: "#fafafa",
    "&::placeholder": {
      opacity: 0.6,
    },
  },
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderRadius: "10px",
    borderBottomColor: "#2d2d37",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "10px",
      borderColor: "#2d2d37",
    },
    "&:hover fieldset": {
      borderRadius: "10px",
      borderColor: "#2d2d37",
    },
    "&.Mui-focused fieldset": {
      borderRadius: "10px",
      borderColor: "#2d2d37",
    },
  },
});

export default function CustomizedInputs() {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        ml: 1,
        borderRadius: 2,
        display: "grid",
        maxWidth: "62%",
        bgcolor: "#2d2d37",
        [theme.breakpoints.down("lg")]: {
          display: "none",
        },
      }}
    >
      <CssTextField
        placeholder="Custom CSS"
        size="small"
        id="custom-css-outlined-input"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#fafafa" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
