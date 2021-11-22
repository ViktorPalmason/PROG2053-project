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

    this.componentDidMount();
    this.componentDidUpdate(this.state.user._id);
  }

    componentDidMount()
  {
    this.updateUser();
  }
    
  componentDidUpdate() { 
    if (window.location.href.slice(46, 70) !== this.state.user._id) {this.updateUser(); }
   }

   updateUser = () => { 
    var id = window.location.href.slice(46,71);
    var userInfo = fetchModel("http://localhost:3000/user/" + id);

    userInfo.then((response) => {
      this.setState({user: response.data});
    });

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
