import React, { PropTypes } from 'react';
import './CommentList.css';

export const CommentList = React.createClass({
  render() {
    return (
      <div>
        <h5>Comments</h5>
        <p>This wine is awesome!</p>
        <p>This is too expensive :-(</p>
      </div>
    );
  }
});
