import React, { PropTypes } from 'react';
import { Comment } from '.';
import './CommentList.css';

export const CommentList = React.createClass({
  render() {
    return (
      <div>
        <h5>Comments</h5>
        <Comment label="This wine is awesome!" />
        <Comment label="This is too expensive :-(" />
      </div>
    );
  }
});
