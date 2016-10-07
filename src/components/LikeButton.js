import React, { PropTypes } from 'react';
import './LikeButton.css';

export const LikeButton = React.createClass({
  render() {
    return (
      <a className="waves-effect waves-teal btn-flat">
        Like <i className="material-icons left">thumb_up</i>
      </a>
    );
  }
});
