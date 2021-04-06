import React from 'react';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{'background-color': '#11151C'}}>
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
        <Link to="/" style={{'text-decoration': 'none'}}>
            ReactJS
        </Link>
          </Typography>
          <Badge  color="secondary">
            <ShoppingBasketIcon style={{'cursor':'pointer'}} />
          </Badge>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
