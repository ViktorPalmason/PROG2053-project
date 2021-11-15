import React from 'react';
import {Link} from 'react-router-dom';

import {
  Typography,
  
} from '@material-ui/core';
import './userPhotos.css';

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    var photos = window.cs142models.photoOfUserModel(this.props.match.params.userId);

    return (

      <div>
      {photos.map((picture) => (
        <div key={picture._id + picture.date_time}>
          <img className="img" key={picture._id} src={'images/' + picture.file_name} width="40%"/>
          <p key={picture.date_time} className="imgDate">Published: {picture.date_time}</p>
    
          {picture.comments ? picture.comments.map((test) => (
            <div key={test.comment}>
              <div className="box" ><Link to={"/users/" + test.user._id} className="link">{test.user.first_name} {test.user.last_name}</Link>
              <p className="date">{test.date_time}</p> <p className="comment">{test.comment}</p> </div>
              </div>
          )) : <p className="nocom">Picture has no comments</p>}
          </div>
          
      ))}
      </div>

    );
      
  }
}

export default UserPhotos;
