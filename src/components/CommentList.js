import React, { PropTypes } from 'react';
import { Comment, Loader } from '.';
import * as WinesService from '../services/Wines';
import './CommentList.css';

export const CommentList = React.createClass({
  getInitialState() {
    return {
      comments: []
    };
  },
  componentDidMount() {
    this.updateList();
  },
  componentWillReceiveProps(nextProps) {
    this.setState({ comments: [] }, () => {
      this.updateList();
    });
  },
  updateList() {
    return WinesService.fetchComments(this.props.wine.id).then(comments => {
      this.setState({ comments });
    });
  },
  render() {
    return (
      <div>
        <h5>Comments</h5>
        {this.state.comments.length === 0 && <Loader />}
        {this.state.comments.map(comment => <Comment key={comment.date} comment={comment} />)}
      </div>
    );
  }
});
