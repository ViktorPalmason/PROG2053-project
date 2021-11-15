import React from 'react';
import {Link} from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: window.cs142models.userListModel(),
    };

}

  render() {
    return (
      <div>
        <Typography variant="body1">
          &nbsp;&nbsp;&nbsp;Friends:
        </Typography>
        <List component="nav">
            {this.state.userList.map((user) => (
            <ListItem  key={user._id} button="true" divider="true" component={Link} to={"/users/" + user._id}>
              <ListItemText primary={user.first_name + ' ' + user.last_name}/>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default UserList;
