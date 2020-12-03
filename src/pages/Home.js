import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideMenu from '../components/MenuContent';
import Footer from '../components/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideMenu />
      <Footer />
    </div>
  );
}

export default Home;