import React, { PropTypes } from 'react';
import './Comment.css';

export const Comment = React.createClass({
  render() {
    return (
      <p>{this.props.label}</p>
    );
  }
});
