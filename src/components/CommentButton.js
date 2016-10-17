import React from 'react';

export const CommentButton = React.createClass({
  render() {
    return (
      <a className="waves-effect waves-teal btn-flat" onClick={this.props.openCommentModal}>
        Comment <i className="material-icons left">comment</i>
      </a>
    );
  }
});
