import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  boxStyle: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
const Spinner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.boxStyle}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
