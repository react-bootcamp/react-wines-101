import React from 'react';
import './Comment.css';

export const Comment = React.createClass({
  render() {
    return (
      <p className="comment" data-title={this.props.comment.title} data-date={this.props.comment.date}>
      {this.props.comment.content}
      </p>
    );
  }
});
