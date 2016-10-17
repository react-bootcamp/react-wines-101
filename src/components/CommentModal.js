import React from 'react';
import * as WinesService from '../services/Wines';

export const CommentModal = React.createClass({
  getInitialState() {
    return {
      comment: ''
    };
  },
  componentDidMount() {
    if (this.props.isOpen) {
      window.$(this.modalNode).openModal();
    }
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      if (nextProps.isOpen) {
        window.$(this.modalNode).openModal();
      } else {
        this.setState({ comment: '' });
        window.$(this.modalNode).closeModal();
      }
    }
  },
  componentWillUnmount() {
    window.$(this.modalNode).closeModal();
  },
  onSubmit(e) {
    e.preventDefault();
    const comment = this.state.comment;
    this.setState({ comment: '' });
    WinesService.commentWine(this.props.wine.id, comment).then(() => {
      this.props.closeCommentModal();
    });
  },
  onCommentChange(e) {
    this.setState({ comment: e.target.value });
  },
  render() {
    return (
      <div ref={ref => this.modalNode = ref} className="modal">
        <div className="modal-content">
          <h4>Tell us something about this wine</h4>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="inputComment" type="text" className="validate" value={this.state.comment} onChange={this.onCommentChange} />
                <label htmlFor="inputComment">Your comment</label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action waves-effect waves-green btn-flat " onClick={this.onSubmit}>Submit</a>
          <a href="#!" className="modal-action waves-effect waves-green btn-flat " onClick={this.props.closeCommentModal}>Cancel</a>
        </div>
      </div>
    );
  }
});
