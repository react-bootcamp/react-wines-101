import React, { PropTypes } from 'react';
import './CommentModal.css';

export const CommentModal = React.createClass({
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
        window.$(this.modalNode).closeModal();
      }
    }
  },
  componentWillUnmount() {
    window.$(this.modalNode).closeModal();
  },
  render() {
    return (
      <div ref={ref => this.modalNode = ref} className="modal">
        <div className="modal-content">
          <h4>Tell us something about this wine</h4>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="inputComment" type="text" className="validate" />
                <label htmlFor="inputComment">Your comment</label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action waves-effect waves-green btn-flat " onClick={this.props.closeCommentModal}>Submit</a>
          <a href="#!" className="modal-action waves-effect waves-green btn-flat " onClick={this.props.closeCommentModal}>Cancel</a>
        </div>
      </div>
    );
  }
});
