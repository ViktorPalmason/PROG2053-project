import React from 'react';
import {Link} from 'react-router-dom';
import {
  Typography,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import PhotoSizeSelectActual from '@material-ui/icons/PhotoSizeSelectActual';
import './userDetail.css';

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

        <Typography variant="h2" className='name'>
        {cs142models.userModel(this.props.match.params.userId).first_name} {cs142models.userModel(this.props.match.params.userId).last_name}
        </Typography> 

        <Typography>
        ID: {cs142models.userModel(this.props.match.params.userId)._id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography> 

        <Typography>
        Occupation: {cs142models.userModel(this.props.match.params.userId).occupation} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>

        <Typography>
        Location: {cs142models.userModel(this.props.match.params.userId).location}
        </Typography>  < hr/>

        <Typography>
        {cs142models.userModel(this.props.match.params.userId).description}
        </Typography> < br/>< br/>

        <ListItem className="button" button={true} component={Link} to={"/photos/" + cs142models.userModel(this.props.match.params.userId)._id}>
          <ListItemIcon className="icon"><PhotoSizeSelectActual  style={{ fill: '#ffffff' }}/></ListItemIcon>
          <ListItemText primary={"Photos"}/>
        </ListItem>

      </div>

    );
  }
}

export default UserDetail;
