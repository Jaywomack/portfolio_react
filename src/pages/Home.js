import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Image from '../assets/img/jay_profile.svg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PersonIcon from '@material-ui/icons/Person';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  profileImg: {
    borderRadius: '50%'
  },
  socialGrid: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}));

function valuetext(value) {
  return `${value}`;
}
export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className='mainTwoGridContainer'>
        <Grid item xs='12' md='6'>
          <Paper className={classes.paper}>
            <img
              className={classes.profileImg}
              width='150px'
              height='150px'
              src={Image}
              alt=''
            />
            <Typography variant='h4' gutterBottom>
              Hey! I'm Jay Womack
            </Typography>
            <Typography>
              I am a frontEnd Developer. Based in the Inland NorthWest.
            </Typography>
            <Grid container spacing={3} className={classes.socialGrid}>
              <Grid item>
                <Paper className={classes.paper} xs={3}>
                  <GitHubIcon color='secondary' />
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper} xs={3}>
                  <LinkedInIcon color='secondary' />
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper} xs={3}>
                  <PersonIcon color='secondary' />
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper} xs={3}>
                  <FileCopyIcon color='secondary' />
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs='12' md='6'>
          <Paper className={classes.paper}>
            <Typography id='discrete-slider' gutterBottom>
              JavaScript
            </Typography>
            <Slider
              defaultValue={30}
              getAriaValueText={valuetext}
              aria-labelledby='discrete-slider'
              valueLabelDisplay='auto'
              step={10}
              marks
              min={10}
              max={110}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
