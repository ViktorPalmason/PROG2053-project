import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import PhotoSizeSelectActual from "@material-ui/icons/PhotoSizeSelectActual";
import "./userDetail.css";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };

    if (window.location.href.toString().includes("/users/")) {
      var id = window.location.href.slice(46, 70);
      var user = fetchModel("http://localhost:3000/user/" + id);
      user.then((response) => {
        this.setState({ user: response.data });
      });
    }

    {
      addEventListener("hashchange", () => {
        this.contextChange();
      });
    }
  }

  contextChange() {
    console.clear();
    if (this.state.user == this.state.user) {
      console.log("the users are the same");
      if (window.location.href.toString().includes("/users/")) {
        var id = window.location.href.slice(46, 70);
        var user = fetchModel("http://localhost:3000/user/" + id);
        user.then((response) => {
          this.setState({ user: response.data });
        });
      }
      console.log(this.state.user);
    } else {
      console.log("The users are not the same");
      console.log(this.state.user);
    }
  }

  render() {
    return (
      <div>
        <Typography variant="h2" className="name">
          {this.state.user.first_name} {this.state.user.last_name}
        </Typography>
        <Typography>
          ID: {this.state.user._id}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
        <Typography>
          Occupation: {this.state.user.occupation}{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
        <Typography>Location: {this.state.user.location}</Typography> <hr />
        <Typography>{this.state.user.description}</Typography> <br />
        <br />
        <ListItem
          className="button"
          button={true}
          component={Link}
          to={"/photos/" + this.state.user._id}
        >
          <ListItemIcon className="icon">
            <PhotoSizeSelectActual style={{ fill: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText primary={"Photos"} />
        </ListItem>
      </div>
    );
  }
}

export default UserDetail;
