import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  upperHalf: {
    height: "50%",
    backgroundColor: "red",
  },
  lowerHalf: {
    height: "50%",
    backgroundColor: "blue",
  },
});

export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Container classes={[classes.upperHalf]}></Container>
      <Container classes={[classes.lowerHalf]}></Container>
    </Container>
  );
}
