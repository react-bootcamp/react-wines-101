import React, { PropTypes } from 'react';
import { Loader } from '.';
import * as WinesService from '../services/Wines';
import './LikeButton.css';

export const LikeButton = React.createClass({
  getInitialState() {
    return {
      liked: null
    };
  },
  componentDidMount() {
    this.updateLike();
  },
  componentWillReceiveProps(nextProps) {
    this.setState({ liked: null }, () => {
      this.updateLike();
    });
  },
  updateLike() {
    return WinesService.fetchLiked(this.props.wine.id).then(liked => {
      this.setState({ liked: liked.like });
    });
  },
  toggle(e) {
    e.preventDefault();
    if (this.state.liked) {
      this.setState({ liked: !this.state.liked }, () => {
        WinesService.unlikeWine(this.props.wine.id).then(() => this.updateLike());
      });
    } else {
      this.setState({ liked: !this.state.liked }, () => {
        WinesService.likeWine(this.props.wine.id).then(() => this.updateLike());
      });
    }
  },
  render() {
    return (
      <a className="waves-effect waves-teal btn-flat" onClick={this.toggle}>
        {this.state.liked === null && (<Loader />)}
        {this.state.liked === true && (<span>Like <i className="material-icons left">thumb_up</i></span>)}
        {this.state.liked === false && (<span>Unlike <i className="material-icons left">thumb_down</i></span>)}
      </a>
    );
  }
});
