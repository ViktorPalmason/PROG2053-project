import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import "./TopBar.css";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      version: "",
      userList: [],
    };

    var user = fetchModel("http://localhost:3000/test/info");
    user.then((response) => {
      this.setState({ version: response.data.__v });
    });

    var userList = fetchModel("http://localhost:3000/user/list");
    userList.then((response) => {
      this.setState({ userList: response.data });
    });

    {
      addEventListener("hashchange", () => {
        this.contextChange();
      });
    }
    {
      addEventListener("load", () => {
        this.contextChange();
      });
    }
  }

  contextChange() {
    var name;
    var id;
    var page;

    const test = document.querySelector(".test");

    if (window.location.href.toString().includes("/users/")) {
      id = window.location.href.slice(46, 70);
      page = "User details of ";
    } else if (window.location.href.toString().includes("/photos/")) {
      id = window.location.href.slice(47, 71);
      page = "Photos of ";
    }

    var userList = fetchModel("http://localhost:3000/user/list");
    userList.then((response) => {
      this.setState({ userList: response.data });
    });

    for (let i = 0; this.state.userList.length > i; i++) {
      if (this.state.userList[i]._id == id) {
        name =
          this.state.userList[i].first_name +
          " " +
          this.state.userList[i].last_name;
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
              Group 41
              <Typography>Version number: {this.state.version}</Typography>
            </Typography>
            <Typography
              className="test"
              variant="h6"
              color="inherit"
            ></Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
