import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "../css/styles.css";
import rena from "../img/rena.png";
import baro from "../img/baro.png";
import classic from "../img/classic.png";
import romance from "../img/romance.png";
import impress from "../img/impress.png";
import mordern from "../img/mordern.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MM00Img = [
  {
    imgPath: rena,
  },
  {
    imgPath: baro,
  },
  {
    imgPath: classic,
  },
  {
    imgPath: romance,
  },
  {
    imgPath: impress,
  },
  {
    imgPath: mordern,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    width: "50%",
    margin: "70px 340px",
    flexGrow: 1,
    display: "flex",
    flexDirection: "center",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "center",
    alignItems: "center",
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: "70vh",
    display: "block",
    maxWidth: 1300,
    overflow: "hidden",
    width: "100%",
  },
}));

const MM00 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = MM00Img.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{MM00Img[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {MM00Img.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
};

export default MM00;
