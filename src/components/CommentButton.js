import React, { Component } from 'react';

export class CommentButton extends Component {
  render() {
    return (
      <a className="waves-effect waves-teal btn-flat" onClick={this.props.openCommentModal}>
        Comment <i className="material-icons left">comment</i>
      </a>
    );
  }
}
