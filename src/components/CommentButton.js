import React, { PropTypes } from 'react';
import './CommentButton.css';

export const CommentButton = React.createClass({
  render() {
    return (
      <a className="waves-effect waves-teal btn-flat" onClick={this.props.openCommentModal}>
        Comment <i className="material-icons left">comment</i>
      </a>
    );
  }
});
