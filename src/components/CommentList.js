import React, { Component } from 'react';
import { Comment, Loader } from '.';
import * as WinesService from '../services/Wines';

export class CommentList extends Component {
  state = {
    loading: false,
    comments: [],
  };

  componentDidMount() {
    this.updateList();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ comments: [] }, () => {
      this.updateList();
    });
  }

  updateList = () => {
    this.setState({ loading: true }, () => {
      return WinesService.fetchComments(this.props.wine.id).then(comments => {
        this.setState({ comments, loading: false });
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.comments.length > 0 && <h5>Comments</h5>}
        {this.state.loading && <Loader />}
        {!this.state.loading &&
          this.state.comments.map(comment => <Comment key={comment.date} comment={comment} />)}
      </div>
    );
  }
}
