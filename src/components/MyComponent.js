import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import AccountIcon from "@material-ui/icons/AccountCircle";

const styles = {
  root: {
    margin: 20
  },
  paper: {
    height: 100
  },
  inner: {
    margin: "auto"
  },
  avatar: {
    backgroundColor: "grey",
    height: 50,
    width: 50,
    margin: "auto"
  },
  icon: {
    height: 50,
    width: 50
  }
};

class MyComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid item xs={6} className={classes.inner}>
                  <Avatar className={classes.avatar}>
                    <AccountIcon className={classes.icon} />
                  </Avatar>
                </Grid>
                <Grid item xs={6} className={classes.inner}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid item xs={6} className={classes.inner}>
                  <Avatar className={classes.avatar}>
                    <AccountIcon className={classes.icon} />
                  </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid item xs={6} className={classes.inner}>
                  <Avatar className={classes.avatar}>
                    <AccountIcon className={classes.icon} />
                  </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid item xs={6} className={classes.inner}>
                  <Avatar className={classes.avatar}>
                    <AccountIcon className={classes.icon} />
                  </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MyComponent);
