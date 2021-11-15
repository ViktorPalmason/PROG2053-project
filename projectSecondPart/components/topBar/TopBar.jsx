import React from 'react';
import {
  AppBar, Toolbar, Typography, Grid
} from '@material-ui/core';
import './TopBar.css';
import fetchModel from "../../lib/fetchModelData";


/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }


  testFetch() {
    fetchModel("http://localhost:3000/test/info");
    fetchModel("http://localhost:3000/user/list");
    fetchModel("http://localhost:3000/user/57231f1a30e4351f4e9f4bd7");
    fetchModel("http://localhost:3000/photosOfUser/57231f1a30e4351f4e9f4bd7");
  }

  contextChange() {

    var name;
    var id;
    var page;
    var list =  window.cs142models.userListModel();

    const test = document.querySelector('.test');

    if (window.location.href.toString().includes("/users/")) {
      id = window.location.href.slice(46,70);
      page = "User details of ";
    }
  
    else if (window.location.href.toString().includes("/photos/")) {
      id = window.location.href.slice(47,71);
      page = "Photos of ";
    }

    for (let i = 0; list.length > i; i++) {
      if (list[i]._id == id) {
        name = list[i].first_name + ' ' + list[i].last_name;
      }
    }

    if (page && name) {
      test.textContent = page + name;
    }

  }

  render() {

    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Grid container justify="space-between">
          <Typography variant="h5" color="inherit">
              Flere personer... 
              {this.testFetch()}
          </Typography>

          <Typography className="test" variant="h6" color="inherit">
            {addEventListener('hashchange', () => { this.contextChange() })}
            {addEventListener('load', () => { this.contextChange() })}
          </Typography>
          

          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
