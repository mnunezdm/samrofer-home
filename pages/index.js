import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "../components/Parallax/Parallax.js";

import styles from "../styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "../pages-sections/Landing/ProductSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export function getStaticProps() {
  return {
    props: {
      igSamrofer: process.env.IG_SAMROFER,
      mailSamrofer: process.env.MAIL_SAMROFER,
      telSamrofer: process.env.TEL_SAMROFER,
    },
  };
}

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Reformas samrofer"
        rightLinks={
          <HeaderLinks
            igSamrofer={props.igSamrofer}
            telSamrofer={props.telSamrofer}
          />
        }
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/landing/v-1.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.title}>¿Necesitas reformar tu casa?</h2>
              <h3>
                Llevamos más de 25 años realizando todo tipo de reformas.
                Contacta con nosotros
              </h3>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <Footer mail={props.mailSamrofer} />
    </>
  );
}
