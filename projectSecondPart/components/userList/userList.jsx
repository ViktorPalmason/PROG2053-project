import React from "react";
import { Link } from "react-router-dom";

import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import "./userList.css";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
    };

    var user = fetchModel("http://localhost:3000/user/list");

    user.then((response) => {
      this.setState({ userList: response.data });
    });
  }

  render() {
    return (
      <div>
        <Typography variant="body1">&nbsp;&nbsp;&nbsp;Friends:</Typography>
        <List component="nav">
          {this.state.userList.map((user) => (
            <ListItem
              key={user._id}
              button={true}
              divider={true}
              component={Link}
              to={"/users/" + user._id}
            >
              <ListItemText primary={user.first_name + " " + user.last_name} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default UserList;
