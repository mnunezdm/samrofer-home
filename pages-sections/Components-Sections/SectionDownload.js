/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Do you love this UI Kit?</h2>
            <h4>
              Cause if you do, it can be yours for FREE. Hit the buttons below
              to navigate to our website where you can find the kit. We also
              have the Bootstrap 4 version on plain HTML. Start a new project or
              give an old Bootstrap project a new look!
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-download-section"
              target="_blank"
            >
              Free NextJS Download
            </Button>
            <Button
              color="primary"
              size="lg"
              href="https://www.creative-tim.com/product/material-kit-react?ref=njsmk-download-section"
              target="_blank"
            >
              Free React Downoad
            </Button>
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Want more?</h2>
            <h4>
              Comming soon{" "}
              <a href="#pablo" onClick={e => e.preventDefault()}>
                NextJS Material Kit PRO{" "}
              </a>
              .It will have a huge number of components, sections and example
              pages. You Could Start Your Development With A Badass Material-UI
              and NexJS inspired by Material Design.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={10}>
            <Button
              color="rose"
              size="lg"
              disabled
              href="https://www.creative-tim.com/product/material-kit-pro-react?ref=njsmk-download-section"
              target="_blank"
            >
              NextJS Material Kit PRO
            </Button>
            <Button
              color="rose"
              size="lg"
              href="https://www.creative-tim.com/product/material-kit-pro-react?ref=njsmk-download-section"
              target="_blank"
            >
              Material Kit PRO React
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you for supporting us!</h3>
          </GridContainer>
          <Button
            color="twitter"
            href="https://twitter.com/home?status=NextJS%20Material%20Kit%20is%20a%20NextJS%20UI%20Kit%20with%20a%20fresh,%20new%20design%20inspired%20by%20Google's%20Material%20Design,%20based%20on%20Material%20Kit%20React%20by%20Creative%20Tim%20and%20Material%20UI%20%E2%9D%A4%EF%B8%8Fhttps%3A//demos.creative-tim.com/nextjs-material-kit/%20%23nextjs%20%23material%20%23design%20%23ui%20%23kit%20%23free%20%20via%20%40CreativeTim"
            target="_blank"
          >
            <i className={classes.socials + " fab fa-twitter"} /> Tweet
          </Button>
          <Button
            color="facebook"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnextjs-material-kit%2Fcomponents&t=NextJS%20Material%20Kit%20by%20Creative%20Tim"
            target="_blank"
          >
            <i className={classes.socials + " fab fa-facebook-square"} /> Share
          </Button>
          <Button
            color="github"
            href="https://github.com/creativetimofficial/nextjs-material-kit"
            target="_blank"
          >
            <i className={classes.socials + " fab fa-github"} /> Star
          </Button>
        </div>
      </div>
    </div>
  );
}